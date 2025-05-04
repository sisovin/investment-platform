export function formatDate(date: Date, format: string): string {
  const options: Intl.DateTimeFormatOptions = {};

  switch (format) {
    case 'short':
      options.year = 'numeric';
      options.month = 'short';
      options.day = 'numeric';
      break;
    case 'medium':
      options.year = 'numeric';
      options.month = 'short';
      options.day = 'numeric';
      options.hour = 'numeric';
      options.minute = 'numeric';
      break;
    case 'long':
      options.year = 'numeric';
      options.month = 'long';
      options.day = 'numeric';
      options.hour = 'numeric';
      options.minute = 'numeric';
      options.second = 'numeric';
      break;
    default:
      throw new Error(`Unknown format: ${format}`);
  }

  return new Intl.DateTimeFormat('en-US', options).format(date);
}

export function parseDate(dateString: string, format: string): Date {
  const parts = dateString.split(/[- :]/);
  let year, month, day, hour, minute, second;

  switch (format) {
    case 'short':
      [year, month, day] = parts;
      return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    case 'medium':
      [year, month, day, hour, minute] = parts;
      return new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute));
    case 'long':
      [year, month, day, hour, minute, second] = parts;
      return new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute), parseInt(second));
    default:
      throw new Error(`Unknown format: ${format}`);
  }
}
