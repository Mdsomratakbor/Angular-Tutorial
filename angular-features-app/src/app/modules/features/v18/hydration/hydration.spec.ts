import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hydration } from './hydration';

describe('Hydration', () => {
  let component: Hydration;
  let fixture: ComponentFixture<Hydration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hydration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hydration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
