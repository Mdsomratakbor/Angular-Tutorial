import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalInputs } from './signal-inputs';

describe('SignalInputs', () => {
  let component: SignalInputs;
  let fixture: ComponentFixture<SignalInputs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignalInputs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalInputs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
