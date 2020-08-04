import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { chatListDataFake, ChatDetailDataFake } from '@src/core/data/chat';
import { ChatDetail as ChatDetailModel } from '@src/core/models/chat/chatDetail';
import { ChatDetail } from './chatDetail.component';

export const ChatDetailContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'ChatDetailContainer';

  return (
    <ChatDetail
      chatDetails={ChatDetailDataFake}
    />
  );
};
