import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalisedClaimsComponent } from './finalised-claims.component';

describe('FinalisedClaimsComponent', () => {
  let component: FinalisedClaimsComponent;
  let fixture: ComponentFixture<FinalisedClaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalisedClaimsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalisedClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
