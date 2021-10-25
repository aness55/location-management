import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  email = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateTo(nav: string) {
    this.router.navigate([nav])
  }

}
