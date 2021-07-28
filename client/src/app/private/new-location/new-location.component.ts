import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocationsService } from 'src/app/core/services/locations.service';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.component.html',
  styleUrls: ['./new-location.component.scss'],
})
export class NewLocationComponent implements OnInit {
  newLocationForm: FormGroup;
  loading: boolean = false;
  admin = JSON.parse(localStorage.getItem('admin'));

  constructor(
    private fb: FormBuilder,
    private locationService: LocationsService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newLocationForm = this.fb.group({
      name: [null, Validators.required],
      city: [null, Validators.required],
      address: [null, Validators.required],
      longitude: [null, Validators.required],
      latitude: [null, Validators.required],
    });
  }

  onAddressChange(event) {
    let newLocation = JSON.parse(event);
    this.newLocationForm.patchValue(newLocation);
  }

  createLocation() {
    if (this.newLocationForm.valid && this.admin) {
      this.loading = true;
      this.locationService.createLocation(this.newLocationForm.value).subscribe(
        (response) => {
          if (response) {
            this.toaster.success('Successfuly created new location', 'Success');
            setTimeout(() => {
              this.router.navigate(['dashboard']);
              this.loading = false;
            }, 1500);
          }
        },
        (error) => {
          this.toaster.error('Not able to create new location', 'Error');
          this.loading = false;
        }
      );
    }
  }
}
