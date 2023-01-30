import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardDelayComponent } from './guard-delay.component';

describe('GuardDelayComponent', () => {
  let component: GuardDelayComponent;
  let fixture: ComponentFixture<GuardDelayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardDelayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
