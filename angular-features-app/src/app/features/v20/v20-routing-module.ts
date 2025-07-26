import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { V20 } from './v20';

const routes: Routes = [{ path: '', component: V20 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class V20RoutingModule { }
