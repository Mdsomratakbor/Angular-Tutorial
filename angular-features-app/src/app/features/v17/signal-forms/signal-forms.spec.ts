import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalForms } from './signal-forms';

describe('SignalForms', () => {
  let component: SignalForms;
  let fixture: ComponentFixture<SignalForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignalForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
