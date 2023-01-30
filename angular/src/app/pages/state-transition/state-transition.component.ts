import { Component, OnInit } from '@angular/core';
import { from, startWith } from 'rxjs';
import { stateTransitionMachine } from 'src/app/xstate/state-transition.xstate';
import { interpret } from 'xstate';

@Component({
  selector: 'app-state-transition',
  templateUrl: './state-transition.component.html',
  styleUrls: ['./state-transition.component.scss']
})
export class StateTransitionComponent {
  machine = interpret(stateTransitionMachine, {
    devTools: true
  }).start();

  state$ = from(this.machine).pipe(
    startWith(this.machine.getSnapshot()),
  )

  constructor() { }

  sendPump() {
    this.machine.send('Pump');
  } 
}
