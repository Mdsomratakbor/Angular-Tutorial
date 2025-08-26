import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedDiagnostics } from './extended-diagnostics';

describe('ExtendedDiagnostics', () => {
  let component: ExtendedDiagnostics;
  let fixture: ComponentFixture<ExtendedDiagnostics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExtendedDiagnostics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendedDiagnostics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
