import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPercentComponent } from './area-percent.component';

describe('AreaPercentComponent', () => {
  let component: AreaPercentComponent;
  let fixture: ComponentFixture<AreaPercentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaPercentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaPercentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
