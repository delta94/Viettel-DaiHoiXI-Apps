import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { View } from 'react-native';

interface ComponentProps {
  example?: any;
}

export type SplashProps = ComponentProps & ThemedComponentProps;

const SplashComponent: React.FunctionComponent<SplashProps> = (props) => {
  const { themedStyle } = props;

  return (
    <View style={themedStyle.container}>

    </View>
  );
};

export const Splash = withStyles(SplashComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
}));
