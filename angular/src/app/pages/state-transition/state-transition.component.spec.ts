import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateTransitionComponent } from './state-transition.component';

describe('StateTransitionComponent', () => {
  let component: StateTransitionComponent;
  let fixture: ComponentFixture<StateTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateTransitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
