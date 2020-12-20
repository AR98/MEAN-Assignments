import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './layout/auth/auth.component';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';
import { PaymentComponent } from './modules/payment/payment.component';
import { SignupComponent } from './modules/signup/signup.component';

const routes: Routes = [
  {path:'',component: DefaultComponent,
children:[{
path:'', component: DashboardComponent
},
{
  path: 'payment', component: PaymentComponent
}
]
},
{
  path:'auth', component: AuthComponent,children:[
    {path: '', component: LoginComponent},
    {path:'login',component: LoginComponent},
    {path: 'signup', component: SignupComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
