import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { ChatDetailDataFake } from '@src/core/data/chat';
import { ChatDetail } from './chatDetail.component';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';

export const ChatDetailContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'ChatDetailContainer';

  return (
    <ChatDetail
      chatDetails={ChatDetailDataFake}
    />
  );
};
