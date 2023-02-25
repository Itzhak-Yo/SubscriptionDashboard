import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, mapTo, tap } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private accessTokenKey = 'access_token';

  constructor(private apiService: ApiService) {}

  public login(userId: number): Observable<boolean> {
    return this.apiService.getUser(userId).pipe(
      map((response: any) => {
        if (response.token) {
          this.accessToken = response.token;
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
    localStorage.removeItem(this.accessTokenKey);
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
}
