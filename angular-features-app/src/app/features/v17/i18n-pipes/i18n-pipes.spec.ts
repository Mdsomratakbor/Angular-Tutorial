import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nPipes } from './i18n-pipes';

describe('I18nPipes', () => {
  let component: I18nPipes;
  let fixture: ComponentFixture<I18nPipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [I18nPipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(I18nPipes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
