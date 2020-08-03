import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';
import { GalleryVideoTablet } from './tablet/galleryVideo.component.tablet';
import { galleryVideoDataFake } from '@src/core/data/videos';
import { isTablet } from 'react-native-device-info';
import { GalleryVideo } from './galleryVideo.component';

export const GalleryVideoContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'GalleryVideoContainer';
  const [selectedVideo, setSelectedVideo] = React.useState<number>(galleryVideoDataFake[0].videos[0].id);
  const [url, setUrl] = React.useState<string>(galleryVideoDataFake[0].videos[0].url);

  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  const onVideosItemPress = (id: number, urlVideo: string) => {
    setSelectedVideo(id);
    setUrl(urlVideo);
  };

  if (isTablet()) {
    return (
      <GalleryVideoTablet
        onBackPress={onBackPress}
        gallery={galleryVideoDataFake}
        onVideosItemPress={onVideosItemPress}
        videoSelected={selectedVideo}
        url={url}
      />
    );
  }

  return (
    <GalleryVideo
      gallery={galleryVideoDataFake}
      onVideosItemPress={onVideosItemPress}
      videoSelected={selectedVideo}
      url={url}
    />
  );
};
