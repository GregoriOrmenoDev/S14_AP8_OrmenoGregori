import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly VALID_EMAIL = 'admin@miapp.com';
  private readonly VALID_PASSWORD = '123456';
  private readonly SESSION_KEY = 'gamezone_auth';

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  login(email: string, password: string): boolean {
    if (email === this.VALID_EMAIL && password === this.VALID_PASSWORD) {
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem(this.SESSION_KEY, 'true');
      }
      return true;
    }
    return false;
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.SESSION_KEY);
    }
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }
    return localStorage.getItem(this.SESSION_KEY) === 'true';
  }
}
