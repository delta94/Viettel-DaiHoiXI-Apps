import React from 'react';
import {
  StyleType,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { ImageProps } from 'react-native';
import {
  TopNavigation,
  TopNavigationAction,
  TopNavigationActionProps,
  TopNavigationProps,
} from '@kitten/ui';
import { textStyle } from '@src/components';
import { SafeAreaView } from './safeAreaView.component';
import { pxToPercentage } from '@src/core/utils/utils';

export interface ComponentProps {
  backIcon?: BackIconProp;
  onBackPress?: () => void;
}

export type TopNavigationBarProps = TopNavigationProps & ComponentProps;

type BackIconProp = (style: StyleType) => React.ReactElement<ImageProps>;
type BackButtonElement = React.ReactElement<TopNavigationActionProps>;

const TopNavigationBarComponent: React.FunctionComponent<TopNavigationBarProps> = (props) => {
  const onBackButtonPress = (): void => {
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
        subtitleStyle={textStyle.regular}
        leftControl={leftControlElement}
        style={themedStyle.topNavigation}
      />
    </SafeAreaView>
  );
};

export const TopNavigationBar = withStyles(TopNavigationBarComponent, (theme: ThemeType) => ({
  safeArea: {
    backgroundColor: theme['color-primary-default'],
    // backgroundColor: theme['background-basic-color-1'],
  },
  topNavigation: {
    backgroundColor: theme['color-primary-default'],
    // backgroundColor: theme['background-basic-color-1'],
    // borderBottomWidth: pxToPercentage(1),
    // borderColor: theme['border-basic-color-4'],
  },
  titleStyle: {
    color: 'white',
    ...textStyle.bold,
  },
}));
