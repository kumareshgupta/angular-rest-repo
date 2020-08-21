import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsManipulationComponent } from './students-manipulation.component';

describe('StudentsManipulationComponent', () => {
  let component: StudentsManipulationComponent;
  let fixture: ComponentFixture<StudentsManipulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsManipulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
