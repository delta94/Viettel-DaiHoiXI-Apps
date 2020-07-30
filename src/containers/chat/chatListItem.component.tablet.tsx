import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { ChatList } from '@src/core/models/chat/chat.model';
import { PersonIcon } from '@src/assets/icons';
import { textStyle } from '@src/components';

interface ComponentProps {
  chatList: ChatList;
  isRead?: boolean;
  index: number;
  onChatListItemPress: (index: number) => void;
}

export type ChatListItemProps = ThemedComponentProps & ComponentProps;

const ChatListItemComponent: React.FunctionComponent<ChatListItemProps> = (props) => {
  const { themedStyle } = props;

  const onChatListItemPress = (index: number): void => {
    return props.onChatListItemPress(index);
  };

  return (
    <TouchableOpacity
      style={[
        themedStyle.container,
        props.isRead && themedStyle.read,
      ]}
      onPress={() => { onChatListItemPress(props.index); }}
      activeOpacity={0.75}>
      <View style={themedStyle.viewSection}>
        <View style={themedStyle.viewIcon}>
          {PersonIcon(themedStyle.iconPerson)}
        </View>
        <View style={themedStyle.viewContent}>
          <Text style={themedStyle.txtName}>
            {props.chatList.name}
          </Text>
          <View style={themedStyle.viewLastMessage}>
            <Text
              numberOfLines={1}
              style={themedStyle.txtLastMessage}>
              {props.chatList.lastMessage}
            </Text>
            {props.chatList.notify > 0 &&
              <View style={themedStyle.viewBadge} >
                <Text style={themedStyle.txtBadge}>
                  {props.chatList.notify}
                </Text>
              </View>}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const ChatListItem = withStyles(ChatListItemComponent, (theme: ThemeType) => ({
  container: {
    height: pxToPercentage(164),
    justifyContent: 'center',
  },
  viewSection: {
    marginHorizontail: pxToPercentage(28),
    flexDirection: 'row',
  },
  iconPerson: {
    width: pxToPercentage(63.34),
    height: pxToPercentage(62),
    tintColor: theme['color-custom-100'],
  },
  viewIcon: {
    height: pxToPercentage(100),
    width: pxToPercentage(100),
    backgroundColor: theme['color-primary-2'],
    borderRadius: pxToPercentage(28),
    marginLeft: pxToPercentage(28),
    justifyContent: 'center',
    alignItems: 'center',
  },
  read: {
    backgroundColor: theme['color-primary-0'],
  },
  viewContent: {
    marginLeft: pxToPercentage(24),
    flex: 1,
    marginRight: pxToPercentage(28),
  },
  txtName: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
  viewLastMessage: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: pxToPercentage(14),
  },
  txtLastMessage: {
    flex: 1,
    fontSize: pxToPercentage(34),
    marginRight: pxToPercentage(5),
    ...textStyle.proDisplayRegular,
  },
  viewBadge: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    height: pxToPercentage(48),
    width: pxToPercentage(48),
    backgroundColor: theme['color-primary-2'],
    borderRadius: pxToPercentage(24),
  },
  txtBadge: {
    fontSize: pxToPercentage(30),
    ...textStyle.proDisplayRegular,
    color: theme['color-custom-100'],
  },
}));
