import {Component, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {validate} from 'src/app/core/utility/forms';
import {AuthService} from "../../core/services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    host: {class: 'registration'},
    encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {
    registrationForm!: FormGroup;
    email!: FormControl;
    password!: FormControl;
    firstName!: FormControl;
    lastName!: FormControl;
    phoneNumber!: FormControl;
    address!: FormControl;

    constructor(private fb: FormBuilder,
                private authService: AuthService,
                private router: Router) {
        this.createFormControls();
    }

    private createFormGroup() {
        this.registrationForm = this.fb.group({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            phoneNumber: this.phoneNumber,
            address: this.address
        });
    }

    private createFormControls(): void {
        this.email = new FormControl('', [
            Validators.required,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ]);
        this.password = new FormControl('', [Validators.required]);
        this.firstName = new FormControl('', [Validators.required]);
        this.lastName = new FormControl('', [Validators.required]);
        this.phoneNumber = new FormControl('');
        this.address = new FormControl('');
        this.createFormGroup();
    }

    submit(): void {
        if (validate(this.registrationForm)) {
            this.authService.registration(this.registrationForm.value);
            this.router.navigateByUrl('/dashboard').then();
        }
    }
}
