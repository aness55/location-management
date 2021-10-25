import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { GenerateTokenOfferingComponent } from './generate-token-offering/generate-token-offering.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    LandingComponent,
    GenerateTokenOfferingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PublicRoutingModule,
  ]
})
export class PublicModule { }
