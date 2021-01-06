import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SankeyBasicComponent } from './sankey-basic.component';

describe('SankeyBasicComponent', () => {
  let component: SankeyBasicComponent;
  let fixture: ComponentFixture<SankeyBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SankeyBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SankeyBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
