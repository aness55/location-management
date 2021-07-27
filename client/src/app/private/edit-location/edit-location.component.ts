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

  constructor(
    private route: ActivatedRoute,
    private locationsService: LocationsService,
    private toaster: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    private locationService: LocationsService
    ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.locationId = +params['id'];
      if (this.locationId) {
        this.locationsService.getLocation(this.locationId)
        .subscribe(
          (response) => {
            if (response && response.length>0) {
              this.location = response[0];
              this.generateForm();
            } else {
              this.toaster.error('Not able to load the location', 'Error');
              setTimeout(() => {
                this.router.navigate(['dashboard'])
              }, 1000);
            }
          },
          (error) => {
            console.log(error)
            this.toaster.error('Not able to load the location', 'Error');
            setTimeout(() => {
              this.router.navigate(['dashboard'])
            }, 1000);
          }
        )
      }
    });
  }

  generateForm() {
    this.locationForm = this.fb.group(this.location);
  }

  onAddressChange(event) {
    let newLocation = JSON.parse(event);
    this.locationForm.patchValue(newLocation);
  }

  updateLocation() {
    if (this.locationForm.valid) {
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
}
