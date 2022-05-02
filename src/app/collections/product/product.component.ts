import {Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IProduct} from 'src/app/core/interfaces';
import {CollectionService} from 'src/app/core/services/collections/collections.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    host: {class: 'product'},
    encapsulation: ViewEncapsulation.None
})
export class ProductComponent {
    id: number = 0;
    product!: IProduct;

    constructor(private route: Router,
                private activatedRoute: ActivatedRoute,
                private collectionService: CollectionService) {
        this.activatedRoute.params.subscribe(params => {
            this.id = +params['id'];
            this.initProducts();
        });
    }

    private initProducts(): void {
        this.product = this.collectionService.getProduct(this.id);
    }
}
