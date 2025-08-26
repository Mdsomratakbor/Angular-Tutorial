import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveComposition } from './directive-composition';

describe('DirectiveComposition', () => {
  let component: DirectiveComposition;
  let fixture: ComponentFixture<DirectiveComposition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectiveComposition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveComposition);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
