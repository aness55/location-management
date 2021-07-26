import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  
  env = environment;

  constructor(
    private http: HttpClient
    ) { }
  
  getLocations(): Observable<any> {
    return this.http
      .get<any>(`${this.env.apiUrl}locations`)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }
}
