import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimListingDashboardComponent } from './claim-listing-dashboard.component';

describe('ClaimListingDashboardComponent', () => {
  let component: ClaimListingDashboardComponent;
  let fixture: ComponentFixture<ClaimListingDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimListingDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimListingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
