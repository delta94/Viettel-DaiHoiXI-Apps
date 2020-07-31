import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';
import { GalleryVideoTablet } from './galleryVideo.component.tablet';

export const GalleryVideoContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'GalleryVideoContainer';

  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  return (
    <GalleryVideoTablet
      onBackPress={onBackPress}
    />
  );
};
