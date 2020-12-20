import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from '../charts/charts.module';
import { DashboardComponent } from './dashboard.component';
import { TablesModule } from '../tables/tables.module';





@NgModule({
  declarations: [DashboardComponent],
  imports: [ 
    CommonModule,
   ChartsModule,
   TablesModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
