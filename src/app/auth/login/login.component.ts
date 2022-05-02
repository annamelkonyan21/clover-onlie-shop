import {Component, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {validate} from '../../core/utility/forms';
import {AuthService} from "../../core/services/auth/auth.service";
import {NavigationUrlEnum} from "../../core/enums";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    host: {class: 'login'},
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
    singInForm!: FormGroup;
    email!: FormControl;
    password!: FormControl;

    constructor(private fb: FormBuilder,
                private router: Router,
                private authService: AuthService) {
        this.createFormControls();
    }

    private createFormGroup() {
        this.singInForm = this.fb.group({
            email: this.email,
            password: this.password,
        });
    }

    private createFormControls(): void {
        this.email = new FormControl('', [
            Validators.required,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ]);
        this.password = new FormControl('', [Validators.required]);
        this.createFormGroup();
    }

    login(): void {
        if (validate(this.singInForm) && this.authService.login(this.singInForm.value)){
            this.router.navigateByUrl(NavigationUrlEnum.Dashboard).then();
        }
    }
}
