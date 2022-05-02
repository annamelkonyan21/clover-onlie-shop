import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {NavigationUrlEnum} from "../../../core/enums";

@Component({
    selector: 'app-product-sort',
    templateUrl: './product-sort.component.html',
    styleUrls: ['./product-sort.component.scss']
})
export class ProductSortComponent implements OnInit {
    queryParams: any = {};
    selectedSort: FormControl;
    sortMenuList: any[] = [];

    constructor(private route: ActivatedRoute, private router: Router) {
        this.sortMenuList = [
            {id: 1, title: 'Price Highest', name: 'price', value: '1'},
            {id: 2, title: 'Price Lowest', name: 'price', value: '-1'},
            {id: 3, title: 'Discount Highest', name: 'discount', value: '1'},
            {id: 4, title: 'Discount Lowest', name: 'discount', value: '-1'}
        ];
        this.selectedSort = new FormControl('');
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe((queryParams) => {
            this.queryParams = {...queryParams};

            if (this.queryParams.sortName && this.queryParams.sortValue) {
                const selectedSort = this.sortMenuList.find((item: any) => item.name === this.queryParams.sortName
                    && item.value === this.queryParams.sortValue);
                this.selectedSort.setValue(selectedSort?.id || '');
            }
        })
    }

    handleSortChange() {
        const selectedSort = this.sortMenuList.find(item => item.id === +this.selectedSort.value);
        this.queryParams.sortName = selectedSort.name;
        this.queryParams.sortValue = selectedSort.value;
        this.router.navigate([NavigationUrlEnum.Collections], {
            queryParams: this.queryParams
        }).then();
    }
}
