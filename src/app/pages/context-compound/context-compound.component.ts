import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, startWith } from 'rxjs';
import { contextCompoundMachine } from 'src/app/xstate/context-compound.xstate';
import { interpret } from 'xstate';

@Component({
  selector: 'app-context-compound',
  templateUrl: './context-compound.component.html',
  styleUrls: ['./context-compound.component.scss']
})
export class ContextCompoundComponent {
  machine = interpret(contextCompoundMachine, {
    devTools: true
  }).start();

  state$ = from(this.machine).pipe(
    startWith(this.machine.getSnapshot()),
  )

  constructor() { }
}
