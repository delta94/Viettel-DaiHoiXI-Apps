import React from 'react';
import {
  StyleType,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  ImageProps,
  View,
  Text,
} from 'react-native';
import {
  TopNavigationProps,
} from '@kitten/ui';
import {
  starIcon,
  bualiemIcon,
} from '@src/assets/icons';
import { SafeAreaView } from 'react-navigation';
import { pxToPercentage } from '@src/core/utils/utils';

export interface ComponentProps {
  backIcon?: BackIconProp;
  onBackPress?: () => void;
}

export type TopNavigationBarProps = TopNavigationProps & ComponentProps;

type BackIconProp = (style: StyleType) => React.ReactElement<ImageProps>;

const TopNavigationBarComponent: React.FunctionComponent<TopNavigationBarProps> = (props) => {

  const { themedStyle } = props;

  const title = 'ĐẠI HỘI ĐẠI BIỂU ĐẢNG BỘ THÀNH PHỐ HỒ CHÍ MINH\nLẦN THỨ XI, NHIỆM KỲ 2020 - 2025';
  return (
    <SafeAreaView style={themedStyle.safeArea}>
      <View style={themedStyle.viewSession}>
        <View style={themedStyle.viewFlag}>
        {bualiemIcon(themedStyle.qrCodeicon)}
        </View>
        <View style={themedStyle.viewFlag}>
        {starIcon(themedStyle.qrCodeicon)}
        </View>
        <View style={themedStyle.topNavigation}>
          <Text style={themedStyle.titleStyle}>{title}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export const TopNavigationBar = withStyles(TopNavigationBarComponent, (theme: ThemeType) => ({
  safeArea: {
    backgroundColor: theme['color-primary-default'],
    paddingTop: pxToPercentage(30), // 45
  },
  topNavigation: {
    flex: 1, // width 596
    backgroundColor: theme['color-primary-default'],
    height: pxToPercentage(64),
    marginBottom: pxToPercentage(16),

  },
  titleStyle: {
    color: 'yellow',
    // ...textStyle.regular
    fontSize: pxToPercentage(16), // font size 24 SFProDisplay-Regular
    paddingVertical: pxToPercentage(10),
    textAlign: 'center',
  },
  viewFlag: {
    width: pxToPercentage(70), // width 96
    height: pxToPercentage(60), // height 64
    backgroundColor: '#B4211A',
    marginLeft: pxToPercentage(17),
    alignItems: 'center',
    justifyContent : 'center',
  },
  viewSession: {
    flexDirection: 'row',
    marginHorizontal: pxToPercentage(17),
  },
  qrCodeicon: {
    width: pxToPercentage(34),
    height: pxToPercentage(30),
    tintColor: '#F1E5B5',
},
}));
