import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: number, currencyCode: string = 'USD', display: string = 'symbol', digitsInfo: string = '1.2-2', locale: string = 'en-US'): string | null {
    if (value == null) {
      return null;
    }

    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
      currencyDisplay: display,
      minimumFractionDigits: parseInt(digitsInfo.split('-')[0]),
      maximumFractionDigits: parseInt(digitsInfo.split('-')[1])
    }).format(value);
  }
}
