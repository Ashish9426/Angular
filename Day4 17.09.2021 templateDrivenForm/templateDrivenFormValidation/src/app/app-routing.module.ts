import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { OrderMenuComponent } from './components/pages/order-menu/order-menu.component';
import { RegistrationComponent } from './components/pages/registration/registration.component';

const routes: Routes = [
  {path:'', component:DashboardComponent, children:[
    {path:'registration', component:RegistrationComponent},
    {path:'order-menu', component:OrderMenuComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
