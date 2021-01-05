import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletBasicComponent } from './bullet-basic.component';

describe('BulletBasicComponent', () => {
  let component: BulletBasicComponent;
  let fixture: ComponentFixture<BulletBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulletBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
