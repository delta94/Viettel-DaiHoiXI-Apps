import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import {
  SafeAreaView as SafeAreaViewReactNavigation,
  SafeAreaViewProps,
} from 'react-navigation';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const SafeAreaView: React.FunctionComponent<SafeAreaViewProps> = (props) => {

  const statusBarHeight: number = Platform.select({
    ios: getStatusBarHeight(false),
    android: getStatusBarHeight(false),
  });

  useEffect(() => {
    // @ts-ignore (private API)
    // https://github.com/expo/expo/issues/2940#issuecomment-445937038
    SafeAreaViewReactNavigation.setStatusBarHeight(statusBarHeight);
  }, []);

  return (
    <SafeAreaViewReactNavigation {...props} />
  );
};

