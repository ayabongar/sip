import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersNotLinkedComponent } from './owners-not-linked.component';

describe('OwnersNotLinkedComponent', () => {
  let component: OwnersNotLinkedComponent;
  let fixture: ComponentFixture<OwnersNotLinkedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnersNotLinkedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnersNotLinkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
