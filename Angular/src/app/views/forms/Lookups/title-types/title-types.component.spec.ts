import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleTypesComponent } from './title-types.component';

describe('TitleTypesComponent', () => {
  let component: TitleTypesComponent;
  let fixture: ComponentFixture<TitleTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
