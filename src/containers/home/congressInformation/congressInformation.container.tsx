import React, { useState } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { CongressInformation } from './congressInformation.component';

export const CongressInformationContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'CongressInformationContainer';
  const [tabSelected, setTabSelected] = useState(1);
  const [dateSelected, setDateSelected] = useState(1);

  const onTabSelected = (value: number) => {
    setTabSelected(value);
  };
  const onDateSelected = (value: number) => {
    setDateSelected(value);
  };

  return (
    <CongressInformation
      tabSelected={tabSelected}
      onTabSelected={onTabSelected}
      dateSelected={dateSelected}
      onDateSelected={onDateSelected}
    />
  );
};
