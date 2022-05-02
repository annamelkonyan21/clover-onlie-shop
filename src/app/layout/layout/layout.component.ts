import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    host: {class: 'layout'},
    encapsulation: ViewEncapsulation.None
})
export class LayoutComponent {
}
