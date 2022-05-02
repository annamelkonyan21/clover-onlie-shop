import {NgModule} from '@angular/core';
import {AccountRoutingModule} from './account-routing.module';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {AccountComponent} from "./account.component";

@NgModule({
    declarations: [
        AccountComponent
    ],
    imports: [
        CommonModule,
        AccountRoutingModule,
        SharedModule
    ],
    providers: [],
    bootstrap: []
})
export class AccountModule {
}
