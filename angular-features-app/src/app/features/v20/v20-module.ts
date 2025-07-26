import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { V20RoutingModule } from './v20-routing-module';
import { V20 } from './v20';


@NgModule({
  declarations: [
    V20
  ],
  imports: [
    CommonModule,
    V20RoutingModule
  ]
})
export class V20Module { }
