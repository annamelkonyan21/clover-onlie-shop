import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NavigationUrlEnum} from "../../../core/enums";

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
    queryParams: any = {};
    search: FormControl;
    timeout: any;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.search = new FormControl('');
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe((queryParams) => {
            this.queryParams = {...queryParams};

            if (this.queryParams.search) {
                this.search.setValue(this.queryParams.search || '');
            }
        })
    }

    handleSearchChange() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }

        this.timeout = setTimeout(() => {
            if (this.search.value) {
                this.queryParams.search = this.search.value;
            } else {
                delete this.queryParams.search;
            }

            this.router.navigate([NavigationUrlEnum.Collections], {
                queryParams: this.queryParams
            }).then();
        }, 2000);
    }
}
