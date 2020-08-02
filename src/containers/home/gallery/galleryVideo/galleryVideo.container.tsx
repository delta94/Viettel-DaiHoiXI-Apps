import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';
import { GalleryVideoTablet } from './galleryVideo.component.tablet';
import { galleryDataFake } from '@src/core/data/videos';
import { isEmpty } from '@src/core/utils/utils';

export const GalleryVideoContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'GalleryVideoContainer';
  const [selectedVideo, setSelectedVideo] = React.useState<number>(galleryDataFake[0].videos[0].id);
  const [url, setUrl] = React.useState<string>(galleryDataFake[0].videos[0].url);

  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  const onVideosItemPress = (id: number, urlVideo: string) => {
    setSelectedVideo(id);
    setUrl(urlVideo);
  };

  return (
    <GalleryVideoTablet
      onBackPress={onBackPress}
      gallery={galleryDataFake}
      onVideosItemPress={onVideosItemPress}
      videoSelected={selectedVideo}
      url={url}
    />
  );
};
