import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  createNewLocation() {
    console.log('NAVIGATE TO CREATE NEW LOCATION FORM');
    this.router.navigate(['/dashboard/new'])
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate([''])
  }
  goToDashboard() {
    this.router.navigate(['dashboard'])
  }
}
