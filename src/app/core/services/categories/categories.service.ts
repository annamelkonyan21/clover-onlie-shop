import {Injectable} from '@angular/core';
import {CategoriesTypeEnum} from '../../enums';
import {ICategory} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {
    private categories: ICategory[] = [
        {
            title: CategoriesTypeEnum.Woman,
            image: "https://i.pinimg.com/564x/59/54/43/595443aeb8003b708392c75acf8fe53a.jpg",
            path: "woman"
        },
        {
            title: CategoriesTypeEnum.Accessories,
            image: "https://i.pinimg.com/564x/fd/54/47/fd5447b166203cf1f90a7afb398426fb.jpg",
            path: "accessories"
        },
        {
            title: CategoriesTypeEnum.Men,
            image: "https://cdn11.bigcommerce.com/s-d6g9r1gtjo/images/stencil/original/image-manager/men-banner.jpg",
            path: "men"
        },
        {
            title: CategoriesTypeEnum.BugsAndShoes,
            image: "https://i.pinimg.com/564x/40/1c/4a/401c4ada411356e2584f1a43b5d9f16e.jpg",
            path: "bugs-and-shoes"
        },
        {
            title: CategoriesTypeEnum.Children,
            image: "https://i.pinimg.com/564x/d2/a5/22/d2a522accc784fabef0df246758aa9a2.jpg",
            path: "children"
        },
        {
            title: CategoriesTypeEnum.SportsAndEntertainment,
            image: "https://i.pinimg.com/564x/13/c0/10/13c010a962651939464c0d1c3dd756ba.jpg",
            path: "sport"
        }
    ];

    constructor() {}

    getCategories(): ICategory[] {
        return this.categories;
    }
}
