import {Component, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../../core/services/auth/auth.service";
import {Router} from "@angular/router";
import {IUser} from "../../core/interfaces";
import {NavigationUrlEnum} from "../../core/enums";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    host: {class: 'header'},
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
    public pageName: string = 'clover';
    public user: IUser | null;

    constructor(
        public authService: AuthService,
        private router: Router,
    ) {
        this.user = this.authService.user();
    }

    login() {
        this.router.navigateByUrl(NavigationUrlEnum.Login).then();
    }

    logout() {
        this.authService.logout();
        this.router.navigate([this.router.url]).then();
        this.user = this.authService.user();
    }

    navigateToAccount() {
        this.router.navigateByUrl(NavigationUrlEnum.Account).then();
    }

    navigateToDashboard() {
        this.router.navigateByUrl(NavigationUrlEnum.Dashboard).then();
    }
}
