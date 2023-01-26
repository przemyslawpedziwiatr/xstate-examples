import { createMachine } from "xstate";

export const lifeCycleMachine = createMachine({
  id: 'Life Cycle',
  initial: 'Asleep',
  states: {
    'Asleep': {
      on: {
        'Wake Up': 'Awoke'
      }
    },
    'Awoke': {
      on: {
        'Fall asleep': 'Asleep',
      }
    },
  }
});

