import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineMultipleComponent } from './line-multiple.component';

describe('LineMultipleComponent', () => {
  let component: LineMultipleComponent;
  let fixture: ComponentFixture<LineMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineMultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
