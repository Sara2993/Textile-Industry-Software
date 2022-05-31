import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockmaintainDetailsComponent } from './stockmaintain-details.component';

describe('StockmaintainDetailsComponent', () => {
  let component: StockmaintainDetailsComponent;
  let fixture: ComponentFixture<StockmaintainDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockmaintainDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockmaintainDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
