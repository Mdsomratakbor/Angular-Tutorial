import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { V14 } from './v14';
import { TypedForms } from './typed-forms/typed-forms';
import { StandalonePreview } from './standalone-preview/standalone-preview';
import { ExtendedDiagnostics } from './extended-diagnostics/extended-diagnostics';
import { TitleStrategy } from './title-strategy/title-strategy';
import { TreeShakableInjectables } from './tree-shakable-injectables/tree-shakable-injectables';


const routes: Routes = [
  { path: '', component: V14 },
  { path: 'typed-forms', component: TypedForms },
  { path: 'standalone-preview', component: StandalonePreview },
  { path: 'extended-diagnostics', component: ExtendedDiagnostics },
  { path: 'title-strategy', component: TitleStrategy },
  { path: 'tree-shakable-injectables', component: TreeShakableInjectables }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class V14RoutingModule { }
