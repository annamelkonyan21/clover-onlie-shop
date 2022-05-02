import {IProduct} from "./product";

export interface IProductState {
    currentPage: number;
    hasMore: boolean;
    total: number;
    lastPage: number;
    products: IProduct[]
}
