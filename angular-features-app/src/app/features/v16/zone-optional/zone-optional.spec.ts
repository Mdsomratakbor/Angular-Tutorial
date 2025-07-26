import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneOptional } from './zone-optional';

describe('ZoneOptional', () => {
  let component: ZoneOptional;
  let fixture: ComponentFixture<ZoneOptional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZoneOptional]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneOptional);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
