import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankTypesComponent } from './rank-types.component';

describe('RankTypesComponent', () => {
  let component: RankTypesComponent;
  let fixture: ComponentFixture<RankTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
