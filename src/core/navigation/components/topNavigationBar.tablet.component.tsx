import React from 'react';
import {
  ThemeType,
  withStyles,
  ThemedComponentProps,
} from '@kitten/theme';
import {
  View,
  Text,
} from 'react-native';
import {
  StarIcon,
  CommunistIcon,
} from '@src/assets/icons';
import { SafeAreaView } from 'react-navigation';
import { pxToPercentage } from '@src/core/utils/utils';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { textStyle } from '@src/components';

export type TopNavigationBarTabletProps = ThemedComponentProps;

const TopNavigationBarTabletComponent: React.FunctionComponent<TopNavigationBarTabletProps> = (props) => {
  const { themedStyle } = props;

  return (
    <SafeAreaView style={themedStyle.safeArea}>
      <View style={themedStyle.container}>
        <View style={themedStyle.viewLeftRight}>
          <View style={themedStyle.viewFlag}>
            {CommunistIcon(themedStyle.icon)}
          </View>
          <View style={themedStyle.viewFlag}>
            {StarIcon(themedStyle.icon)}
          </View>
        </View>
        <View style={themedStyle.viewCenter}>
          <Text style={themedStyle.titleStyle}>
            {'ĐẠI HỘI ĐẠI BIỂU ĐẢNG BỘ THÀNH PHỐ HỒ CHÍ MINH\nLẦN THỨ XI, NHIỆM KỲ 2020 - 2025'}
          </Text>
        </View>
        <View style={themedStyle.viewLeftRight} />
      </View>
    </SafeAreaView>
  );
};

export const TopNavigationBarTablet = withStyles(TopNavigationBarTabletComponent, (theme: ThemeType) => ({
  safeArea: {
    backgroundColor: theme['color-primary-2'],
    paddingTop: getStatusBarHeight(false),
  },
  container: {
    flexDirection: 'row',
    height: pxToPercentage(120),
    backgroundColor: theme['color-primary-0'],
  },
  viewLeftRight: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: pxToPercentage(350),
  },
  viewCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    color: theme['color-primary-2'],
    fontSize: pxToPercentage(42),
    textAlign: 'center',
    ...textStyle.proDisplayBold,
  },
  viewFlag: {
    width: pxToPercentage(130),
    height: pxToPercentage(80),
    marginHorizontal: pxToPercentage(13),
    backgroundColor: theme['color-primary-2'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: pxToPercentage(46),
    height: pxToPercentage(40),
    tintColor: theme['color-primary-0'],
  },
}));
