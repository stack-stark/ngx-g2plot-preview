import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieBasicComponent } from './pie-basic.component';

describe('PieBasicComponent', () => {
  let component: PieBasicComponent;
  let fixture: ComponentFixture<PieBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
