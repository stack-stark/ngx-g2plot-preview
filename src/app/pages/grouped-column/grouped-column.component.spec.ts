import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedColumnComponent } from './grouped-column.component';

describe('GroupedColumnComponent', () => {
  let component: GroupedColumnComponent;
  let fixture: ComponentFixture<GroupedColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupedColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
