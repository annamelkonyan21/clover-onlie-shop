import {NgModule} from '@angular/core';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from "./dashboard.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [DashboardComponent]
})
export class DashboardModule {
}
