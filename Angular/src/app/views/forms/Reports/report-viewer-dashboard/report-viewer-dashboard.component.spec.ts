import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportViewerDashboardComponent } from './report-viewer-dashboard.component';

describe('ReportViewerDashboardComponent', () => {
  let component: ReportViewerDashboardComponent;
  let fixture: ComponentFixture<ReportViewerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportViewerDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportViewerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
