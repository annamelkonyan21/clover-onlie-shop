import {Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CollectionService} from 'src/app/core/services/collections/collections.service';
import {IProduct, IProductState} from "../../core/interfaces";

@Component({
    selector: 'app-collections',
    templateUrl: './collections.component.html',
    styleUrls: ['./collections.component.scss'],
    host: {class: 'collections'},
    encapsulation: ViewEncapsulation.None
})
export class CollectionsComponent {
    products: IProduct[] = [];
    currentPage = 0;
    queryParams: any = {};

    constructor(private router: Router,
                private route: ActivatedRoute,
                private collectionService: CollectionService) {
        this.route.queryParams.subscribe((params) => {
            this.queryParams = {...params};
            this.initProducts();
        });
    }

    private initProducts(): void {
        const data: IProductState = this.collectionService.getData(this.currentPage, this.queryParams)
        this.products = data.products;
        this.currentPage = data.currentPage;
    }

    onScroll(): void {
        this.fetchProducts();
    }

    private fetchProducts() {
        if (this.collectionService.getHasMore(this.currentPage, this.queryParams)) {
            this.currentPage++;
            this.collectionService.getData(this.currentPage, this.queryParams).products.forEach(item => {
                this.products.push(item);
            })
        }
    }
}
