import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { V17 } from './v17';
import { ControlFlow } from './control-flow/control-flow';
import { StandalonePreview } from '../v14/standalone-preview/standalone-preview';
import { ExtendedDiagnostics } from '../v14/extended-diagnostics/extended-diagnostics';
import { DeferredLoading } from './deferred-loading/deferred-loading';
import { I18nPipes } from './i18n-pipes/i18n-pipes';
import { RouterEnhancements } from './router-enhancements/router-enhancements';
import { SignalForms } from './signal-forms/signal-forms';

const routes: Routes = [
  { path: '', component: V17 },
    { path: 'control-flow', component: ControlFlow },
  { path: 'standalone-preview', component: StandalonePreview },
  { path: 'extended-diagnostics', component: ExtendedDiagnostics },
  { path: 'deferred-loading', component: DeferredLoading },
  { path: 'i18n-pipes', component: I18nPipes },
  { path: 'router-enhancements', component: RouterEnhancements },
  { path: 'signal-forms', component: SignalForms }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class V17RoutingModule { }
