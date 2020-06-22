import React from 'react';
import {
  StatusBar,
  ViewProps,
  StatusBarStyle,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';

interface ComponentProps {
  barStyle: StatusBarStyle;
}

export type DynamicStatusBarProps = ThemedComponentProps & ViewProps & ComponentProps;

const DynamicStatusBarComponent: React.FunctionComponent<DynamicStatusBarProps> = (props) => {
  const getStatusBarContent = (): StatusBarStyle => {
    if (props.barStyle === 'light-content') {
      return 'light-content';
    } else {
      return 'dark-content';
    }
  };

  const { themedStyle } = props;
  const androidStatusBarBgColor: string = themedStyle.container.backgroundColor;
  const barStyle: StatusBarStyle = getStatusBarContent();

  return (
    <StatusBar
      translucent
      backgroundColor={androidStatusBarBgColor}
      barStyle={barStyle}
    />
  );
};

export const DynamicStatusBar = withStyles(DynamicStatusBarComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: 'transparent',
  },
}));
