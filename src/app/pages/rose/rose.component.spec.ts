import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoseComponent } from './rose.component';

describe('RoseComponent', () => {
  let component: RoseComponent;
  let fixture: ComponentFixture<RoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
