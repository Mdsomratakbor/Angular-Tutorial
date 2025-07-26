import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V19 } from './v19';

describe('V19', () => {
  let component: V19;
  let fixture: ComponentFixture<V19>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V19]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V19);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
