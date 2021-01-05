import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidBasicComponent } from './liquid-basic.component';

describe('LiquidBasicComponent', () => {
  let component: LiquidBasicComponent;
  let fixture: ComponentFixture<LiquidBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiquidBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
