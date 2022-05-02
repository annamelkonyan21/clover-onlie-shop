import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {ICategory} from "../../core/interfaces";
import {CategoriesService} from "../../core/services/categories/categories.service";
import {NavigationUrlEnum} from "../../core/enums";

@Component({
    selector: 'app-top-nav-bar',
    templateUrl: './top-nav-bar.component.html',
    styleUrls: ['./top-nav-bar.component.scss'],
    host: {class: 'top-nav-bar'},
    encapsulation: ViewEncapsulation.None
})
export class TopNavBarComponent {
    categories: ICategory[] = [];

    constructor(private router: Router,
                private categoriesService: CategoriesService) {
        this.categories = this.categoriesService.getCategories();
    }

    navigateTo(type: string | undefined): void {
        this.router.navigate([NavigationUrlEnum.Collections], {
            queryParams: {type: type}
        }).then();
    }
}
