import { Dimensions } from 'react-native';
import { isTablet } from 'react-native-device-info';

const { width, height } = Dimensions.get('window');
// default: 812 x 375, iPhone 11 Pro
const percentageWidth: number = width / 375;

export const isEmpty = (value: any): boolean => {
  return (value === undefined || value === '' || value === null);
};

export const pxToPercentage = (value: number, noTablet?: boolean): number => {
  let result = percentageWidth * value;

  // if (hasTablet) {
  //   result *= 0.65;
  // }

  if (isTablet() && !noTablet) {
    result *= 0.625;
  }

  return result;
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
