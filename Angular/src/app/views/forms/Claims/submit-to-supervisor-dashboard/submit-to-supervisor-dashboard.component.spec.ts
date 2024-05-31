import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitToSupervisorDashboardComponent } from './submit-to-supervisor-dashboard.component';

describe('SubmitToSupervisorDashboardComponent', () => {
  let component: SubmitToSupervisorDashboardComponent;
  let fixture: ComponentFixture<SubmitToSupervisorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitToSupervisorDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitToSupervisorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
