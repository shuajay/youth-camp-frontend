import { CanActivateFn } from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from 'express';
import {map} from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  return auth.isAuthenticated.pipe(
    map(isAuth => {
      if (!isAuth) {
        router.navigate(['/login']);
        return false;
      }
      return true;
    })
  );
};
