import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-transition',
  templateUrl: './state-transition.component.html',
  styleUrls: ['./state-transition.component.scss']
})
export class StateTransitionComponent implements OnInit {
  isPressed = false;
  constructor() { }

  ngOnInit(): void {
  }

}
