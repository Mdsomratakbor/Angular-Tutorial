import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalGuards } from './functional-guards';

describe('FunctionalGuards', () => {
  let component: FunctionalGuards;
  let fixture: ComponentFixture<FunctionalGuards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FunctionalGuards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionalGuards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
