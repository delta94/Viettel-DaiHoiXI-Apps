import { Dimensions } from 'react-native';
import { isTablet } from 'react-native-device-info';

const { width, height } = Dimensions.get('window');
const perWidthTablet: number = width / 2160;
const perHeightTablet: number = height / 2160;
const perWidthPhone: number = width / 375;
const perHeightPhone: number = height / 375;

export const isEmpty = (value: any): boolean => {
  return (value === undefined || value === '' || value === null);
};

export const pxToPercentage = (value: number): number => {
  if (isTablet()) {
    return height > width ? perHeightTablet * value : perWidthTablet * value;
  }

  return height > width ? perWidthPhone * value : perHeightPhone * value;
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

export const chunk = <T>(array: Array<T>, size: number): T[][] => {
  const chunkedArr: T[][] = [];
  const copied: T[] = [...array];
  const numOfChild: number = Math.ceil(copied.length / size);

  for (let i = 0; i < numOfChild; i++) {
    chunkedArr.push(copied.splice(0, size));
  }

  return chunkedArr;
};

export const addDays = (dateParam: Date, dayCount: number): Date => {
  const date = new Date(dateParam);
  date.setDate(date.getDate() + dayCount);

  return date;
};

export const minusDays = (dateParam: Date, dayCount: number): Date => {
  const date = new Date(dateParam);
  date.setDate(date.getDate() - dayCount);

  return date;
};

export const tenMinutesCountdown = (time: number): string => {
  return `${Math.trunc(time / 60) > 9
    ? Math.trunc(time / 60)
    : `0${Math.trunc(time / 60)}`}:${time % 60 < 10
      ? `0` + (time % 60)
      : (time % 60)}`;
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

