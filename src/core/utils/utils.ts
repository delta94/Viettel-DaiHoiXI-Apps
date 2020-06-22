import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
import { LanguageEnum } from './constants';

const { width, height } = Dimensions.get('window');
// default: 812 x 375, iPhone 11 Pro
const percentageWidth: number = width / 375;

export const isEmpty = (value: any): boolean => {
  return (value === undefined || value === '' || value === null);
};

export const fontSize = (value: number): number => {
  return wp(value) * 1.23;
};

export const averageHW = (value: number): number => {
  return wp(value) * 1.23;
};

export const pxToPercentage = (value: number): number => {
  return percentageWidth * value;
};

export const generateCaptcha = (length: number): string => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

export const getCurrentTime = (): string => {
  const currentDate = new Date();
  let mm: string | number = currentDate.getMinutes();
  let hh: string | number = currentDate.getHours();

  if (mm < 10) {
    mm = '0' + mm;
  }

  if (hh < 10) {
    hh = '0' + hh;
  }

  return `${hh}:${mm}`;
};

export const getDay = (currentDay: number): string => {
  const days: string[] = [
    'Chủ nhật',
    'Thứ hai',
    'Thứ ba',
    'Thứ tư',
    'Thứ năm',
    'Thứ sáu',
    'Thứ bảy',
  ];

  return days[currentDay];
};

export const getDayEng = (currentDay: number): string => {
  const days: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return days[currentDay];
};

export const getDayV2 = (currentDay: number): string => {
  const days: string[] = [
    'Chủ nhật',
    'Thứ 2',
    'Thứ 3',
    'Thứ 4',
    'Thứ 5',
    'Thứ 6',
    'Thứ 7',
  ];

  return days[currentDay];
};

export const getCurrentDay = (): number => {
  const currentDate = new Date();

  return currentDate.getDay();
};

export const getCurrentDate = (languageKey: string): string => {
  const currentDate = new Date();
  const currentDay: number = currentDate.getDay();
  const yyyy = currentDate.getFullYear();
  let dd: string | number = currentDate.getDate();
  const MM: string | number = currentDate.getMonth() + 1;
  const months_short: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  if (languageKey === LanguageEnum.Vietnamese) {
    return `${getDay(currentDay)}, ${dd} tháng ${MM} năm ${yyyy}`;
  } else {
    if (dd === 1 || dd === 21 || dd === 31) {
      dd = `${dd}st`;
    } else if (dd === 2 || dd === 22) {
      dd = `${dd}nd`;
    } else if (dd === 3 || dd === 23) {
      dd = `${dd}rd`;
    } else {
      dd = `${dd}th`;
    }

    return `${getDayEng(currentDay)}, ${months_short[MM - 1]} ${dd} ${yyyy}`;
  }
};

export const getCurrentDateV2 = (languageKey: string): string => {
  const currentDate = new Date();
  const currentDay: number = currentDate.getDay();
  let dd: string | number = currentDate.getDate();
  let MM: string | number = currentDate.getMonth() + 1;
  const yyyy = currentDate.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (MM < 10) {
    MM = '0' + MM;
  }

  if (languageKey === LanguageEnum.Vietnamese) {
    return `${getDayV2(currentDay)}, ${dd}/${MM}/${yyyy}`;
  } else {
    return `${getDayEng(currentDay)}, ${dd}/${MM}/${yyyy}`;
  }
};

export const getCurrentDateV3 = (): string => {
  const currentDate = new Date();
  const currentDay: number = currentDate.getDay();
  let dd: string | number = currentDate.getDate();
  let MM: string | number = currentDate.getMonth() + 1;
  const yyyy = currentDate.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (MM < 10) {
    MM = '0' + MM;
  }

  return `${dd}-${MM}-${yyyy}`;
};

export const chunk = <T>(array: Array<T>, size: number): T[][] => {
  const chunkedArr: T[][] = [];
  const copied: T[] = [...array];
  const numOfChild: number = Math.ceil(copied.length / size);

  for (let i = 0; i < numOfChild; i++) {
    chunkedArr.push(copied.splice(0, size));
  }

  return chunkedArr;
};

export const getSecondsOfDay = (): number => {
  const currentDate = new Date();

  return currentDate.getSeconds() + (60 * (currentDate.getMinutes() + (60 * currentDate.getHours())));
};

export const stringToASCII = (str: string): string => {
  try {
    return str.replace(/[àáảãạâầấẩẫậăằắẳẵặ]/g, 'a')
      .replace(/[èéẻẽẹêềếểễệ]/g, 'e')
      .replace(/[đ]/g, 'd')
      .replace(/[ìíỉĩị]/g, 'i')
      .replace(/[òóỏõọôồốổỗộơờớởỡợ]/g, 'o')
      .replace(/[ùúủũụưừứửữự]/g, 'u')
      .replace(/[ỳýỷỹỵ]/g, 'y');
  } catch {
    return '';
  }
};

export const searchASCII = (strSearch: string, strOriginal: string): boolean => {
  const strSearchToASCII = stringToASCII(strSearch.toLowerCase());
  const strOriginalToASCII = stringToASCII(strOriginal.toLowerCase());

  return strOriginalToASCII.includes(strSearchToASCII);
};

export const dateCompare = (dateFirst: Date, dateSecond: Date): number | undefined => {
  if (!dateFirst || !dateSecond) {
    return undefined;
  }

  const msDateFirst = (Date.UTC(dateFirst.getFullYear(), dateFirst.getMonth() + 1, dateFirst.getDate())).toString();
  const msDateSecond = (Date.UTC(dateSecond.getFullYear(), dateSecond.getMonth() + 1, dateSecond.getDate())).toString();

  if (parseFloat(msDateFirst) < parseFloat(msDateSecond)) {
    return -1;
  } else if (parseFloat(msDateFirst) === parseFloat(msDateSecond)) {
    return 0;
  } else if (parseFloat(msDateFirst) > parseFloat(msDateSecond)) {
    return 1;
  } else {
    return undefined;
  }
};

export const datediff = (startDate: Date, endDate: Date): number => {
  if (!startDate || !endDate) {
    return 0;
  }

  const differenceInTime: number = endDate.getTime() - startDate.getTime();

  return Math.round(differenceInTime / (1000 * 60 * 60 * 24));
};

export const minutediff = (startDate: Date, endDate: Date): number => {
  if (!startDate || !endDate) {
    return 0;
  }

  const differenceInTime: number = endDate.getTime() - startDate.getTime();

  return Math.round(differenceInTime / (1000 * 60));
};

export const getDates = (startDate: Date, endDate: Date): Date[] => {
  if (!startDate || !endDate) {
    return [];
  }

  Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  const dateArray = new Array();
  let currentDate = startDate;

  while (dateCompare(currentDate, endDate.addDays(1)) === -1) {
    dateArray.push(new Date(currentDate));
    currentDate = currentDate.addDays(1);
  }

  return dateArray;
};
