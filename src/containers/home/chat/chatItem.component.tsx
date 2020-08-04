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
import { PersonIconOther2 } from '@src/assets/icons';
import { textStyle } from '@src/components';

interface ComponentProps {
  chatList: ChatList;
  index: number;
  onPressChatDetailPress: () => void;
}

export type ChatListItemProps = ThemedComponentProps & ComponentProps;

const ChatListItemComponent: React.FunctionComponent<ChatListItemProps> = (props) => {
  const { themedStyle } = props;


  const onPressChatDetailPress = (): void => {
    return props.onPressChatDetailPress();
  };

  return (
    <TouchableOpacity
      style={themedStyle.container}
      onPress={() => { onPressChatDetailPress(); }}
      activeOpacity={0.75}>
      <View style={themedStyle.viewSection}>
        <View style={themedStyle.viewIcon}>
          {PersonIconOther2(themedStyle.iconPerson)}
        </View>
        <View style={themedStyle.viewContent}>
          <View style={themedStyle.viewHeader}>
            <Text style={themedStyle.txtName}>
              {props.chatList.name}
            </Text>
            <Text style={themedStyle.txtTime}>
              {props.chatList.time}
            </Text>
          </View>
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
    width: pxToPercentage(359),
    height: pxToPercentage(73),
    borderRadius: pxToPercentage(10),
  },
  viewSection: {
    flexDirection: 'row',
  },
  viewIcon: {
    height: pxToPercentage(75),
    width: pxToPercentage(58),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconPerson: {
    width: pxToPercentage(40),
    height: pxToPercentage(40),
    borderRadius: pxToPercentage(50),
  },
  read: {
    color: theme['color-primary-0'],
    fontSize: pxToPercentage(16),
    ...textStyle.proDisplayBold,
  },
  txtName: {
    fontSize: pxToPercentage(16),
    ...textStyle.proDisplayBold,
    color: theme['color-primary-2'],
  },
  viewContent: {
    marginLeft: pxToPercentage(10),
    width: pxToPercentage(280),
    height: pxToPercentage(54),
    alignSelf: 'center',
  },
  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtTime: {
    fontSize: pxToPercentage(14),
    ...textStyle.proDisplayRegular,
  },
  viewLastMessage: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: pxToPercentage(2),
  },
  txtLastMessage: {
    fontSize: pxToPercentage(14),
    marginRight: pxToPercentage(5),
    ...textStyle.proDisplayRegular,
  },
  viewBadge: {
    justifyContent: 'center',
    alignItems: 'center',
    height: pxToPercentage(25),
    width: pxToPercentage(25),
    backgroundColor: theme['color-primary-2'],
    borderRadius: pxToPercentage(25),
  },
  txtBadge: {
    fontSize: pxToPercentage(14),
    ...textStyle.proDisplayRegular,
    color: theme['color-custom-100'],
  },
}));
