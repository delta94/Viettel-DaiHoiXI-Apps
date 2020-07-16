import { Dimensions } from 'react-native';
import { isTablet } from 'react-native-device-info';

const { width, height } = Dimensions.get('window');
const perWidthTablet: number = width / 2160;
const perHeightTablet: number = height / 1260;
const perWidthPhone: number = width / 375;
const perHeightPhone: number = height / 812;

export const isEmpty = (value: any): boolean => {
  return (value === undefined || value === '' || value === null);
};

export const pxToPercentage = (value: number, noTablet?: boolean): number => {
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
