import { CanActivateFn } from '@angular/router';
import {Injectable} from "@angular/core";
import {UserService} from "./user.service";
import {AuthService} from "./auth.service";


export const authGuard: CanActivateFn = (route, state) => {
  return true;
};

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private authService : AuthService) {
  }
  isAuthenticated(): boolean {

   // const isAuthenticated =  this.authService.handleAuth
    return true;
  }
}
