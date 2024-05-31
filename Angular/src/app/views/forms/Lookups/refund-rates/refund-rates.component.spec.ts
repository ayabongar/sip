import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundRatesComponent } from './refund-rates.component';

describe('RefundRatesComponent', () => {
  let component: RefundRatesComponent;
  let fixture: ComponentFixture<RefundRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundRatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
