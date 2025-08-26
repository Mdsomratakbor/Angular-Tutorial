import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { V16RoutingModule } from './v16-routing-module';
import { V16 } from './v16';
import { Signals } from './signals/signals';
import { DestroyRef } from './destroy-ref/destroy-ref';
import { RequiredInputs } from './required-inputs/required-inputs';
import { Httpclient } from './httpclient/httpclient';
import { ZoneOptional } from './zone-optional/zone-optional';
import { MaterialModule } from '../../../shared/material.module';


@NgModule({
  declarations: [
    V16,
    Signals,
    DestroyRef,
    RequiredInputs,
    Httpclient,
    ZoneOptional
  ],
  imports: [
    CommonModule,
    MaterialModule,
    V16RoutingModule
  ]
})
export class V16Module { }
