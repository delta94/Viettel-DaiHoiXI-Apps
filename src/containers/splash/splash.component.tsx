import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  View,
  Image,
} from 'react-native';
import { imageNationalEmblem } from '@src/assets/images';
import { pxToPercentage } from '@src/core/utils/utils';
import { isTablet } from 'react-native-device-info';

interface ComponentProps {
  example?: any;
}

export type SplashProps = ComponentProps & ThemedComponentProps;

const SplashComponent: React.FunctionComponent<SplashProps> = (props) => {
  const { themedStyle } = props;

  return (
    <View style={themedStyle.container}>
      <Image
        source={imageNationalEmblem.imageSource}
        style={themedStyle.img}
      />
    </View>
  );
};

export const Splash = withStyles(SplashComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme['color-primary-2'],
  },
  img: {
    height: pxToPercentage(isTablet() ? 215 : 107.5),
    width: pxToPercentage(isTablet() ? 215 : 107.5) * (153 / 103),
  },
}));
