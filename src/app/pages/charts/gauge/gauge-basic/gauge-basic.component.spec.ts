import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeBasicComponent } from './gauge-basic.component';

describe('GaugeBasicComponent', () => {
  let component: GaugeBasicComponent;
  let fixture: ComponentFixture<GaugeBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaugeBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaugeBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
