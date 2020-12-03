import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineBasicComponent } from './line-basic.component';

describe('LineBasicComponent', () => {
  let component: LineBasicComponent;
  let fixture: ComponentFixture<LineBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
