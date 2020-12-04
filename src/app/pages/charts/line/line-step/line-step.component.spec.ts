import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineStepComponent } from './line-step.component';

describe('LineStepComponent', () => {
  let component: LineStepComponent;
  let fixture: ComponentFixture<LineStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
