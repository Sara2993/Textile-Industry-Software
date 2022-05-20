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
import { AddressComponent } from './address/address.component';
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
    AddressComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
