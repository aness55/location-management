import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  ActivatedRoute,
} from '@angular/router';
import { Observable } from 'rxjs';
//import { SessionServiceService } from '../services/session-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    //private session: SessionServiceService,
    public route: ActivatedRoute,
    private router: Router
  ) {}

  // check if the user is authorised to view the url
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    /*if token is not present in localstorage then redirect to login page*/
    if (!localStorage.getItem('access_token')) {
      this.router.navigate(['landing'])
      return false;
    }
    return true;
  }
}
