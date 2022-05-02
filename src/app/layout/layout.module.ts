import {NgModule} from '@angular/core';

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from "./layout/layout.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {TopNavBarComponent} from "./top-nav-bar/top-nav-bar.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        TopNavBarComponent
    ],
    imports: [
        CommonModule,
        LayoutRoutingModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [LayoutComponent]
})
export class LayoutModule {
}
