import { Component, OnInit } from '@angular/core';
import { finalize, from, map, startWith } from 'rxjs';
import { alwaysStateMachine } from 'src/app/xstate/always.xstate';
import { interpret } from 'xstate';

@Component({
  selector: 'app-always',
  templateUrl: './always.component.html',
  styleUrls: ['../../../assets/scene-elements.scss', './always.component.scss']
})
export class AlwaysComponent {
  machine = interpret(alwaysStateMachine, {
    devTools: true
  }).start();

  state$ = from(this.machine).pipe(
    startWith(this.machine.getSnapshot()),
  )

  pumpState$ = from(this.state$).pipe(
    map((state) => {
      const value = state.value as { Attached: { PumpDevice: string, Baloon: string }};
      return value?.Attached?.PumpDevice;
    })
  )

  baloonState$ = from(this.state$).pipe(
    map((state) => {
      const value = state.value as { Attached: { PumpDevice: string, Baloon: string }};
      return value?.Attached?.Baloon;
    })
  )
  constructor() { }

}
