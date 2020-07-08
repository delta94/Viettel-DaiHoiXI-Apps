import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Function } from './function.component';
import { functionDataFake } from '@src/core/data/function';
import { AlternativeFunctionEnum } from '@src/core/utils/constants';
import { isEmpty } from '@src/core/utils/utils';

export const FunctionContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'FunctionContainer';

  const onAlternativeFunctionPress = (type: number): void => {
    let routeName: string = '';

    switch (type) {
      case AlternativeFunctionEnum.Program: {
        routeName = 'programme';
        break;
      }
      case AlternativeFunctionEnum.Notification: {
        routeName = 'meetingNotification';

        break;
      }
      case AlternativeFunctionEnum.PressRelease: {
        routeName = 'pressRelease';

        break;
      }
    }

    if (!isEmpty(routeName)) {
      props.navigation.navigate({
        key: navigationKey,
        routeName,
      });
    }
  };

  const onPressBackIcon = (): void => {
    props.navigation.goBack();
  };

  return (
    <Function
      functions={functionDataFake}
      onAlternativeFunctionPress={onAlternativeFunctionPress}
      onPressBackIcon ={onPressBackIcon}
    />
  );
};
