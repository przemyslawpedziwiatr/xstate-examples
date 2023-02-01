import { assign, createMachine } from 'xstate';

export const contextCompoundMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QAUCuBbADgAgEIEMAbAe2IDsA6AUSwBcBPAYjSwG0AGAXUVE2NgCWtAeR4gAHogCM7AOwUAbAGZZAJnYAWKRp0BWdQoA0IetIAcZilNVSlugJxK7G9vYUaAvh+MscBEuQUAGKohIT02L6QjAAiYABmhPi0YBzcSCB8gsKiGZII2vKqbmZqUrbqBsamCGZSFBr2TbJKCuzuUmb2ql4+GH5EpJQhYRFREIwAKgKpXGJZQiJkYvlaGhSqXXIKMvZS9uyq1YhdFLpmTpqyLpuyUgpe3iBkxBBwYr54g7m8-Is-EkQAFojCZgQoKOwoYdlI5zjI6r0QJ9-ENqHQar9sksVogNEcwbV5OdLhprodSvckSjvsNQuFIv1IPM-jllnlEKoFKoKLJdNCNLpWko3LJjggDpCLkorjdKbpqf0vgFKABBMKMrDMjILNm4hD6dgNBSlBR3bTnWRmcUWCjSmXte7FdjWR4eIA */
  createMachine(
    {
      id: 'Context Compound',
      initial: 'Start',
      context: {
        airLevel: 0.05,
      },
      states: {
        Start: {
          on: {
            Pump: {
              target: 'Baloon',
            },
          },
        },
        Baloon: {
          initial: 'Idle',
          entry: 'increaseAirLevel',
          states: {
            'Empty': {
              entry: 'resetAirLevel',
              on: {
                Pump: {
                  target: 'Idle',
                  actions: 'increaseAirLevel',
                },  
              }
            },
            'Idle': {
              on: {
                Pump: {
                  target: 'Idle',
                  actions: 'increaseAirLevel',
                },  
                Deflate: 'Empty',
                Tie: '#Finished',
              }
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
      actions: {
        increaseAirLevel: assign((context) => ({
          airLevel: context.airLevel + 0.15,
        })),
        resetAirLevel: assign(() => ({
          airLevel: 0.05
        })),
      },
    }
  );
