import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PaymentComponent } from './modules/payment/payment.component';

const routes: Routes = [
  {path:'',component: DefaultComponent,
children:[{
path:'', component: DashboardComponent
},
{
  path: 'payment', component: PaymentComponent
}
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
