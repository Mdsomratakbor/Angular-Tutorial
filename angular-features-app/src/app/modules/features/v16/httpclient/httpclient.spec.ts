import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Httpclient } from './httpclient';

describe('Httpclient', () => {
  let component: Httpclient;
  let fixture: ComponentFixture<Httpclient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Httpclient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Httpclient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
