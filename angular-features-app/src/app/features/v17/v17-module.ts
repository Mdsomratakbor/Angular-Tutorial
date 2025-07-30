import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { V17RoutingModule } from './v17-routing-module';
import { V17 } from './v17';
import { ControlFlow } from './control-flow/control-flow';
import { DeferredLoading } from './deferred-loading/deferred-loading';
import { I18nPipes } from './i18n-pipes/i18n-pipes';
import { RouterEnhancements } from './router-enhancements/router-enhancements';
import { SignalForms } from './signal-forms/signal-forms';
import { MaterialModule } from "../../shared/material.module";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    V17,
    ControlFlow,
    DeferredLoading,
    I18nPipes,
    RouterEnhancements,
    SignalForms
  ],
  imports: [
    CommonModule,
    V17RoutingModule,
    MaterialModule,
    FormsModule
]
})
export class V17Module { }
