import { Component, OnInit } from '@angular/core';
import { finalize, from, map, startWith } from 'rxjs';
import { alwaysStateMachine } from 'src/app/xstate/always.xstate';
import { servicesStateMachine } from 'src/app/xstate/services.xstate';
import { interpret } from 'xstate';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['../../../assets/scene-elements.scss','./services.component.scss']
})
export class ServicesComponent {
  machine = interpret(servicesStateMachine, {
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
