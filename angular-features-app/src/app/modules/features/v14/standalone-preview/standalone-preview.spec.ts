import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandalonePreview } from './standalone-preview';

describe('StandalonePreview', () => {
  let component: StandalonePreview;
  let fixture: ComponentFixture<StandalonePreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StandalonePreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandalonePreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
