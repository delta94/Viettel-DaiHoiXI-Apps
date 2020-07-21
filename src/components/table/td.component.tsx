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
import {
  pxToPercentage,
  isEmpty,
} from '@src/core/utils/utils';

interface ComponentProps extends ViewProps {
  alignItems?: 'flex-start' | 'center' | 'flex-end';
  width?: number;
  childrenFlex?: boolean;
}

export type TdProps = ThemedComponentProps & ComponentProps;

const TdComponent: React.FunctionComponent<TdProps> = (props) => {
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
      <View style={[themedStyle.viewChildren,
      props.childrenFlex && { flex: 1 }]}>
        {props.children}
      </View>
    </View>
  );
};

export const Td = withStyles(TdComponent, (theme: ThemeType) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: pxToPercentage(20),
    borderRightWidth: pxToPercentage(2),
    borderColor: theme['color-primary-18'],
  },
  viewChildren: {
    marginVertical: pxToPercentage(22.5),
  },
}));
