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
import { pxToPercentage, isEmpty } from '@src/core/utils/utils';

interface ComponentProps extends ViewProps {
  example?: any;
  minHeight?: number;
}

export type TrProps = ThemedComponentProps & ComponentProps;

const TrComponent: React.FunctionComponent<TrProps> = (props) => {
  const { themedStyle, style, ...restProps } = props;

  return (
    <View
      {...restProps}
      style={[
        themedStyle.container,
        style,
        !isEmpty(props.minHeight)
        && { minHeight: pxToPercentage(props.minHeight) },
      ]}>
      {props.children}
    </View>
  );
};

export const Tr = withStyles(TrComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderLeftWidth: pxToPercentage(2),
    borderBottomWidth: pxToPercentage(2),
    borderColor: theme['color-primary-18'],
  },
}));
