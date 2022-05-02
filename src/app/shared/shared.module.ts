import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CarouselModule} from 'ngx-owl-carousel-o';

//components
import {
    CarouselComponent,
    CategoryComponent,
    InfiniteScrollComponent,
    ProductItemComponent,
    ProductSearchComponent,
    ProductSortComponent
} from "./components";

//pipes
import {PricePipe} from './pipes';


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
