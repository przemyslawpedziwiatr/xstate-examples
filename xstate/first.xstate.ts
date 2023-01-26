// first machine here

import { StateMachine } from "xstate";

export const firstMachine: StateMachine<any, 'resolved' | 'rejected', any> = {
  id: 'promise',
  initial: 'pending',
  states: {
    pending: {
      on: {
        RESOLVE: { target: 'resolved' },
        REJECT: { target: 'rejected' }
      }
    },
    resolved: {
      type: 'final'
    },
    rejected: {
      type: 'final'
    }
  }
};