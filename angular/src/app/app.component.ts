import { AfterViewInit, Component } from '@angular/core';
import { inspect } from '@xstate/inspect';
import { createMachine, interpret } from 'xstate';
import { lifeCycleMachine } from './xstate/lifecycle.xstate';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-xstate';

  ngAfterViewInit() {
    inspect({
      iframe: false
      // url: 'https://stately.ai/viz?mode=inspect&panel=code&controls=0&pan=0&zoom=0', // (default)
    });
  }
}
