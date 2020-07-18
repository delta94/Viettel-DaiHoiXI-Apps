import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { PressReleaseDetail } from './pressReleaseDetail.component';
import { PressRelease as PressReleaseModel } from '@src/core/models/pressRelease/pressRelease.model';

export const PressReleaseDetailContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'PressReleaseDetailContainer';

  return (
    <PressReleaseDetail
      pressRelease={props.navigation.getParam('pressRelease') || new PressReleaseModel()}
    />
  );
};
