import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeShakableInjectables } from './tree-shakable-injectables';

describe('TreeShakableInjectables', () => {
  let component: TreeShakableInjectables;
  let fixture: ComponentFixture<TreeShakableInjectables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreeShakableInjectables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeShakableInjectables);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
