import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingNoteListComponent } from './existing-note-list.component';

describe('ExistingNoteListComponent', () => {
  let component: ExistingNoteListComponent;
  let fixture: ComponentFixture<ExistingNoteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingNoteListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExistingNoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
