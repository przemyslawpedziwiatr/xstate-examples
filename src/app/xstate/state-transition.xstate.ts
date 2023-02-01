import { createMachine } from "xstate";

export const stateTransitionMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QAUCuBbADgAgEIEMAbAe2IDsA6AUSwBcBPAYjSwG0AGAXUVE2NgCWtAeR4gAHogCM7AOwUAbAGZZAJnYAWKRp0BWdQoA0IetIAcZilNVSlugJxK7G9vYUaAvh+MscBEuQUAGKohIT02L6QjAAiYABmhPi0YBzcSCB8gsKiGZII2vKqbmZqUrbqBsamCGZSFBr2TbJKCuzuUmb2ql4+GH5EpJQhYRFREIwAKgKpXGJZQiJkYvlaGhSqXXIKMvZS9uyq1YhdFLpmTpqyLpuyUgpe3iBkxBBwYr54g7m8-Is-EkQAFojCZgQoKOwoYdlI5zjI6r0QJ9-ENqHQar9sksVogNEcwbV5OdLhprodSvckSjvsNQuFIv1IPM-jllnlEKoFKoKLJdNCNLpWko3LJjggDpCLkorjdKbpqf0vgFKABBMKMrDMjILNm4hD6dgNBSlBR3bTnWRmcUWCjSmXte7FdjWR4eIA */
createMachine({
  id: 'Pump Baloon',
  initial: "Empty",
  states: {
    Empty: {
      on: {
        Pump: "Fully Pumped"
      }
    },
    "Fully Pumped": {
      on: {
        Deflate: "Empty",
        Tie: "Pumped And Tied"
      }
    },
    "Pumped And Tied": {
      type: "final"
    }
  }
});

