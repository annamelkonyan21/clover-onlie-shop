import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "../services/auth/auth.service";

@Injectable()
export class CanActivateUserGuard implements CanActivate {
    constructor(private authService: AuthService,
                private router: Router) {
    }

    canActivate(): boolean {
        if (!this.authService.user()) {
            this.router.navigateByUrl('/auth/login');
            return true;
        }
        return true;
    }
}
