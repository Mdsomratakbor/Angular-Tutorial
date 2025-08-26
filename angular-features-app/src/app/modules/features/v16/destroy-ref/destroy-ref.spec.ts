import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestroyRef } from './destroy-ref';

describe('DestroyRef', () => {
  let component: DestroyRef;
  let fixture: ComponentFixture<DestroyRef>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DestroyRef]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestroyRef);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
