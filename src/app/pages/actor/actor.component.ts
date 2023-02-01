import { Component, OnInit } from '@angular/core';
import { finalize, from, map, startWith, tap } from 'rxjs';
import { actorStateMachine } from 'src/app/xstate/actor.xstate';
import { interpret } from 'xstate';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['../../../assets/scene-elements.scss','./actor.component.scss']
})
export class ActorComponent {
  machine = interpret(actorStateMachine, {
    devTools: true
  }).start();

  state$ = from(this.machine).pipe(
    startWith(this.machine.getSnapshot()),
  )

  ballonMachines$ = from(this.machine).pipe(
    map((machine) => Object.values(machine.children)),
  );
  }
