import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  env = environment;

  constructor(private http: HttpClient) {}

  getLocations(): Observable<any> {
    return this.http.get<any>(`${this.env.apiUrl}locations`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getLocation(locId): Observable<any> {
    return this.http.get<any>(`${this.env.apiUrl}locations/${locId}`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  createLocation(body): Observable<any> {
    return this.http.post<any>(`${this.env.apiUrl}locations/new`, body).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  updateLocation(body): Observable<any> {
    return this.http
      .put<any>(`${this.env.apiUrl}locations/${body.id}`, body)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  deleteLocation(id): Observable<any> {
    return this.http.delete<any>(`${this.env.apiUrl}locations/${id}`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
