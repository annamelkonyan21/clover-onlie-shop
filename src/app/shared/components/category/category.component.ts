import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {ICategory} from "../../../core/interfaces";

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss'],
    host: {class: 'category'},
    encapsulation: ViewEncapsulation.None
})
export class CategoryComponent {
    @Input() category!: ICategory;
    @Output() onNavigatedTo = new EventEmitter<string>()

    constructor() {
    }

    navigateTo(): void {
        this.onNavigatedTo.emit(this.category.path);
    }
}


