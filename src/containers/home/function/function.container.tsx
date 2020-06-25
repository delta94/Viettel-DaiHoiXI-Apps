import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Function } from './function.component';
import { functionDataFake } from '@src/core/data/function';
import { AlternativeFunctionEnum } from '@src/core/utils/constants';

export const FunctionContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'FunctionContainer';

  const onAlternativeFunctionPress = (type: number): void => {
    switch (type) {
      case AlternativeFunctionEnum.Program: {

        break;
      }
      case AlternativeFunctionEnum.Notification: {

        break;
      }
      case AlternativeFunctionEnum.PressRelease: {

        break;
      }
    }
  };

  return (
    <Function
      functions={functionDataFake}
      onAlternativeFunctionPress={onAlternativeFunctionPress}
    />
  );
};
