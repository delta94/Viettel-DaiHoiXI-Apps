import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Function } from './function.component';
import { functionDataFake } from '@src/core/data/function';

export const FunctionContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'FunctionContainer';

  const onProgramPress = (): void => {

  };

  const onNotificationPress = (): void => {

  };

  const onPressReleasePress = (): void => {

  };

  return (
    <Function
      functions={functionDataFake}
      onProgramPress={onProgramPress}
      onNotificationPress={onNotificationPress}
      onPressReleasePress={onPressReleasePress}
    />
  );
};
