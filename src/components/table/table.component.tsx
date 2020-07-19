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

interface ComponentProps extends ViewProps {
  example?: any;
}

export type TableProps = ThemedComponentProps & ComponentProps;

const TableComponent: React.FunctionComponent<TableProps> = (props) => {
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

export const Table = withStyles(TableComponent, (theme: ThemeType) => ({
  container: {
    width: '100%',
  },
}));
