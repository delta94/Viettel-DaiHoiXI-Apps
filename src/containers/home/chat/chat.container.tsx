import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Chat } from './chat.component';
import { chatListDataFake } from '@src/core/data/chat';
import { ChatDetail as ChatDetailModel } from '@src/core/models/chat/chatDetail';

export const ChatContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'chatContainer';

  const onPressChatDetailPress = (): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'chatDetail',
    });
  };

  return (
    <Chat
      chatLists={chatListDataFake}
      onPressChatDetailPress={onPressChatDetailPress}
    />
  );
};
