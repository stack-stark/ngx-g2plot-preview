import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterfallBasicComponent } from './waterfall-basic.component';

describe('WaterfallBasicComponent', () => {
  let component: WaterfallBasicComponent;
  let fixture: ComponentFixture<WaterfallBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterfallBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterfallBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
