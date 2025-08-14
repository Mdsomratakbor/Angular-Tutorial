import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { V16 } from './v16';
import { Signals } from './signals/signals';
import { DestroyRef } from './destroy-ref/destroy-ref';
import { RequiredInputs } from './required-inputs/required-inputs';
import { Httpclient } from './httpclient/httpclient';
import { ZoneOptional } from './zone-optional/zone-optional';


const routes: Routes = [
      { title:'v16-page', path:'', component: V16},
      { title: 'Signals (Developer Preview)', path: 'signals', component: Signals },
      { title: 'DestroyRef', path: 'destroy-ref', component: DestroyRef},
      { title: 'Required Inputs', path: 'required-inputs', component: RequiredInputs },
      { title: 'Standalone HttpClient', path: 'httpclient', component: Httpclient },
      { title: 'Zone.js Optional', path: 'Zone-optional', component: ZoneOptional }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class V16RoutingModule { }
