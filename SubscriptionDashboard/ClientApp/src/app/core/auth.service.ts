import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;

  login(userId: string) {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
  }

  get isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
