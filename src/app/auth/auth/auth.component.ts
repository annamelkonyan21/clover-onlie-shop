import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationTypeEnum, NavigationUrlEnum} from 'src/app/core/enums';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    host: {class: 'auth'},
    encapsulation: ViewEncapsulation.None
})
export class AuthComponent {
    type: AuthenticationTypeEnum = AuthenticationTypeEnum.SignIn;
    AuthenticationTypeEnum = AuthenticationTypeEnum;
    pageName: string = 'clover';

    constructor(private route: Router) {
    }

    changeType(): void {
        if (this.type === AuthenticationTypeEnum.SignIn) {
            this.type = AuthenticationTypeEnum.Registration;
            this.route.navigateByUrl(NavigationUrlEnum.Register).then();
        } else {
            this.type = AuthenticationTypeEnum.SignIn;
            this.route.navigateByUrl(NavigationUrlEnum.Login).then();
        }
    }

}
