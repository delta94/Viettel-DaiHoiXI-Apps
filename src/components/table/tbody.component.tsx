import React from 'react';
import {
  ViewProps,
  ScrollView,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';

interface ComponentProps extends ViewProps {
  example?: any;
}

export type TbodyProps = ThemedComponentProps & ComponentProps;

const TbodyComponent: React.FunctionComponent<TbodyProps> = (props) => {
  const { themedStyle, style, ...restProps } = props;

  return (
    <ScrollView
      {...restProps}
      style={[
        themedStyle.container,
        style,
      ]}>
      {props.children}
    </ScrollView>
  );
};

export const Tbody = withStyles(TbodyComponent, (theme: ThemeType) => ({
  container: {
    width: '100%',
  },
}));
