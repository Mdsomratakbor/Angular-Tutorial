import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V20 } from './v20';

describe('V20', () => {
  let component: V20;
  let fixture: ComponentFixture<V20>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V20]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V20);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
