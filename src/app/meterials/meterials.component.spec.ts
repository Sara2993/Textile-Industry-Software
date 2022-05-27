import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterialsComponent } from './meterials.component';

describe('MeterialsComponent', () => {
  let component: MeterialsComponent;
  let fixture: ComponentFixture<MeterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
