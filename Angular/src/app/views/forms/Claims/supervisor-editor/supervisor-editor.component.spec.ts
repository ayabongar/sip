import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorEditorComponent } from './supervisor-editor.component';

describe('SupervisorEditorComponent', () => {
  let component: SupervisorEditorComponent;
  let fixture: ComponentFixture<SupervisorEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
