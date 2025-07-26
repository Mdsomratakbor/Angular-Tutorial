import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { V17 } from './v17';

const routes: Routes = [{ path: '', component: V17 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class V17RoutingModule { }
