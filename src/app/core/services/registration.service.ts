import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl + '/api/auth';

  getRegistrations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/registrations`);
  }

  createRegistration(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/registrations`, data);
  }

}
