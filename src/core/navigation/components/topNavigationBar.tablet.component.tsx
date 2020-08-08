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
import { BackHeader } from '@src/components/header/backHeader.component';
import { TopNavigationProps } from '@kitten/ui';
import { HelpModel } from './helpModel.component';
import { HomeHeader } from '@src/components/header/homeHeader.component';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { onClearSession } from '@src/core/store/reducer/session/actions';

interface ComponentProps {
  isHome?: boolean;
  isNoHeader?: boolean;
  onBackPress?: () => void;
  onMessagePress?: () => void;
}

export type TopNavigationBarTabletProps = ComponentProps & TopNavigationProps & ThemedComponentProps;

const TopNavigationBarTabletComponent: React.FunctionComponent<TopNavigationBarTabletProps> = (props) => {
  const { themedStyle } = props;
  const dispatch: Dispatch<any> = useDispatch();
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const onBackPress = () => {
    props.onBackPress();
  };

  const onMessagePress = () => {
    props.onMessagePress();
  };

  const onLogoutPress = () => {
    dispatch(onClearSession());
  };

  const onHelpPress = () => {
    setIsVisible(prevState => !prevState);
  };

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
      {!props.isNoHeader &&
        (<View style={themedStyle.viewHeader}>
          {props.isHome &&
            (<HomeHeader
              onLogoutPress={onLogoutPress}
              onMessagePress={onMessagePress}
              onHelpPress={onHelpPress}
            />)}
          {!props.isHome &&
            (<BackHeader
              title={props.title.toUpperCase()}
              onBackPress={onBackPress}
              onMessagePress={onMessagePress}
              onHelpPress={onHelpPress}
            />)}
          <HelpModel
            isVisible={isVisible}
            onClosePress={onHelpPress}
          />
        </View>)}
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
  viewHeader: {
    paddingHorizontal: pxToPercentage(31),
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
    lineHeight: pxToPercentage(55),
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
