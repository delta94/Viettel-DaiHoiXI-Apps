import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Programmation } from './programme.component';
import { programmationDataFake } from '@src/core/data/notification';

export const ProgrammeContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'ProgrammeContainer';

  return (
    <Programmation
      programmations={programmationDataFake}
    />
  );
};
