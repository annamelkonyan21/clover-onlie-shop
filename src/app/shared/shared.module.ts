import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {ToastrModule} from 'ngx-toastr';

//components
import {
    CarouselComponent,
    CategoryComponent,
    InfiniteScrollComponent,
    ProductItemComponent,
    ProductSearchComponent,
    ProductSortComponent
} from "./components";

import {PricePipe} from './pipe/price.pipe';


@NgModule({
    declarations: [
        CategoryComponent,
        ProductItemComponent,
        CarouselComponent,
        InfiniteScrollComponent,
        PricePipe,
        ProductSortComponent,
        ProductSearchComponent
    ],
    imports: [
        CommonModule,
        CarouselModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
    ],
    exports: [
        CategoryComponent,
        ProductItemComponent,
        CarouselComponent,
        ProductSortComponent,
        ProductSearchComponent,
        InfiniteScrollComponent,
        PricePipe
    ],
    providers: [],
    bootstrap: []
})
export class SharedModule {
}
