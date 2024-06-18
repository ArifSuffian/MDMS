import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AccountService} from "../services";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private accountService: AccountService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const currentUser = this.accountService.currentUserValue;
    if (currentUser) {
      // check if route is restricted by role
      // TODO: old uses .roles new ["roles"]
      if (route.data["roles"] && route.data["roles"].indexOf(currentUser.AccessLevel) === -1) {
        // role not authorised so redirect to home page
        this.router.navigate(['/']);
        return false;
      } 

      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

}