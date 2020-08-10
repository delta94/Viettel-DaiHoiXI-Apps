import React from 'react';
import {
  TouchableOpacity,
  FlatList,
  Image,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { TabSelector } from '../tabSelector.component';
import { PhotoGallery as PhotoGalleryModel } from '@src/core/models/photoGallery/photoGallery.model';
import { PhotoGalleryModal } from './photoGalleryModal.component';

interface ComponentProps {
  imgDataFake: PhotoGalleryModel[];
}

export type PhotoGalleryProps = ComponentProps & ThemedComponentProps;

const PhotoGalleryComponent: React.FunctionComponent<PhotoGalleryProps> = (props) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [imageIndex, setImageIndex] = React.useState(0);
  const { themedStyle } = props;

  const onPhotoGalleryItemPress = (index: number): void => {
    setIsVisible(true);
    setImageIndex(index);
  };

  const onClosePress = () => {
    setIsVisible(false);
  };

  return (
    <View style={themedStyle.container}>
      <TabSelector />
      <FlatList
        data={props.imgDataFake}
        extraData={props.imgDataFake}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={themedStyle.scrollViewContainer}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.75}
              onPress={() => onPhotoGalleryItemPress(index)}
              style={themedStyle.btnItem}>
              <Image
                source={item.uri.imageSource}
                style={themedStyle.img}
              />
            </TouchableOpacity>
          );
        }}
      />
      <PhotoGalleryModal
        imageDataFake={props.imgDataFake}
        isVisible={isVisible}
        onClosePress={onClosePress}
        imageIndex={imageIndex}
      />
    </View>
  );
};

export const PhotoGallery = withStyles(PhotoGalleryComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-custom-100'],
  },
  scrollViewContainer: {
    padding: pxToPercentage(8),
    paddingTop: 0,
  },
  btnItem: {
    padding: pxToPercentage(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme['color-custom-100'],
  },
  img: {
    height: pxToPercentage(290),
    width: pxToPercentage(340),
  },
}));
