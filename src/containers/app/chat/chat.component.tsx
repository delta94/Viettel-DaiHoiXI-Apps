import React from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { ChatList } from '@src/core/models/chat/chat.model';
import { ChatItem } from './chatItem.component';
import { viewStyle } from '@src/components/viewStyle';

interface ComponentProps {
  chatLists: ChatList[];
  onPressChatDetailPress: () => void;
}

export type ChatProps = ThemedComponentProps & ComponentProps;

const ChatComponent: React.FunctionComponent<ChatProps> = (props) => {
  const { themedStyle } = props;

  const onPressChatDetailPress = (): void => {
    props.onPressChatDetailPress();
  };

  const renderChatListItem = ({ item, index }) => (
    <ChatItem
      chatList={item}
      onPressChatDetailPress={onPressChatDetailPress}
      index={index}
    />
  );

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewChatList}>
        <FlatList
          data={props.chatLists}
          extraData={props.chatLists}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderChatListItem}
        />
      </View>
    </View>
  );
};

export const Chat = withStyles(ChatComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-primary-20'],
    padding: pxToPercentage(8),
    paddingBottom: pxToPercentage(20),
  },
  viewChatList: {
    flex: 1,
    backgroundColor: theme['color-custom-100'],
    borderRadius: pxToPercentage(10),
    ...viewStyle.shadow2,
  },
}));
