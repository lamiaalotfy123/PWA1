import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard',
  standalone: true,
})
export class CreditCardPipe implements PipeTransform {
  transform(value: string): string {
    const formattednumber = value
      .replace(/(.{4})/g, '$1 – ')
      .trim()
      .slice(0, -2);
    return formattednumber;
  }
}
