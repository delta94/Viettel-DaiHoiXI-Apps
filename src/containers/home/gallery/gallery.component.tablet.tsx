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
import { PhotoGalleryTablet } from './tabs/tablet/photoGallery.component.tablet';
import { PhotoGallery } from '@src/core/models/photoGallery/photoGallery.model';


interface ComponentProps {
  onBackPress: () => void;
  imgDataFake: PhotoGallery[];
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
        <PhotoGalleryTablet imgDataFake={props.imgDataFake}/>
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
