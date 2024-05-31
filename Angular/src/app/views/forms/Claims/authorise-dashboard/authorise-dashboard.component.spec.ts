import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoriseDashboardComponent } from './authorise-dashboard.component';

describe('AuthoriseDashboardComponent', () => {
  let component: AuthoriseDashboardComponent;
  let fixture: ComponentFixture<AuthoriseDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthoriseDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthoriseDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
