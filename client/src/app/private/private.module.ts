import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapModule } from '../shared/map/map.module';
import { NavbarComponent } from './navbar/navbar.component';
import { EditLocationComponent } from './edit-location/edit-location.component';
import { NewLocationComponent } from './new-location/new-location.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    EditLocationComponent,
    NewLocationComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ReactiveFormsModule,
    MapModule
  ]
})
export class PrivateModule { }
