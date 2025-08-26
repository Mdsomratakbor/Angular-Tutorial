import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDirective } from './image-directive';

describe('ImageDirective', () => {
  let component: ImageDirective;
  let fixture: ComponentFixture<ImageDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
