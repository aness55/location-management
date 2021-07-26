import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    //canActivate: [PublicGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    //canActivate: [PublicGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
    //canActivate: [PublicGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
