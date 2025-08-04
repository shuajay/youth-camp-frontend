import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenSubject = new BehaviorSubject<string | null>(null);

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.tokenSubject.next(localStorage.getItem('token'));
    }
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/auth/login`, { email, password }).pipe(
      tap((res: any) => {
        this.storeToken(res.token);
      })
    );
  }

  private storeToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', token);
    }
    this.tokenSubject.next(token);
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
    this.tokenSubject.next(null);
    this.router.navigate(['/login']);
  }

  get currentToken(): string | null {
    return this.tokenSubject.value;
  }

  get isAuthenticated(): Observable<boolean> {
    return this.tokenSubject.asObservable().pipe(
      map(token => !!token)
    );
  }

  getDecodedToken(): any {
    const token = this.currentToken;
    return token ? jwtDecode(token) : null;
  }
}
