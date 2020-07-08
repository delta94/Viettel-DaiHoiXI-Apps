import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { FunctionHeader } from './headerFunction.component';

export const HeaderFunctionContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'HeaderFunctionContainer';


  return (
    <FunctionHeader
    />
  );
};
