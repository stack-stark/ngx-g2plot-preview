import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnGroupedComponent } from './column-grouped.component';

describe('ColumnGroupedComponent', () => {
  let component: ColumnGroupedComponent;
  let fixture: ComponentFixture<ColumnGroupedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnGroupedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnGroupedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
