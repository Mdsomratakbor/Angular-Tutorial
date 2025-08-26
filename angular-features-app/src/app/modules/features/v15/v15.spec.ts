import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V15 } from './v15';

describe('V15', () => {
  let component: V15;
  let fixture: ComponentFixture<V15>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V15]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V15);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
