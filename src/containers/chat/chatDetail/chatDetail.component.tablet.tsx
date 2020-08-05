import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import {
  PersonIcon,
  CameraIcon,
} from '@src/assets/icons';
import { ChatDetail } from '@src/core/models/chat/chatDetail';
import { isTablet } from 'react-native-device-info';
import { textStyle } from '@src/components';

interface ComponentProps {
  chatDetails: ChatDetail[];
  onSendMessagePress: (message: string) => void;
}

export type ChatDetaillTabletProps = ThemedComponentProps & ComponentProps;

const ChatDetailTabletComponent: React.FunctionComponent<ChatDetaillTabletProps> = (props) => {
  const { themedStyle } = props;
  const flatListRef = React.useRef(null);
  const [messageInput, setMessageInput] = React.useState<string>();

  const onSendMessagePress = (message: string): void => {
    if (message) {
      setMessageInput('');
      return props.onSendMessagePress(message);
    }
  };

  const onGetKeyboardVerticalOffset = (): number => {
    if (Platform.OS === 'android') {
      return -500;
    } else {
      return isTablet() ? pxToPercentage(300) : 0;
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        themedStyle.viewMessageItem,
        item.id === 1 && themedStyle.viewMyMessageItem,
      ]}>
      <View
        style={[
          themedStyle.viewIcon,
          item.id === 1 && themedStyle.viewMyMessageViewIcon,
        ]}>
        {PersonIcon([
          themedStyle.iconHeader,
          item.id === 1 && themedStyle.viewMyMessageIcon,
        ])}
      </View>
      <View
        style={[
          themedStyle.viewMessageContent,
          item.id === 1 && themedStyle.viewMyMessageContent,
        ]}>
        <Text style={themedStyle.txtMessage}>
          {item.content}
        </Text>
        <Text style={themedStyle.txtTime}>
          {item.time}
        </Text>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={themedStyle.container}
      behavior={'padding'}
      keyboardVerticalOffset={onGetKeyboardVerticalOffset()}>
      <FlatList
        ref={flatListRef}
        onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
        onLayout={() => flatListRef.current.scrollToEnd({ animated: true })}
        style={themedStyle.viewChatDetail}
        showsVerticalScrollIndicator={false}
        data={props.chatDetails}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={themedStyle.viewChatInput}>
        {CameraIcon(themedStyle.iconCamera)}
        <View style={themedStyle.viewInput}>
          <TextInput
            returnKeyType={'send'}
            onSubmitEditing={() => {
              onSendMessagePress(messageInput);
            }}
            value={messageInput}
            onChangeText={setMessageInput}
            placeholderTextColor={themedStyle.placeholderColor}
            style={themedStyle.input}
            placeholder={'Nhắn tin'}>
          </TextInput>
          <TouchableOpacity
            style={themedStyle.btnSend}
            onPress={() => {
              onSendMessagePress(messageInput);
            }}>
            <Text style={themedStyle.txtBtnSend}>
              {'GỬI'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export const ChatDetailTablet = withStyles(ChatDetailTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: pxToPercentage(28),
  },
  viewChatDetail: {
    flex: 1,
  },
  viewChatInput: {
    height: pxToPercentage(120),
    alignItems: 'center',
    flexDirection: 'row',
  },
  viewMessageItem: {
    marginTop: pxToPercentage(40),
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewMyMessageItem: {
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse',
  },
  viewMessageContent: {
    backgroundColor: theme['color-primary-20'],
    maxWidth: '60%',
    marginHorizontal: pxToPercentage(19),
    borderRadius: pxToPercentage(40),
    paddingHorizontal: pxToPercentage(30),
    paddingVertical: pxToPercentage(18),
  },
  viewMyMessageContent: {
    backgroundColor: theme['color-primary-0'],
  },
  viewMyMessageIcon: {
    tintColor: theme['color-primary-18'],
  },
  viewMyMessageViewIcon: {
    backgroundColor: theme['color-primary-20'],
  },
  txtTime: {
    textAlign: 'right',
    fontSize: pxToPercentage(30),
    color: theme['color-primary-18'],
    ...textStyle.proDisplayRegular,
  },
  txtMessage: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
  iconHeader: {
    height: pxToPercentage(51.08),
    width: pxToPercentage(51),
    tintColor: theme['color-custom-100'],
  },
  iconCamera: {
    width: pxToPercentage(102),
    height: pxToPercentage(78),
  },
  viewIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: pxToPercentage(80),
    width: pxToPercentage(80),
    borderRadius: pxToPercentage(28),
    backgroundColor: theme['color-primary-2'],
  },
  input: {
    flex: 1,
    height: pxToPercentage(80),
    fontSize: pxToPercentage(34),
    paddingLeft: pxToPercentage(20),
    ...textStyle.proDisplayRegular,
  },
  viewInput: {
    flex: 1,
    borderWidth: pxToPercentage(1),
    borderColor: theme['color-primary-18'],
    borderRadius: pxToPercentage(30),
    marginLeft: pxToPercentage(32),
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeholderColor: {
    color: theme['color-primary-18'],
  },
  btnSend: {
    width: pxToPercentage(142),
    height: pxToPercentage(68),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme['color-primary-0'],
    borderRadius: pxToPercentage(24),
    marginRight: pxToPercentage(6),
  },
  txtBtnSend: {
    fontSize: pxToPercentage(34),
    color: theme['color-primary-2'],
    ...textStyle.proDisplayBold,
  },
}));
