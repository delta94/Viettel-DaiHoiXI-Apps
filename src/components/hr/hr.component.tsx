import React from 'react';
import {
  View,
  ViewProps,
} from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { isTablet } from 'react-native-device-info';

export type HrProps = ViewProps & ThemedComponentProps;

const HrComponent: React.FunctionComponent<HrProps> = (props) => {
  const { themedStyle, style } = props;

  return (
    <View
      style={[
        themedStyle.container,
        style,
      ]}
    />
  );
};

export const Hr = withStyles(HrComponent, (theme: ThemeType) => ({
  container: {
    height: isTablet() ? pxToPercentage(2) : pxToPercentage(1.001),
    backgroundColor: theme['color-basic-400'],
  },
}));
