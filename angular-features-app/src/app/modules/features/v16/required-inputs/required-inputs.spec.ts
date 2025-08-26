import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredInputs } from './required-inputs';

describe('RequiredInputs', () => {
  let component: RequiredInputs;
  let fixture: ComponentFixture<RequiredInputs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequiredInputs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequiredInputs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
