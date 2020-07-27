import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';
import { SeatingChartTablet } from './seatingChart.component.tablet';

export const SeatingChartContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'seatingChatContainer';

  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  // const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
  const source = require('@src/assets/file/seatingChart.pdf');

  return (
    <SeatingChartTablet
      onBackPress={onBackPress}
      source={source}
    />
  );
};
