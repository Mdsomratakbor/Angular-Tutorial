import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'v14', loadChildren: () => import('./features/v14/v14-module').then(m => m.V14Module) }, 
  { path: 'v15', loadChildren: () => import('./features/v15/v15-module').then(m => m.V15Module) }, 
  { path: 'v16', loadChildren: () => import('./features/v16/v16-module').then(m => m.V16Module) }, 
  { path: 'v17', loadChildren: () => import('./features/v17/v17-module').then(m => m.V17Module) }, 
  { path: 'v18', loadChildren: () => import('./features/v18/v18-module').then(m => m.V18Module) }, 
  { path: 'v19', loadChildren: () => import('./features/v19/v19-module').then(m => m.V19Module) }, 
  { path: 'v20', loadChildren: () => import('./features/v20/v20-module').then(m => m.V20Module) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
