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
    backgroundColor: theme['color-primary-default'],
  },
  img: {
    marginTop: pxToPercentage(8.5),
    height: pxToPercentage(107.5),
    width: pxToPercentage(107.5) * (153 / 103),
  },
}));
