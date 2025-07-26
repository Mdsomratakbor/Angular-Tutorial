import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Standalone } from './standalone';

describe('Standalone', () => {
  let component: Standalone;
  let fixture: ComponentFixture<Standalone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Standalone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Standalone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
