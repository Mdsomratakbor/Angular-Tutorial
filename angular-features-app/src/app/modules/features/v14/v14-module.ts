import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { V14RoutingModule } from './v14-routing-module';
import { V14 } from './v14';
import { TypedForms } from './typed-forms/typed-forms';
import { ExtendedDiagnostics } from './extended-diagnostics/extended-diagnostics';
import { TitleStrategy } from './title-strategy/title-strategy';
import { TreeShakableInjectables } from './tree-shakable-injectables/tree-shakable-injectables';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../shared/material.module';


@NgModule({
  declarations: [
    V14,
    TypedForms,
    ExtendedDiagnostics,
    TitleStrategy,
    TreeShakableInjectables
  ],
  imports: [
    CommonModule,
    V14RoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
})
export class V14Module { }
