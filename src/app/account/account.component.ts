import {Component, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../core/services/auth/auth.service";
import {IUser} from "../core/interfaces";

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss'],
    host: {class: 'account'},
    encapsulation: ViewEncapsulation.None
})
export class AccountComponent {
    user: IUser | null;

    constructor(private authService: AuthService) {
        this.user = this.authService.user();
    }
}
