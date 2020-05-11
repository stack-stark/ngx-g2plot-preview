import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedRoseComponent } from './stacked-rose.component';

describe('StackedRoseComponent', () => {
  let component: StackedRoseComponent;
  let fixture: ComponentFixture<StackedRoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedRoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedRoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
