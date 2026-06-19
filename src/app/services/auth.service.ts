import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly VALID_EMAIL = 'admin@miapp.com';
  private readonly VALID_PASSWORD = '123456';
  private readonly SESSION_KEY = 'gamezone_auth';

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    if (email === this.VALID_EMAIL && password === this.VALID_PASSWORD) {
      localStorage.setItem(this.SESSION_KEY, 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.SESSION_KEY);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.SESSION_KEY) === 'true';
  }
}
