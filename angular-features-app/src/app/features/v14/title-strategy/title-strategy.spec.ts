import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleStrategy } from './title-strategy';

describe('TitleStrategy', () => {
  let component: TitleStrategy;
  let fixture: ComponentFixture<TitleStrategy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleStrategy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleStrategy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
