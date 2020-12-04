import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnPercentComponent } from './column-percent.component';

describe('ColumnPercentComponent', () => {
  let component: ColumnPercentComponent;
  let fixture: ComponentFixture<ColumnPercentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnPercentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnPercentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
