import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  host: {class: 'footer'},
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent {
    today: Date = new Date();
}
