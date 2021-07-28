import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocationsService } from 'src/app/core/services/locations.service';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.scss'],
})
export class EditLocationComponent implements OnInit {
  locationId;
  sub;
  location;
  locationForm;
  loading: boolean;
  admin = JSON.parse(localStorage.getItem('admin'));

  constructor(
    private route: ActivatedRoute,
    private locationsService: LocationsService,
    private toaster: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    private locationService: LocationsService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.sub = this.route.params.subscribe((params) => {
      this.locationId = +params['id'];
      if (this.locationId) {
        this.locationsService.getLocation(this.locationId).subscribe(
          (response) => {
            if (response) {
              this.location = response;
              if (this.location) {
                this.generateForm();
              }
            } else {
              this.toaster.error('Not able to load the location', 'Error');
              setTimeout(() => {
                this.router.navigate(['dashboard']);
              }, 1000);
            }
          },
          (error) => {
            this.toaster.error('Not able to load the location', 'Error');
            setTimeout(() => {
              this.router.navigate(['dashboard']);
            }, 1000);
          }
        );
      }
    });
  }

  generateForm() {
    this.locationForm = this.fb.group(this.location);
    this.loading = false;
  }

  onAddressChange(event) {
    let newLocation = JSON.parse(event);
    this.locationForm.patchValue(newLocation);
  }

  updateLocation() {
    if (this.locationForm.valid && this.admin) {
      this.loading = true;
      this.locationService.updateLocation(this.locationForm.value).subscribe(
        (response) => {
          if (response) {
            this.toaster.success('Successfuly updated location', 'Success');
            setTimeout(() => {
              this.router.navigate(['dashboard']);
              this.loading = false;
            }, 1500);
          }
        },
        (error) => {
          this.toaster.error('Not able to update location', 'Error');
          this.loading = false;
        }
      );
    }
  }

  deleteLocation() {
    this.loading = true;
    if (confirm('Are you sure you want to delete location?') && this.admin) {
      this.locationService.deleteLocation(this.locationId).subscribe(
        (response) => {
          if (response) {
            this.toaster.success('Successfuly deleted location', 'Success');
            setTimeout(() => {
              this.router.navigate(['dashboard']);
              this.loading = false;
            }, 1500);
          }
        },
        (error) => {
          this.toaster.error('Not able to delete location', 'Error');
          this.loading = false;
        }
      );
    } else this.loading = false;
  }
}
