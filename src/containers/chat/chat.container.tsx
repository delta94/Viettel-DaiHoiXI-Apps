import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Chat } from './chat.component.tablet';
import { chatListDataFake } from '@src/core/data/chat';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';

export const ChatContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'chatContainer';

  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  return (
    <Chat
      chatLists={chatListDataFake}
      onBackPress={onBackPress}
    />
  );
};
