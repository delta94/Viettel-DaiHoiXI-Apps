export const cardNumberFormatter = (value: string): string => {
  return value
    .replace(/\s?/g, '')
    .replace(/(\d{4})/g, '$1 ')
    .trim();
};
// 21/08/2019 => 21-08-2019
export const dateFormatterV1 = (date: string): string => {
  return date.split('/').join('-');
};

// Date to 01/01/2020
export const ddMMyyyyFormatter = (value: Date): string => {
  if (!value) {
    return '';
  }

  let dd: string | number = value.getDate();
  let mm: string | number = value.getMonth() + 1;
  const yyyy: number = value.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }

  return dd + '/' + mm + '/' + yyyy;
};

// Date to 01/01/2020
export const ddMMyyyyHHmiFormatter = (value: Date): string => {
  if (!value) {
    return '';
  }

  let dd: string | number = value.getDate();
  let mm: string | number = value.getMonth() + 1;
  let hh: string | number = value.getHours();
  let mi: string | number = value.getMinutes();
  const yyyy: number = value.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  if (hh < 10) {
    hh = '0' + hh;
  }
  if (mi < 10) {
    mi = '0' + mi;
  }

  return dd + '/' + mm + '/' + yyyy + hh + ':' + mi;
};

export const ddMMyyyyToDateFormatter = (value: string) => {
  const from = value.split('/');

  return new Date(parseInt(from[2]), parseInt(from[1]) - 1, parseInt(from[0]));
};
