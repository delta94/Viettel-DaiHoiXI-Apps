import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Program } from './program.component';
import { programDataFake } from '@src/core/data/program';

export const ProgrammeContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'ProgrammeContainer';

  return (
    <Program
      programs={programDataFake}
    />
  );
};
