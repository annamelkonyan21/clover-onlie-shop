import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {IProduct, IProductState} from '../../interfaces';
import woman from './woman_clothes.json'

@Injectable({
    providedIn: 'root'
})

export class CollectionService {
    private perPage: number = 9;
    products: IProduct[] = [];

    constructor(public router: Router) {
        this.products = this.productsDataSource();
    }

    productsDataSource(): IProduct[] {
        return woman.products;
    }

    getData(page: number = 1, queryParams: any): IProductState {
        const {sortName, sortValue, search} = queryParams;
        let products = [...this.products];

        if (search) {
            products = products
                .filter(product => product.productTitle.toLowerCase().indexOf(search.toLowerCase()) > -1);
        }

        if (sortName && sortValue) {
            // @ts-ignore
            products = products.sort((a: IProduct, b: IProduct) => {
                if (+sortValue === 1) {
                    // @ts-ignore
                    return b[sortName] - a[sortName];
                }

                if (+sortValue === -1) {
                    // @ts-ignore
                    return a[sortName] - b[sortName];
                }
            })
        }
        const offset = (page - 1) * this.perPage;
        const hasMore = offset + this.perPage !== products.length;

        return {
            currentPage: page,
            hasMore: hasMore,
            total: products.length,
            lastPage: Math.ceil(products.length / this.perPage),
            products
        };
    }

    getProduct(id: number): IProduct {
        // @ts-ignore
        return this.products.find(product => product.id == id);
    }

    getHasMore(page: number, queryParams: any): boolean {
        return this.getData(page, queryParams).hasMore;
    }
}
