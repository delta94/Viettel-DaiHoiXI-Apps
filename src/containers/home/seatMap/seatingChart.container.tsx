import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';
import { SeatMapTablet } from './seatingChart.component.tablet';

export const SeatingChartContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'seatingChatContainer';

  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  return (
    <SeatMapTablet
      onBackPress={onBackPress}
    />
  );
};
