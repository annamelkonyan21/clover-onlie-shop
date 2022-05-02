import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {CommonModule} from "@angular/common";
import {AuthRoutingModule} from "./auth-routing.module";
import {SharedModule} from "../shared/shared.module";
import {AuthComponent} from './auth/auth.component';

@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent,
        AuthComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AuthComponent]
})
export class AuthModule {
}
