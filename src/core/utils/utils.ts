import { Dimensions } from 'react-native';
import { isTablet } from 'react-native-device-info';

const { width, height } = Dimensions.get('window');
// default: 812 x 375, iPhone 11 Pro
const percentageWidth: number = width / 768;
const percentageHeight: number = height / 1024;

export const isEmpty = (value: any): boolean => {
  return (value === undefined || value === '' || value === null);
};

export const pxToPercentage = (value: number, noTablet?: boolean): number => {
  if (isTablet()) {
    return height > width ? percentageHeight * value : percentageWidth * value;
  }

  return height > width ? percentageWidth * value : percentageHeight * value;
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
