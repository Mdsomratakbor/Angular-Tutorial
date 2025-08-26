import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { V19RoutingModule } from './v19-routing-module';
import { V19 } from './v19';


@NgModule({
  declarations: [
    V19
  ],
  imports: [
    CommonModule,
    V19RoutingModule
  ]
})
export class V19Module { }
