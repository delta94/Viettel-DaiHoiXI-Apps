import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { isTablet } from 'react-native-device-info';
import { GalleryTablet } from './gallery.component.tablet';
import { Gallery } from './gallery.component';
import { imgDataFake } from '@src/core/data/photoGallery';
import { galleryVideoDataFake } from '@src/core/data/videos';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';

export const GalleryContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'GalleryContainer';
  const [selectedVideo, setSelectedVideo] = React.useState<number>(galleryVideoDataFake[0].videos[0].id);
  const [url, setUrl] = React.useState<string>(galleryVideoDataFake[0].videos[0].url);

  const onVideosItemPress = (id: number, urlVideo: string) => {
    setSelectedVideo(id);
    setUrl(urlVideo);
  };

  const onMessagePress = (): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'chat',
    });
  };

  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  if (isTablet()) {
    return (
      <GalleryTablet
        imgDataFake={imgDataFake}
        gallery={galleryVideoDataFake}
        onVideosItemPress={onVideosItemPress}
        videoSelected={selectedVideo}
        url={url}
        onBackPress={onBackPress}
        onMessagePress={onMessagePress}
      />
    );
  }

  return (
    <Gallery
      imgDataFake={imgDataFake}
      gallery={galleryVideoDataFake}
      onVideosItemPress={onVideosItemPress}
      videoSelected={selectedVideo}
      url={url}
    />
  );
};
