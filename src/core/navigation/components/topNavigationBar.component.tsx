import React, { useState } from 'react';
import {
  StyleType,
  ThemeType,
  withStyles,
  ThemedComponentProps,
} from '@kitten/theme';
import { ImageProps, View } from 'react-native';
import {
  TopNavigation,
  TopNavigationAction,
  TopNavigationActionProps,
} from '@kitten/ui';
import { textStyle } from '@src/components';
import {
  SafeAreaView,
  NavigationInjectedProps,
} from 'react-navigation';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {
  MessageIconOther,
  QuestionIcon,
  ArrowIosBackFill,
  ExitIcon,
} from '@src/assets/icons';
import { pxToPercentage } from '@src/core/utils/utils';
import { HelpModel } from './helpModel.component';
import { onGetCurrentRouteState } from '../util';
import { KEY_NAVIGATION_BACK } from '../constants';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { onClearSession } from '@src/core/store/reducer/session/actions';
import { routeNameDataSource } from '../options';

export type TopNavigationBarProps = NavigationInjectedProps & ThemedComponentProps;

const TopNavigationBarComponent: React.FunctionComponent<TopNavigationBarProps> = (props) => {
  const { themedStyle } = props;
  const navigationKey: string = 'MenuTopNavigation';
  const dispatch: Dispatch<any> = useDispatch();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { routeName } = onGetCurrentRouteState(props.navigation);

  const onBackButtonPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  const onLogoutButtonPress = (): void => {
    dispatch(onClearSession());
  };

  const onMessagePress = (): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'chat',
    });
  };

  const onHelpPress = () => {
    setIsVisible(prevState => !prevState);
  };

  const renderBackIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    return ArrowIosBackFill({ ...style, ...themedStyle.iconBack });
  };

  const renderQuestionIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    return QuestionIcon({ ...style, ...themedStyle.iconQuestion });
  };

  const renderLogoutIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    return ExitIcon({ ...style, ...themedStyle.iconLogout });
  };

  const renderMessageIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    return MessageIconOther({ ...style, ...themedStyle.iconMessage });
  };

  const renderLeftControls = (): React.ReactElement<TopNavigationActionProps> => {
    if (routeName === 'home') {
      return (
        <TopNavigationAction
          icon={renderLogoutIcon}
          onPress={onLogoutButtonPress}
        />
      );
    }

    return (
      <TopNavigationAction
        icon={renderBackIcon}
        onPress={onBackButtonPress}
      />
    );
  };

  const renderRightControls = (): React.ReactElement<TopNavigationActionProps>[] => {
    if (routeName === 'signInQRCode') {
      return [];
    }

    return ([
      <TopNavigationAction
        icon={renderQuestionIcon}
        onPress={onHelpPress}
      />,
      routeName !== 'chat'
        ? (<TopNavigationAction
          icon={renderMessageIcon}
          onPress={onMessagePress}
        />)
        : <View />,
    ]);
  };

  return (
    <SafeAreaView style={themedStyle.safeArea}>
      <TopNavigation
        alignment='center'
        title={routeNameDataSource[routeName]}
        titleStyle={themedStyle.titleStyle}
        style={themedStyle.header}
        subtitleStyle={textStyle.regular}
        leftControl={renderLeftControls()}
        rightControls={renderRightControls()}
      />
      <HelpModel
        isVisible={isVisible}
        onClosePress={onHelpPress}
      />
    </SafeAreaView>
  );
};

export const TopNavigationBar = withStyles(TopNavigationBarComponent, (theme: ThemeType) => ({
  safeArea: {
    paddingTop: getStatusBarHeight(false),
    backgroundColor: theme['color-primary-2'],
  },
  header: {
    backgroundColor: theme['background-basic-custom-color-3'],
  },
  titleStyle: {
    color: theme['text-control-color'],
    ...textStyle.proTextSemibold,
  },
  iconBack: {
    width: pxToPercentage(25),
    height: pxToPercentage(25),
    tintColor: theme['color-custom-100'],
  },
  iconLogout: {
    width: pxToPercentage(23),
    height: pxToPercentage(23),
    tintColor: theme['color-custom-100'],
  },
  iconQuestion: {
    width: pxToPercentage(25),
    height: pxToPercentage(25),
    tintColor: theme['color-custom-100'],
  },
  iconMessage: {
    width: pxToPercentage(25) * (174 / 162),
    height: pxToPercentage(25),
    tintColor: theme['color-custom-100'],
  },
}));
