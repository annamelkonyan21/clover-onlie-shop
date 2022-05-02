import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'pricePipe'})
export class PricePipe implements PipeTransform {
    transform(value: number, percent: number): number {
        if (percent) {
            return value - (value * percent / 100);
        } else {
            return value;
        }
    }
}
