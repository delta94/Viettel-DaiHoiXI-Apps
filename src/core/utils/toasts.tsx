import React from 'react';
import Toast from 'react-native-toast-message';
import {
  Text,
  StyleSheet,
} from 'react-native';
import { isTablet } from 'react-native-device-info';
import { pxToPercentage } from './utils';
import { textStyle } from '@src/components';

const success = (message: string): void => {
  toastConfig('Thành công!', message, 'success');
};

const error = (message: string): void => {
  toastConfig('Lỗi!', message, 'error');
};

const info = (message: string): void => {
  toastConfig('Thông tin!', message, 'info');
};

const toastConfig = (title: string, message: string, type: string): void => {
  Toast.show({
    type,
    position: 'top',
    text1: <Text style={styles.text1}>{title}</Text>,
    text2: <Text style={styles.text2}>{message}</Text>,
    visibilityTime: 5000,
    autoHide: true,
    topOffset: isTablet() ? pxToPercentage(100) : pxToPercentage(50),
    onShow: () => { },
    onHide: () => { },
  });
};

const styles = StyleSheet.create({
  text1: {
    fontSize: isTablet() ? pxToPercentage(37.5) : pxToPercentage(15),
    ...textStyle.proDisplayBold,
  },
  text2: {
    fontSize: isTablet() ? pxToPercentage(32.5) : pxToPercentage(13),
    color: 'black',
    ...textStyle.proDisplayRegular,
  },
});

export const toasts = {
  success,
  error,
  info,
};
