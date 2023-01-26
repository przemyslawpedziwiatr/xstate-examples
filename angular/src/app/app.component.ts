import { Component } from '@angular/core';
import { inspect } from '@xstate/inspect';
import { createMachine, interpret } from 'xstate';
import { lifeCycleMachine } from './xstate/lifecycle.xstate';

inspect({
  // options
  // url: 'https://stately.ai/viz?inspect', // (default)
  iframe: false // open in new window
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-xstate';

  private interpreted = interpret(lifeCycleMachine, {
    devTools: true
  }).start();
}
