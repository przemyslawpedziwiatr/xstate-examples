import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwaysComponent } from './always.component';

describe('AlwaysComponent', () => {
  let component: AlwaysComponent;
  let fixture: ComponentFixture<AlwaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlwaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlwaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
