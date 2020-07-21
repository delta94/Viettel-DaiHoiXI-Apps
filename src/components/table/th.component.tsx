import React from 'react';
import {
  View,
  ViewProps,
  Text,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  pxToPercentage,
  isEmpty,
} from '@src/core/utils/utils';
import { textStyle } from '../textStyle';

interface ComponentProps extends ViewProps {
  alignItems?: 'flex-start' | 'center' | 'flex-end';
  width?: number;
}

export type ThProps = ThemedComponentProps & ComponentProps;

const ThComponent: React.FunctionComponent<ThProps> = (props) => {
  const { themedStyle, style, ...restProps } = props;

  return (
    <View
      {...restProps}
      style={[
        themedStyle.container,
        style,
        { alignItems: props.alignItems || 'flex-start' },
        !isEmpty(props.width)
          ? { width: pxToPercentage(props.width) }
          : { flex: 1 },
      ]}>
      <Text style={themedStyle.txtThead}>
        {props.children}
      </Text>
    </View>
  );
};

export const Th = withStyles(ThComponent, (theme: ThemeType) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRightWidth: pxToPercentage(2),
    borderColor: theme['color-primary-18'],
  },
  txtThead: {
    marginVertical: pxToPercentage(22.5),
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayBold,
  },
}));
