import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V14 } from './v14';

describe('V14', () => {
  let component: V14;
  let fixture: ComponentFixture<V14>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V14]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V14);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
