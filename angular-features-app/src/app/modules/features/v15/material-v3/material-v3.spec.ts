import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialV3 } from './material-v3';

describe('MaterialV3', () => {
  let component: MaterialV3;
  let fixture: ComponentFixture<MaterialV3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialV3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialV3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
