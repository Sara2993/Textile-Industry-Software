import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import{MatIconModule} from '@angular/material/icon';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProdoutsComponent } from './prodouts/prodouts.component';
import { EmailComponent } from './email/email.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminComponent } from './admin/admin.component';
import { MeterialsComponent } from './meterials/meterials.component';
import { SupplierComponent } from './supplier/supplier.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { StockmaintainDetailsComponent } from './stockmaintain-details/stockmaintain-details.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    
    ContactUsComponent,
    HomeComponent,
    SignupComponent,
    AboutUsComponent,
    ProdoutsComponent,
    EmailComponent,
    AdminComponent,
    MeterialsComponent,
    SupplierComponent,
    DashboardComponent,
    SupplierDetailsComponent,
    StockmaintainDetailsComponent,
    UserdetailsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,FormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
