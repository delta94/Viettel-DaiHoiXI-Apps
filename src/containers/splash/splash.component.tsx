import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { ImageBackground } from 'react-native';
import { ImageSource } from '@src/assets/images';

interface ComponentProps {
  backgroundImage: ImageSource;
}

export type SplashProps = ComponentProps & ThemedComponentProps;

const SplashComponent: React.FunctionComponent<SplashProps> = (props) => {
  const { themedStyle } = props;

  return (
    <ImageBackground
      source={props.backgroundImage.imageSource}
      style={themedStyle.container}
    />
  );
};

export const Splash = withStyles(SplashComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
}));
