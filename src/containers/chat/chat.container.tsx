import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { ChatTablet } from './chat.component.tablet';
import { chatListDataFake } from '@src/core/data/chat';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';
import { isTablet } from 'react-native-device-info';
import { Chat } from './chat.component';

export const ChatContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'chatContainer';

  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };
  const onPressChatDetailPress = (): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'chatDetail',
    });
  };

  if (isTablet()) {
    return (
      <ChatTablet
        chatLists={chatListDataFake}
        onBackPress={onBackPress}
      />
    );
  }

  return (
    <Chat
      chatLists={chatListDataFake}
      onPressChatDetailPress={onPressChatDetailPress}
    />
  );
};
