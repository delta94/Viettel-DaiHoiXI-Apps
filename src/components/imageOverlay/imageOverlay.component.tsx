import React from 'react';
import {
  ImageBackground,
  ImageBackgroundProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';

interface OverlayImageStyle extends ViewStyle {
  overlayColor: string;
}

interface ComponentProps {
  style?: StyleProp<OverlayImageStyle>;
  children?: React.ReactNode;
}

export type ImageOverlayProps = ThemedComponentProps & ImageBackgroundProps & ComponentProps;

const ImageOverlayComponent: React.FunctionComponent<ImageOverlayProps> = (props) => {
  const getOverlayColor = (source: string): string => {
    return source || props.themedStyle.overlay.backgroundColor;
  };

  const { style, themedStyle, children, ...restProps } = props;
  // @ts-ignore: overlayColor (additional style property)
  const { overlayColor: derivedOverlayColor, ...containerStyle } = StyleSheet.flatten(style);

  const overlayColor: string = getOverlayColor(derivedOverlayColor);

  return (
    <ImageBackground
      style={containerStyle}
      {...restProps}>
      <View
        style={[
          themedStyle.viewOverlay,
          {
            backgroundColor: overlayColor,
          },
        ]}
      />
      {children}
    </ImageBackground>
  );
};

export const ImageOverlay = withStyles(ImageOverlayComponent, (theme: ThemeType) => ({
  viewOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    ...StyleSheet.absoluteFillObject,
  },
}));
