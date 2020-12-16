import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PaymentComponent } from 'src/app/modules/payment/payment.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    DataTablesModule
  ]
})
export class DefaultModule { }
