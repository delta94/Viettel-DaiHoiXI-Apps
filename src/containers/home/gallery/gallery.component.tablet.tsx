import React from 'react';
import {
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { BackHeader } from '@src/components/header/backHeader.component';
import { PhotoGalleryTablet } from './tablet/photoGallery.component.tablet';


interface ComponentProps {
  onBackPress: () => void;
}

export type GalleryTabletProps = ComponentProps & ThemedComponentProps;


const GalleryTabletComponent: React.FunctionComponent<GalleryTabletProps> = (props) => {

  const onMessagePress = (): void => {

  };

  const onBackPress = (): void => {
    props.onBackPress();
  };

  const onHelpPress = (): void => {

  };

  const { themedStyle } = props;

  return (
    <View style={themedStyle.container}>
      <BackHeader
        title={'Triển Lãm'}
        onBackPress={onBackPress}
        onMessagePress={onMessagePress}
        onHelpPress={onHelpPress}
      />
      <View style={themedStyle.viewCard}>
        <PhotoGalleryTablet />
      </View>
    </View>
  );
};

export const GalleryTablet = withStyles(GalleryTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: pxToPercentage(31),
    paddingBottom: pxToPercentage(31),
    backgroundColor: theme['color-primary-2'],
  },
  viewCard: {
    flex: 1,
    borderRadius: pxToPercentage(40),
    padding: pxToPercentage(20),
    paddingTop: pxToPercentage(34),
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
  },
}));
