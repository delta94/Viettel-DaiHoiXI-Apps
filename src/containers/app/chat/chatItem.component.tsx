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

export type ChatItemProps = ThemedComponentProps & ComponentProps;

const ChatItemComponent: React.FunctionComponent<ChatItemProps> = (props) => {
  const { themedStyle } = props;

  const onPressChatDetailPress = (): void => {
    return props.onPressChatDetailPress();
  };

  return (
    <TouchableOpacity
      style={themedStyle.container}
      onPress={() => { onPressChatDetailPress(); }}
      activeOpacity={0.75}>
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
    </TouchableOpacity>
  );
};

export const ChatItem = withStyles(ChatItemComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    width: pxToPercentage(359),
    height: pxToPercentage(75),
    borderRadius: pxToPercentage(10),
    borderBottomWidth: pxToPercentage(1),
    borderColor: theme['color-primary-2'],
  },
  viewIcon: {
    height: pxToPercentage(75),
    width: pxToPercentage(60),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  viewContent: {
    flex: 1,
    height: pxToPercentage(75),
    justifyContent: 'center',
    paddingHorizontal: pxToPercentage(10),
  },
  iconPerson: {
    width: pxToPercentage(50),
    height: pxToPercentage(50),
    borderRadius: pxToPercentage(25),
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
    marginRight: pxToPercentage(30),
    ...textStyle.proDisplayRegular,
  },
  viewBadge: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    height: pxToPercentage(20),
    width: pxToPercentage(20),
    backgroundColor: theme['color-primary-2'],
    borderRadius: pxToPercentage(10),
  },
  txtBadge: {
    fontSize: pxToPercentage(12),
    ...textStyle.proDisplayRegular,
    color: theme['color-custom-100'],
  },
}));
