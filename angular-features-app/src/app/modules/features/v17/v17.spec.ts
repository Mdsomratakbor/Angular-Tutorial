import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V17 } from './v17';

describe('V17', () => {
  let component: V17;
  let fixture: ComponentFixture<V17>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V17]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V17);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
