import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { isTablet } from 'react-native-device-info';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';
import { GalleryTablet } from './gallery.component.tablet';

export const GalleryContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'GalleryContainer';

  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  if (isTablet()) {
    return (
     <GalleryTablet onBackPress={onBackPress}/>
    );
  }
};
