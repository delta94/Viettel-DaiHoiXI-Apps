import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {Text, SafeAreaView} from 'react-native';

import { textStyle } from '..';
import { pxToPercentage } from '@src/core/utils/utils';

export type HomeFooterProps = ThemedComponentProps ;

const HomeFooterComponent: React.FunctionComponent<HomeFooterProps> = (props) => {


  const { themedStyle } = props;

  const title = 'CHÀO MỪNG ĐẠI HỘI ĐẠI BIỂU ĐẢNG BỘ THÀNH PHỐ HỒ CHÍ MINH LẦN THỨ XI, NHIỆM KÌ 2020-2025';

  return (
    <SafeAreaView style={themedStyle.container}>
        <Text style={themedStyle.txtFooter}>{title}</Text>
    </SafeAreaView>
  );
};

export const Footer = withStyles(HomeFooterComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['color-primary-default'],
    height: pxToPercentage(32), // hieght 74
    justifyContent: 'center',
  },
  txtFooter: {
    fontSize : pxToPercentage(14), // size 20
    color: theme['border-basic-color-4'],
    textAlign: 'center',
    ...textStyle.regular,
  },
}));

