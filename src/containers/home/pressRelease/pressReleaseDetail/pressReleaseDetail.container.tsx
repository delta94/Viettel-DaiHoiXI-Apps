import React, {
  useState,
  useEffect,
} from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { PressReleaseDetail } from './pressReleaseDetail.component';
import { PressRelease as PressReleaseModel } from '@src/core/models/pressRelease/pressRelease.model';

export const PressReleaseDetailContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'PressReleaseDetailContainer';
  const [pressRelease, setPressRelease] = useState<PressReleaseModel>(new PressReleaseModel());

  useEffect(() => {
    const pressReleaseParam: PressReleaseModel = props.navigation.getParam('pressRelease');

    if (pressReleaseParam) {
      setPressRelease(pressReleaseParam);
    }
  }, []);

  return (
    <PressReleaseDetail pressRelease={pressRelease} />
  );
};
