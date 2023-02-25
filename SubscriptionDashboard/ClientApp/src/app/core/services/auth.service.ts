import { Injectable, NgZone } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private accessTokenKey = 'access_token';
  private timerId!: any;

  constructor(
    private apiService: ApiService,
    private ngZone: NgZone,
    private router: Router
  ) {}

  public login(userId: number): Observable<boolean> {
    return this.apiService.getUser(userId).pipe(
      map((response: any) => {
        if (response.success && response.token) {
          // need to add jwt auth token to api and send it in header with bearer
          this.accessToken = response.token;
          this.startTimer();
          return true;
        }
        return false;
      }),
      catchError((error) => {
        console.error(error);
        return of(false);
      })
    );
  }

  public logout(): void {
    clearTimeout(this.timerId);
    localStorage.removeItem(this.accessTokenKey);
    this.router.navigate(['/login']);
  }

  public get isLoggedIn(): boolean {
    return !!this.accessToken;
  }

  public get accessToken(): string | null {
    return localStorage.getItem(this.accessTokenKey);
  }

  public set accessToken(token: string | null) {
    if (token) {
      localStorage.setItem(this.accessTokenKey, token);
    } else {
      localStorage.removeItem(this.accessTokenKey);
    }
  }

  private startTimer(): void {
    this.ngZone.runOutsideAngular(() => {
      this.timerId = setTimeout(() => {
        this.logout();
      }, 5 * 60 * 1000); // 5 minutes in milliseconds
    });
  }
}
