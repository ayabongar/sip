import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmendClaimDashboardComponent } from './amend-claim-dashboard.component';

describe('AmendClaimDashboardComponent', () => {
  let component: AmendClaimDashboardComponent;
  let fixture: ComponentFixture<AmendClaimDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmendClaimDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmendClaimDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
