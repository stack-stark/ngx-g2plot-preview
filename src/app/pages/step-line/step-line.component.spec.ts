import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepLineComponent } from './step-line.component';

describe('StepLineComponent', () => {
  let component: StepLineComponent;
  let fixture: ComponentFixture<StepLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
