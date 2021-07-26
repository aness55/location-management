import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private toaster: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe(
      (response: any) => {
        if (response) {
          localStorage.setItem('access_token', response.accessToken);
          this.toaster.success('Login successful', 'Success');
          this.router.navigate(['dashboard']);
        }
      },
      (error) => {
        this.toaster.error(error.statusText, 'Error');
      }
    );
  }
}
