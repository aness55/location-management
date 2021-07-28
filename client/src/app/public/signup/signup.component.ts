import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private toaster: ToastrService,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      admin: [false]
    });
  }

  signup() {
    this.authService.signup(this.signupForm.value).subscribe(
      (response: any) => {
        if (response) {
          localStorage.setItem('access_token', response.accessToken);
          localStorage.setItem('admin', response.user.admin);
          this.toaster.success('Registration successful', 'Success');
          this.router.navigate(['dashboard']);
        }
      },
      (error) => {
        this.toaster.error(error, 'Error');
      }
    );
  }
}
