import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authservice: AuthService, private router: Router) {}

  canActivate() {
    if(this.authservice.loggedIn()) {
      return true;
    } else {
      this.router.navigateByUrl('/unauthorized');
      return false;
    }
  }
}