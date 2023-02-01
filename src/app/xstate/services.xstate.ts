import { assign, createMachine, send } from 'xstate';
import { fakeBackendCall } from '../fake-backend';

type ServicesContext = {
  airLevel: number,
  airOutput: number,
  color: number
}

export const servicesStateMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QAUCuBbADgAgEIEMAbAe2IDsA6AUSwBcBPAYjSwG0AGAXUVE2NgCWtAeR4gAHogCM7AOwUAbAGZZAJnYAWKRp0BWdQoA0IetIAcZilNVSlugJxK7G9vYUaAvh+MscBEuQUAGKohIT02L6QjAAiYABmhPi0YBzcSCB8gsKiGZII2vKqbmZqUrbqBsamCGZSFBr2TbJKCuzuUmb2ql4+GH5EpJQhYRFREIwAKgKpXGJZQiJkYvlaGhSqXXIKMvZS9uyq1YhdFLpmTpqyLpuyUgpe3iBkxBBwYr54g7m8-Is-EkQAFojCZgQoKOwoYdlI5zjI6r0QJ9-ENqHQar9sksVogNEcwbV5OdLhprodSvckSjvsNQuFIv1IPM-jllnlEKoFKoKLJdNCNLpWko3LJjggDpCLkorjdKbpqf0vgFKABBMKMrDMjILNm4hD6dgNBSlBR3bTnWRmcUWCjSmXte7FdjWR4eIA */
  createMachine(
    {
      id: 'Services Introduction',
      initial: 'Start',
      context: {
        airLevel: 0.05,
        airOutput: 0.1,
      color: 0
      },
      states: {
        Start: {
          on: {
            Attach: {
              target: 'Attached',
            },
            ChangeBaloon: {
              target: 'Exchanging Baloon'
            }
          },
        },
        'Exchanging Baloon': {
          invoke: {
            src: 'fetchBaloonColor',
            onDone: {
              target: 'Start',
              actions: assign((context: ServicesContext, event) => ({
                color: event.data
              }))
            }
          }
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
              id: 'Baloon',
              initial: 'Empty',
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
                  always: {
                    cond: 'isGoingToExplode',
                    target: 'Overfilled'
                  },
                  on: {
                    PUMP: {
                      target: 'Idle',
                      actions: 'increaseAirLevel',
                    },
                    Deflate: 'Empty',
                    Tie: '#Finished',
                  },
                },
                Overfilled: {
                    entry: 'showWarning',
                    on: {
                        Deflate: 'Empty',
                        Tie: '#Finished'
                    }
                }
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
      services: {
        fetchBaloonColor: () => fakeBackendCall()
      },
      guards: {
        isGoingToExplode: (context) => context.airLevel > 1
      },
      actions: {
        sendPump: send('PUMP'),
        increaseAirLevel: assign((context) => ({
          airLevel: context.airLevel + 0.15,
        })),
        resetAirLevel: assign((context) => ({
          airLevel: 0.05,
        })),
        showWarning: () => {
            alert('Too much air! Pumping stopped')
        },
      },
    }
  );
