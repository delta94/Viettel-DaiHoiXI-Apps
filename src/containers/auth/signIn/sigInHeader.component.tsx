import React from 'react';
import {
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
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
import { isTablet } from 'react-native-device-info';

export type SigInHeaderProps = TopNavigationProps;

const SigInHeaderComponent: React.FunctionComponent<SigInHeaderProps> = (props) => {
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

export const SigInHeader = withStyles(SigInHeaderComponent, (theme: ThemeType) => ({
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
    fontSize: isTablet() ? pxToPercentage(16) : pxToPercentage(10), // font size 24 SFProDisplay-Regular
    textAlign: 'center',
  },
  viewFlag: {
    width: isTablet() ? pxToPercentage(60) : pxToPercentage(40), // width 96
    height: isTablet() ? pxToPercentage(40) : pxToPercentage(35), // height 64
    backgroundColor: theme['color-primary-2'],
    marginHorizontal: isTablet() ? pxToPercentage(19) : pxToPercentage(10),
    marginLeft: pxToPercentage(0),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: pxToPercentage(6),
  },
  viewSession: {
    flexDirection: 'row',
    marginHorizontal: isTablet() ? pxToPercentage(38) : pxToPercentage(10),
  },
  icon: {
    width: isTablet() ? pxToPercentage(26) : pxToPercentage(20),
    height: isTablet() ? pxToPercentage(22) : pxToPercentage(20),
    tintColor: theme['color-primary-1'],
    resizeMode: 'contain',
  },
}));
