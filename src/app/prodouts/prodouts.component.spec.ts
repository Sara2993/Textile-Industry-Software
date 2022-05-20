import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdoutsComponent } from './prodouts.component';

describe('ProdoutsComponent', () => {
  let component: ProdoutsComponent;
  let fixture: ComponentFixture<ProdoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdoutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
