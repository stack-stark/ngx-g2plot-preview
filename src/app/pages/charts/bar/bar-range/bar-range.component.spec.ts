import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarRangeComponent } from './bar-range.component';

describe('BarRangeComponent', () => {
  let component: BarRangeComponent;
  let fixture: ComponentFixture<BarRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
