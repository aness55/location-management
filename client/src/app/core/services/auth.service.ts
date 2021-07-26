import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  env = environment;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(params: any): Observable<string> {
    return this.http
      .post<any>(`${this.env.apiUrl}login`, params)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  signup(params: any): Observable<string> {
    return this.http
      .post<any>(`${this.env.apiUrl}signup`, params)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }
}
