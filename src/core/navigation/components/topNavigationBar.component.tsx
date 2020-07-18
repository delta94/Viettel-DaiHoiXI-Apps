import React from 'react';
import {
  StyleType,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  ImageProps,
} from 'react-native';
import {
  TopNavigation,
  TopNavigationAction,
  TopNavigationActionProps,
  TopNavigationProps,
} from '@kitten/ui';
import { textStyle } from '@src/components';
import { SafeAreaView } from 'react-navigation';
import { pxToPercentage } from '@src/core/utils/utils';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export interface ComponentProps {
  backIcon?: BackIconProp;
  onBackPress?: () => void;
}

export type TopNavigationBarProps = TopNavigationProps & ComponentProps;

type BackIconProp = (style: StyleType) => React.ReactElement<ImageProps>;
type BackButtonElement = React.ReactElement<TopNavigationActionProps>;

const TopNavigationBarComponent: React.FunctionComponent<TopNavigationBarProps> = (props) => {
  const onBackButtonPress = () => {
    if (props.onBackPress) {
      props.onBackPress();
    }
  };

  const renderBackButton = (source: BackIconProp): BackButtonElement => {
    return (
      <TopNavigationAction
        icon={source}
        onPress={onBackButtonPress}
      />
    );
  };

  const { themedStyle, title, backIcon } = props;

  const leftControlElement: BackButtonElement | null = backIcon ? renderBackButton(backIcon) : null;

  return (
    <SafeAreaView style={themedStyle.safeArea}>
      <TopNavigation
        alignment='center'
        title={title}
        titleStyle={themedStyle.titleStyle}
        style={themedStyle.header}
        subtitleStyle={textStyle.regular}
        leftControl={leftControlElement}
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
}));
