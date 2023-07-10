// import { CanActivateFn, Router } from '@angular/router';
// import {Injectable} from "@angular/core";
// import {UserService} from "./user.service";
// import {AuthService} from "./auth.service";
// import {CookieService} from "ngx-cookie-service";
// import { CHECK_IF_LOGGED_IN } from '../employee/employee';


// export const authGuard: CanActivateFn = async (route, state) => {
//    const verifyAuthUser = new AuthenticationGuard();
//   // if(await verifyAuthUser.isAuthenticated()) return true;
//   // else {
//   //   verifyAuthUser.handleNavigateToLogginPage();
//   //   return false
//   // }
//   verifyAuthUser.handleNavigateToLogginPage();
//   const is = false;
//   if(!is) return true;
//   verifyAuthUser.handleNavigateToLogginPage();
//   return false
// };

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthenticationGuard {

//   isLoggedIn : boolean  | undefined;

//   constructor(
//     private authService? : AuthService, 
//     private router? : Router
//     ) {
//   }
//  async isAuthenticated(): Promise<boolean> {
//      this.isLoggedIn = await this.authService?.isAuthenticated();
//     if(this.isLoggedIn) return true;
//     return false;
//   }

//   handleNavigateToLogginPage() {
//      this.router?.navigate(["login"])
//   }
// }

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    if(this.authService.isAuthenticated()) return true;

    this.router.navigate(["login"])
    return false
  }

  
}

