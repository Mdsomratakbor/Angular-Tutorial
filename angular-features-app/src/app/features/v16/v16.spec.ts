import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V16 } from './v16';

describe('V16', () => {
  let component: V16;
  let fixture: ComponentFixture<V16>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V16]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V16);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
