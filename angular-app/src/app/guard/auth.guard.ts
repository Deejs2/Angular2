import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if(typeof localStorage !== 'undefined' && !localStorage.getItem('token')){router.navigate(['/login']); return false;}
  return true;
};

// export class AuthGuard implements CanActivateFn {

//   constructor(
//     private authService: AuthenticationService,
//     private router: Router
//     ){}

//   canActivate(): boolean{
//     // Check if the user is authenticated
//     const isAuthenticated = this.authService.isLoggedIn();

//     // If authenticated, allow route activation; otherwise, redirect to the login page
//     if (isAuthenticated) {
//       return true;
//     } else {
//       // Redirect to the login page
//       this.router.navigate(['/login']);

//       // Returning false here prevents the route activation
//       return false;
//     }
//   }
// }

// import { Injectable } from '@angular/core';
// import {
//   CanActivate,
//   Router,
// } from '@angular/router';
// import { AuthenticationService } from '../services/authentication.service';

// @Injectable()
// export class AuthGuard implements CanActivate {

//     constructor(
//     private router: Router,
//     private authService:AuthenticationService
    
//     ){}

//   canActivate(): boolean{
//     // Check if the user is authenticated
//     const isAuthenticated = this.authService.isLoggedIn();

//     // If authenticated, allow route activation; otherwise, redirect to the login page
//     if (isAuthenticated) {
//       return true;
//     } else {
//       // Redirect to the login page
//       if(!localStorage.getItem('token')){
//         this.router.navigate(['/login']);
//       }

//       // Returning false here prevents the route activation
//       return false;
//     }
//   }

  //   if (!localStorage.getItem('token')) {
  //         this.router.navigate(['/login']);
  //       }
  //       return true;
  // }

  // constructor(private router: Router) {}

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // (sad)
  //   | boolean
  //   | UrlTree
  //   | Observable<boolean | UrlTree>
  //   | Promise<boolean | UrlTree> {
  //   if (!localStorage.getItem('token')) {
  //     this.router.navigate(['/login']);
  //   }
  //   return true;
  // }
// }
