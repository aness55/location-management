import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
//import { SessionServiceService } from '../services/session-service.service';

@Injectable({
  providedIn: 'root',
})
export class UnAuthGuard implements CanActivate {
  constructor(
    //private session: SessionServiceService,
    public route: ActivatedRoute,
    private router: Router
  ) {}

  // check if the user is un-authorised to view the url
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    /*if token is not present in localstorage then redirect to login page*/
    if (localStorage.getItem('access_token')) {
      this.router.navigate(['dashboard'])
      return false;
    }
    return true;
  }
}
