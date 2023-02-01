import { assign, createMachine } from 'xstate';
import { send } from 'xstate/lib/actions';

export const guardDelayMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QAUCuBbADgAgEIEMAbAe2IDsA6AUSwBcBPAYjSwG0AGAXUVE2NgCWtAeR4gAHogCM7AOwUAbAGZZAJnYAWKRp0BWdQoA0IetIAcZilNVSlugJxK7G9vYUaAvh+MscBEuQUAGKohIT02L6QjAAiYABmhPi0YBzcSCB8gsKiGZII2vKqbmZqUrbqBsamCGZSFBr2TbJKCuzuUmb2ql4+GH5EpJQhYRFREIwAKgKpXGJZQiJkYvlaGhSqXXIKMvZS9uyq1YhdFLpmTpqyLpuyUgpe3iBkxBBwYr54g7m8-Is-EkQAFojCZgQoKOwoYdlI5zjI6r0QJ9-ENqHQar9sksVogNEcwbV5OdLhprodSvckSjvsNQuFIv1IPM-jllnlEKoFKoKLJdNCNLpWko3LJjggDpCLkorjdKbpqf0vgFKABBMKMrDMjILNm4hD6dgNBSlBR3bTnWRmcUWCjSmXte7FdjWR4eIA */
  createMachine(
    {
      id: 'Guard, Delays, Parallels',
      initial: 'Start',
      context: {
        airLevel: 0.05,
        airOutput: 0.1,
      },
      states: {
        Start: {
          on: {
            Attach: {
              target: 'Attached',
            },
          },
        },
        Attached: {
          type: 'parallel',
          states: {
            PumpDevice: {
              id: 'PumpDevice',
              initial: 'Released',
              states: {
                Released: {
                  on: {
                    PRESS: {
                      target: 'Pressed',
                      actions: 'sendPump',
                    },
                  },
                },
                Pressed: {
                  after: {
                    1000: 'Released',
                  },
                },
              },
            },
            Baloon: {
              initial: 'Empty',
              entry: 'increaseAirLevel',
              states: {
                Empty: {
                  entry: 'resetAirLevel',
                  on: {
                    PUMP: {
                      target: 'Idle',
                      actions: 'increaseAirLevel',
                    },
                  },
                },
                Idle: {
                  on: {
                    PUMP: {
                      target: 'Idle',
                      actions: 'increaseAirLevel',
                      cond: 'hasPlaceForAir',
                    },
                    Deflate: 'Empty',
                    Tie: '#Finished',
                  },
                },
              },
            },
          },
        },
        Finished: {
          id: 'Finished',
          type: 'final',
        },
      },
    },
    {
      guards: {
        hasPlaceForAir: (context, event) => context.airLevel < 1,
      },
      actions: {
        sendPump: send('PUMP'),
        increaseAirLevel: assign((context) => ({
          airLevel: context.airLevel + 0.15,
        })),
        resetAirLevel: assign((context) => ({
          airLevel: 0.05,
        })),
      },
    }
  );
