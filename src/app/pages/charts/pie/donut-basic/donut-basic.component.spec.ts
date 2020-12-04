import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutBasicComponent } from './donut-basic.component';

describe('DonutBasicComponent', () => {
  let component: DonutBasicComponent;
  let fixture: ComponentFixture<DonutBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonutBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
