import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Text,
  SafeAreaView,
} from 'react-native';
import { textStyle } from '..';
import { pxToPercentage } from '@src/core/utils/utils';
import { isTablet } from 'react-native-device-info';
import { widthPercentageToDP } from 'react-native-responsive-screen';

export type FooterProps = ThemedComponentProps;

const FooterComponent: React.FunctionComponent<FooterProps> = (props) => {
  const { themedStyle } = props;

  const title = 'CHÀO MỪNG ĐẠI HỘI ĐẠI BIỂU ĐẢNG BỘ THÀNH PHỐ HỒ CHÍ MINH LẦN THỨ XI, NHIỆM KỲ 2020 - 2025';

  return (
    <SafeAreaView style={themedStyle.container}>
      <Text style={themedStyle.txtFooter}>
        {title}
      </Text>
    </SafeAreaView>
  );
};

export const Footer = withStyles(FooterComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['color-primary-2'],
    height: pxToPercentage(32), // hieght 74
    justifyContent: 'center',
    borderTopWidth: pxToPercentage(2),
    borderColor: theme['color-primary-3'],
    width: widthPercentageToDP(100),
  },
  txtFooter: {
    fontSize: isTablet() ? pxToPercentage(15) : pxToPercentage(9), // size 20
    color: theme['color-primary-3'],
    textAlign: 'center',
    ...textStyle.regular,
  },
}));

