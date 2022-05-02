import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {IProduct} from "../../../core/interfaces";
import {NavigationUrlEnum} from "../../../core/enums";

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss'],
    host: {class: 'product-item'},
    encapsulation: ViewEncapsulation.None
})
export class ProductItemComponent {
    @Input() product!: IProduct;

    constructor(private router: Router) {}

    public navigateToProduct() {
        this.router.navigateByUrl(`${NavigationUrlEnum.Collections}/${this.product.id}`).then();
    }
}


