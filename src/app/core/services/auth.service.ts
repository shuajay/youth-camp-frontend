import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from 'express';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, map, Observable, tap} from 'rxjs';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = environment.apiUrl;
  private tokenSubject = new BehaviorSubject<string | null>(null);

  constructor() {
    this.tokenSubject.next(localStorage.getItem('token'));
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/auth/login`, {email, password}).pipe(
      tap((res: any) => {
        this.storeToken(res.token);
    })
    )
  }

  private storeToken(token : string): void{
    localStorage.setItem('token', token);
    this.tokenSubject.next(token);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.tokenSubject.next(null);
    this.router.navigate(['/login']);
  }

  get currentToken(): string | null {
    return this.tokenSubject.value;
  }

  get isAuthenticated(): Observable<boolean>{
    return this.tokenSubject.asObservable().pipe(
      map(token => !!token)
    );
  }

  getDecodedToken(): any {
    const token = this.currentToken;
    return token ? jwtDecode(token) : null;
  }

}
