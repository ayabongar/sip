import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueWithTheGroupComponent } from './continue-with-the-group.component';

describe('ContinueWithTheGroupComponent', () => {
  let component: ContinueWithTheGroupComponent;
  let fixture: ComponentFixture<ContinueWithTheGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinueWithTheGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinueWithTheGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
