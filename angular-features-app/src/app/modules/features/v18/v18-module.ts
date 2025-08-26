import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { V18RoutingModule } from './v18-routing-module';
import { V18 } from './v18';
import { Signals } from './signals/signals';
import { ControlFlow } from './control-flow/control-flow';
import { SignalInputs } from './signal-inputs/signal-inputs';
import { ZonelessCd } from './zoneless-cd/zoneless-cd';
import { Hydration } from './hydration/hydration';


@NgModule({
  declarations: [
    V18,
    Signals,
    ControlFlow,
    SignalInputs,
    ZonelessCd,
    Hydration
  ],
  imports: [
    CommonModule,
    V18RoutingModule
  ]
})
export class V18Module { }
