import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Programmation } from './programme.component';
import { programmationDataFake } from '@src/core/data/notification';
import { programmationDataFake2 } from '@src/core/data/notification';

export const ProgrammeContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'ProgrammeContainer';
// if have no data just pass empty array
  return (
    <Programmation
      programmationsMorning={programmationDataFake}
      programmationsAfterNoons = {programmationDataFake2} />
  );
};
