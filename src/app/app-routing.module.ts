import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';
import { ProdoutsComponent } from './prodouts/prodouts.component';
import { EmailComponent } from './email/email.component';
import { AdminComponent } from './admin/admin.component';
import { MeterialsComponent } from './meterials/meterials.component';
import { SupplierComponent } from './supplier/supplier.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { StockmaintainDetailsComponent } from './stockmaintain-details/stockmaintain-details.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
{path:'',component:LoginComponent},
{path:'login',component:LoginComponent},
{path:'main',component:MainComponent},
{path:'contact',component:ContactUsComponent},
{path:'signup',component:SignupComponent},
{path:'about',component:AboutUsComponent},
{path:'home',component:HomeComponent},
{path:'prodouts',component:ProdoutsComponent},
{path:'email',component:EmailComponent},
{path:'admin',component:AdminComponent},
{path:'meterials',component:MeterialsComponent},
{path:'supplier',component:SupplierComponent},
{path:'dashboard',component:DashboardComponent},
{path:'supllierdetails',component:SupplierDetailsComponent},
{path:'stockdetails',component:StockmaintainDetailsComponent},
{path:'userdetails',component:UserdetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
