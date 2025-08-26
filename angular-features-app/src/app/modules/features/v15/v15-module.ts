import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { V15RoutingModule } from './v15-routing-module';
import { V15 } from './v15';
import { Standalone } from './standalone/standalone';
import { DirectiveComposition } from './directive-composition/directive-composition';
import { FunctionalGuards } from './functional-guards/functional-guards';
import { ImageDirective } from './image-directive/image-directive';
import { MaterialV3 } from './material-v3/material-v3';
import { MaterialModule } from '../../../shared/material.module';


@NgModule({
  declarations: [
    V15,
    Standalone,
    DirectiveComposition,
    FunctionalGuards,
    ImageDirective,
    MaterialV3
  ],
  imports: [
    CommonModule,
    V15RoutingModule,
    MaterialModule,
    NgOptimizedImage
  ]
})
export class V15Module { }
