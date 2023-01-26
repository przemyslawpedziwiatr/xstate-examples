import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextCompoundComponent } from './context-compound.component';

describe('ContextCompoundComponent', () => {
  let component: ContextCompoundComponent;
  let fixture: ComponentFixture<ContextCompoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextCompoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextCompoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
