import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const negatGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)

  if(typeof localStorage !== 'undefined' && localStorage.getItem('token')){
    router.navigate(['/admin']);
    return false;
  }
  return true;
};
