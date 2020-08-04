import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { chatListDataFake, ChatDetailDataFake } from '@src/core/data/chat';
import { ChatDetail as ChatDetailModel } from '@src/core/models/chat/chatDetail';
import { ChatDetail } from './chatDetail.component';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';

export const ChatDetailContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'ChatDetailContainer';

  const onPressBack = () => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  return (
    <ChatDetail
      chatDetails={ChatDetailDataFake}
      onPressBack={onPressBack}
    />
  );
};
