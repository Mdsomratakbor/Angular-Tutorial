import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { V18 } from './v18';

const routes: Routes = [{ path: '', component: V18 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class V18RoutingModule { }
