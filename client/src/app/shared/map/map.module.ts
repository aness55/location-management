import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularOpenlayersModule } from 'ngx-openlayers';

@NgModule({
  declarations: [MapComponent],
  imports: [
    FormsModule,
    AngularOpenlayersModule,
    HttpClientModule,
    CommonModule,
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule {}
