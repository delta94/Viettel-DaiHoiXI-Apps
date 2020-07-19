import React from 'react';
import {
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';

interface ComponentProps extends ViewProps {
  example?: any;
}

export type TheadProps = ThemedComponentProps & ComponentProps;

const TheadComponent: React.FunctionComponent<TheadProps> = (props) => {
  const { themedStyle, style, ...restProps } = props;

  return (
    <View
      {...restProps}
      style={[
        themedStyle.container,
        style,
      ]}>
      {props.children}
    </View>
  );
};

export const Thead = withStyles(TheadComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: pxToPercentage(2),
    borderRightWidth: 0,
    borderColor: theme['color-primary-18'],
    backgroundColor: theme['color-primary-19'],
  },
}));
