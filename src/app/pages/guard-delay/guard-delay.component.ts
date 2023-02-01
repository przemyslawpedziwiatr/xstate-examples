import { Component, OnInit } from '@angular/core';
import { from, map, startWith } from 'rxjs';
import { guardDelayMachine } from 'src/app/xstate/guard-delay.xstate';
import { interpret } from 'xstate';

@Component({
  selector: 'app-guard-delay',
  templateUrl: './guard-delay.component.html',
  styleUrls: ['./guard-delay.component.scss']
})
export class GuardDelayComponent {
  machine = interpret(guardDelayMachine, {
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

  constructor() { }
}
