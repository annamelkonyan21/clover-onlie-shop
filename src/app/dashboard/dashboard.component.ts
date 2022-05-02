import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {CategoriesService} from '../core/services/categories/categories.service';
import {AuthService} from "../core/services/auth/auth.service";
import {ICategory} from "../core/interfaces";
import {NavigationUrlEnum} from "../core/enums";

@Component({
    selector: 'app-root',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    host: {class: 'dashboard'},
    encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {
    categories: ICategory[] = [];

    constructor(private categoriesService: CategoriesService,
                private authService: AuthService,
                private router: Router) {
        this.categories = this.categoriesService.getCategories();
    }

    shopNow(): void {
        if (!this.authService.user()) {
            this.router.navigateByUrl(NavigationUrlEnum.Login).then();
        }
    }

    navigateToCategory(event: string): void {
        this.router.navigate([NavigationUrlEnum.Collections], {
            queryParams: {type: event}
        }).then();
    }
}
