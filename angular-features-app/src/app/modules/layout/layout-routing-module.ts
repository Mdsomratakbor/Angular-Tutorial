import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './layout';


const routes: Routes = 
[{
  path:'',
  component:Layout,
  children:
[
  { path: 'v14', loadChildren: () => import('../../modules/features/v14/v14-module').then(m => m.V14Module) }, 
  { path: 'v15', loadChildren: () => import('../../modules/features/v15/v15-module').then(m => m.V15Module) }, 
  { path: 'v16', loadChildren: () => import('../../modules/features/v16/v16-module').then(m => m.V16Module) }, 
  { path: 'v17', loadChildren: () => import('../../modules/features/v17/v17-module').then(m => m.V17Module) }, 
  { path: 'v18', loadChildren: () => import('../../modules/features/v18/v18-module').then(m => m.V18Module) }, 
  { path: 'v19', loadChildren: () => import('../../modules/features/v19/v19-module').then(m => m.V19Module) }, 
  { path: 'v20', loadChildren: () => import('../../modules/features/v20/v20-module').then(m => m.V20Module) },
  { path: '', redirectTo: 'v14', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404' },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
