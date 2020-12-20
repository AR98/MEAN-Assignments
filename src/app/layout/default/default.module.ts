import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PaymentComponent } from 'src/app/modules/payment/payment.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardModule } from 'src/app/modules/dashboard/dashboard.module';



@NgModule({
  declarations: [
    DefaultComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    DashboardModule
  ]
})
export class DefaultModule { }
