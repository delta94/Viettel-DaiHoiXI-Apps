import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Example } from './example.component';

export const ExampleContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'ExampleContainer';

  return (
    <Example />
  );
};
