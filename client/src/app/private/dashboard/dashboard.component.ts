import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/core/services/locations.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  locations = [];

  constructor(
    private locationsService: LocationsService
  ) { }

  ngOnInit(): void {
    this.locationsService.getLocations()
    .subscribe(
      (response) => {
        console.log('RERERESESE LOCATIONS', response)
        this.locations = response
      }
    )
  }

}
