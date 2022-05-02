import {Component, Input, ViewEncapsulation} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
    host: {class: 'carousel'},
    encapsulation: ViewEncapsulation.None
})
export class CarouselComponent {
    @Input() images: string[] = [];

    customOptions: OwlOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            740: {
                items: 3
            },
            940: {
                items: 4
            }
        },
        nav: true
    }

    constructor() {}
}


