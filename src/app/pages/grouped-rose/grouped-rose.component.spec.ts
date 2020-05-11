import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedRoseComponent } from './grouped-rose.component';

describe('GroupedRoseComponent', () => {
  let component: GroupedRoseComponent;
  let fixture: ComponentFixture<GroupedRoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupedRoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedRoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
