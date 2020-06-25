import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Example } from './example.component';

export const ExampleContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'ExampleContainer';

  return (
    <Example />
  );
};

// 16 -> 10.5
// 14 -> 9
// 13 -> 8.5
// 12 -> 7.5
