import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CommonModule} from "@angular/common";
import {CollectionsRoutingModule} from "./collections-routing.module";
import {SharedModule} from "../shared/shared.module";
import {CollectionsComponent} from './collections/collections.component';
import {ProductComponent} from "./product/product.component";

@NgModule({
    declarations: [
        CollectionsComponent,
        ProductComponent
    ],
    imports: [
        CommonModule,
        CollectionsRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [CollectionsComponent]
})
export class CollectionsModule {
}
