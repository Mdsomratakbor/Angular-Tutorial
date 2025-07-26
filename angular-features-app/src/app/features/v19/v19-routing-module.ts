import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { V19 } from './v19';

const routes: Routes = [{ path: '', component: V19 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class V19RoutingModule { }
