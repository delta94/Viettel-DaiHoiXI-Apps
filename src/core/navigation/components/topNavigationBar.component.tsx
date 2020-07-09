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
import { getStatusBarHeight } from 'react-native-status-bar-height';

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
      <View style={themedStyle.viewStatusbar}>
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
      </View>
    </SafeAreaView>
  );
};

export const TopNavigationBar = withStyles(TopNavigationBarComponent, (theme: ThemeType) => ({
  safeArea: {
    backgroundColor: theme['color-primary-2'],
    paddingTop: getStatusBarHeight(false),
  },
  viewStatusbar: {
    backgroundColor: theme['color-primary-0'],
    paddingTop: pxToPercentage(8),
  },
  topNavigation: {
    flex: 1, // width 596
    backgroundColor: theme['color-primary-0'],
    height: pxToPercentage(50),
  },
  titleStyle: {
    color: theme['color-primary-2'],
    fontSize: pxToPercentage(16), // font size 24 SFProDisplay-Regular
    textAlign: 'center',
  },
  viewFlag: {
    width: pxToPercentage(60), // width 96
    height: pxToPercentage(40), // height 64
    backgroundColor: theme['color-primary-2'],
    marginHorizontal: pxToPercentage(19),
    marginLeft: pxToPercentage(0),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: pxToPercentage(6),
  },
  viewSession: {
    flexDirection: 'row',
    marginHorizontal: pxToPercentage(38),
  },
  icon: {
    width: pxToPercentage(26),
    height: pxToPercentage(22),
    tintColor: theme['color-primary-1'],
  },
}));
