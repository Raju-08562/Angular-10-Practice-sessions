import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadingRoutingModule } from './lazyloading-routing.module';
import { LazyloadingComponent } from './lazyloading.component';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [
    LazyloadingComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    LazyloadingRoutingModule
  ]
})
export class LazyloadingModule { }
