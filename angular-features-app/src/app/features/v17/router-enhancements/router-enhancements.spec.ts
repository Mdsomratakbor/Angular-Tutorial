import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterEnhancements } from './router-enhancements';

describe('RouterEnhancements', () => {
  let component: RouterEnhancements;
  let fixture: ComponentFixture<RouterEnhancements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterEnhancements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterEnhancements);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
