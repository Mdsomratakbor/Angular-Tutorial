import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V18 } from './v18';

describe('V18', () => {
  let component: V18;
  let fixture: ComponentFixture<V18>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V18]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V18);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
