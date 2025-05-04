export function convertCurrency(amount: number, fromCurrency: string, toCurrency: string, exchangeRate: number): number {
  if (fromCurrency === toCurrency) {
    return amount;
  }
  return amount * exchangeRate;
}

export function formatCurrency(amount: number, currencyCode: string = 'USD', locale: string = 'en-US'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode
  }).format(amount);
}
