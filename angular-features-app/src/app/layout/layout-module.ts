import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout } from './layout';
import { Topbar } from './topbar/topbar';
import { Sidebar } from './sidebar/sidebar';
import { Footer } from './footer/footer';
import { MaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Layout,
    Topbar,
    Sidebar,
    Footer],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
 
  ],
  exports:[Layout]
})
export class LayoutModule { }
