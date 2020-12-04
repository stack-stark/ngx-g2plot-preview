import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarPercentComponent } from './bar-percent.component';

describe('BarPercentComponent', () => {
  let component: BarPercentComponent;
  let fixture: ComponentFixture<BarPercentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarPercentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarPercentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
