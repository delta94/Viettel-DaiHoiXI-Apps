import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { PressRelease } from './pressRelease.component';
import { pressReleaseDataFake } from '@src/core/data/notification';
import { PressRelease as PressReleaseModel } from '@src/core/models/pressRelease/pressRelease.model';

export const PressReleaseContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'PressReleaseContainer';

  const onPressReleaseItemPress = (pressRelease: PressReleaseModel): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'pressReleaseDetail',
      params: {
        pressRelease,
      },
    });
  };

  return (
    <PressRelease
      pressReleases={pressReleaseDataFake}
      onPressReleaseItemPress={onPressReleaseItemPress}
    />
  );
};
