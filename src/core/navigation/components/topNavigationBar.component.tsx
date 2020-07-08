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
import { viewStyle } from '@src/components/viewStyle';

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
          {bualiemIcon(themedStyle.icon)}
        </View>
        <View style={themedStyle.viewFlag}>
          {starIcon(themedStyle.icon)}
        </View>
        <View style={themedStyle.topNavigation}>
          <Text style={themedStyle.titleStyle}>
            {title}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export const TopNavigationBar = withStyles(TopNavigationBarComponent, (theme: ThemeType) => ({
  safeArea: {
    backgroundColor: theme['color-primary-0'],
    paddingTop: pxToPercentage(30), // 45
    ...viewStyle.shadow,
  },
  topNavigation: {
    flex: 1, // width 596
    backgroundColor: theme['color-primary-0'],
    height: pxToPercentage(64),
    justifyContent: 'center',
  },
  titleStyle: {
    color: theme['color-primary-1'],
    fontSize: pxToPercentage(18), // font size 24 SFProDisplay-Regular
    textAlign: 'center',
  },
  viewFlag: {
    width: pxToPercentage(80), // width 96
    height: pxToPercentage(60), // height 64
    backgroundColor: theme['color-primary-2'],
    marginHorizontal: pxToPercentage(19),
    marginLeft: pxToPercentage(0),
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewSession: {
    flexDirection: 'row',
    marginBottom: pxToPercentage(16),
    marginHorizontal: pxToPercentage(38),
  },
  icon: {
    width: pxToPercentage(34),
    height: pxToPercentage(30),
    tintColor: theme['color-primary-1'],
  },
}));
