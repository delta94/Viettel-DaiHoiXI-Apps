import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { SpeechList } from './speechList.component';
import { speechDataFake } from '@src/core/data/speech';

export const SpeechListContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'SpeechListContainer';

  return (
    <SpeechList
      speechs={speechDataFake}
    />
  );
};
