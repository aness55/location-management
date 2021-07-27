import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocationsService } from 'src/app/core/services/locations.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  filteredLocations = [];
  allLocations = [];

  constructor(
    private locationsService: LocationsService,
    private router: Router,
    private toaster: ToastrService
    ) {}

  ngOnInit(): void {
    this.locationsService.getLocations().subscribe((response) => {
      console.log('RERERESESE LOCATIONS', response);
      this.allLocations = response;
      this.filteredLocations = response;
    },
    (error) => {
      this.toaster.error('Not able to load locations');
    }
    );
  }

  onSearch(search: string, city: string) {
    search = search.toLowerCase();
    if (city) {
      this.filteredLocations = this.allLocations.filter((location) =>
        location.name.toLowerCase().includes(search) && location.city === city
      );
    } else {
      this.filteredLocations = this.allLocations.filter((location) =>
        location.name.toLowerCase().includes(search)
      );
    }
  }

  filterLocationsByCity(city: string) {
    console.log('FILTER WORKS', city);
    if (city) {
      this.filteredLocations = this.allLocations.filter(
        (location) => location.city == city
      );
    } else {
      this.filteredLocations = this.allLocations;
    }
  }

  getUniqueLocations() {
    let uniqueLocations = [];
    this.allLocations.forEach((location) => {
      uniqueLocations.push(location.city);
    });
    uniqueLocations = [...new Set(uniqueLocations)];
    return uniqueLocations;
  }

  editLocation(location) {
    console.log('NAVIGATION', location)
    this.router.navigate(['dashboard', 'edit', location.id])
    //this.router.navigate([`/edit/${location.id}`])
  }
}
