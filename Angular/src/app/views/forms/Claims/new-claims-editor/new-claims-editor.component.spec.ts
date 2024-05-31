import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClaimsEditorComponent } from './new-claims-editor.component';

describe('NewClaimsEditorComponent', () => {
  let component: NewClaimsEditorComponent;
  let fixture: ComponentFixture<NewClaimsEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewClaimsEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClaimsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
