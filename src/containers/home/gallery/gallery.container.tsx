import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { isTablet } from 'react-native-device-info';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';
import { GalleryTablet } from './gallery.component.tablet';
import { Gallery } from './gallery.component';
import { programDataFake } from '@src/core/data/program';
import { imgDataFake } from '@src/core/data/photoGallery';
import { galleryVideoDataFake } from '@src/core/data/videos';

export const GalleryContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'GalleryContainer';
  const [selectedVideo, setSelectedVideo] = React.useState<number>(galleryVideoDataFake[0].videos[0].id);
  const [url, setUrl] = React.useState<string>(galleryVideoDataFake[0].videos[0].url);

  const onVideosItemPress = (id: number, urlVideo: string) => {
    setSelectedVideo(id);
    setUrl(urlVideo);
  };


  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  if (isTablet()) {
    return (
      <GalleryTablet
        onBackPress={onBackPress}
        imgDataFake={imgDataFake}
        gallery={galleryVideoDataFake}
        onVideosItemPress={onVideosItemPress}
        videoSelected={selectedVideo}
        url={url} />
    );
  }

  return (
    <Gallery
      imgDataFake={imgDataFake}
      gallery={galleryVideoDataFake}
      onVideosItemPress={onVideosItemPress}
      videoSelected={selectedVideo}
      url={url} />
  );
};
