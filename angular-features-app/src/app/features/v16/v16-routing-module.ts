import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { V16 } from './v16';

const routes: Routes = [{ path: '', component: V16 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class V16RoutingModule { }
