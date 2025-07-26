import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferredLoading } from './deferred-loading';

describe('DeferredLoading', () => {
  let component: DeferredLoading;
  let fixture: ComponentFixture<DeferredLoading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeferredLoading]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferredLoading);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
