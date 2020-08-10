import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { SeatingChartTablet } from './seatingChart.component.tablet';
import { isTablet } from 'react-native-device-info';
import { SeatingChart } from './seatingChart.component';

export const SeatingChartContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'SeatingChartContainer';

  // const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
  const source = require('@src/assets/file/seatingChart.pdf');

  if (isTablet()) {
    return (
      <SeatingChartTablet
        source={source}
      />
    );
  }

  return (
    <SeatingChart
      source={source}
    />
  );
};
