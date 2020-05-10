import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedColumnComponent } from './stacked-column.component';

describe('StackedColumnComponent', () => {
  let component: StackedColumnComponent;
  let fixture: ComponentFixture<StackedColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
