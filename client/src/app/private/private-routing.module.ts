import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditLocationComponent } from './edit-location/edit-location.component';
import { NewLocationComponent } from './new-location/new-location.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'edit/:id',
    component: EditLocationComponent,
    pathMatch: 'full'
  },
  {
    path: 'new',
    component: NewLocationComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
