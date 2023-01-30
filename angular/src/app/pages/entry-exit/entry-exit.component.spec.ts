import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryExitComponent } from './entry-exit.component';

describe('EntryExitComponent', () => {
  let component: EntryExitComponent;
  let fixture: ComponentFixture<EntryExitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryExitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
