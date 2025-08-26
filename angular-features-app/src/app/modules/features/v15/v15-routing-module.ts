import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { V15 } from './v15';
import { Standalone } from './standalone/standalone';
import { DirectiveComposition } from './directive-composition/directive-composition';
import { FunctionalGuards } from './functional-guards/functional-guards';
import { ImageDirective } from './image-directive/image-directive';
import { MaterialV3 } from './material-v3/material-v3';

const routes: Routes = [
  { path: '', component: V15 },
  { path: 'standalone', component: Standalone},
  { path: 'directive-composition', component: DirectiveComposition },
  { path: 'functional-guards', component: FunctionalGuards },
  { path: 'image-directive', component: ImageDirective },
  { path: 'material-v3', component: MaterialV3 }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class V15RoutingModule { }
