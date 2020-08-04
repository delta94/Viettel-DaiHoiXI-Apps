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
  PersonIconOther2,
} from '@src/assets/icons';
import { ChatDetail as ChatDetailModel } from '@src/core/models/chat/chatDetail';
import { isTablet } from 'react-native-device-info';
import { textStyle } from '@src/components';
import { ChatDetailDataFake } from '@src/core/data/chat';
import { ChatDetail as ChatDetails } from '@src/core/models/chat/chatDetail';
import { viewStyle } from '@src/components/viewStyle';

interface ComponentProps {
  chatDetails: ChatDetailModel[];
}

export type ChatDetailProps = ThemedComponentProps & ComponentProps;

const ChatDetailComponent: React.FunctionComponent<ChatDetailProps> = (props) => {
  const { themedStyle } = props;
  const flatListRef = React.useRef(null);
  const [chatDetail, setChatDetail] = React.useState<ChatDetails[]>(ChatDetailDataFake);
  const [messageInput, setMessageInput] = React.useState<string>();

  const onGetKeyboardVerticalOffset = (): number => {
    if (Platform.OS === 'android') {
      return -500;
    } else {
      return isTablet() ? pxToPercentage(300) : 0;
    }
  };

  const onSendMessagePress = (message: string): void => {
    const date = new Date();
    if (messageInput) {
      setChatDetail([...chatDetail, {
        content: message,
        id: 1,
        time: `${date.getHours()}:${date.getMinutes()}`,
      }]);
      setMessageInput('');
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        themedStyle.viewMessageItemById,
        item.id === 1 && themedStyle.viewMyMessageItem,
      ]}>
      <View
        style={[
          themedStyle.viewMessageContentById,
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
    <View style={themedStyle.container}>
      <View style={themedStyle.viewCard}>
        <View style={themedStyle.viewHeader}>
          <View style={themedStyle.viewIcon}>
            {PersonIconOther2(themedStyle.iconPerson)}
          </View>
          <Text style={themedStyle.txtHeader}>
            {'Tổ phục vụ'}
          </Text>
        </View>
        <KeyboardAvoidingView
          style={themedStyle.viewChatList}
          behavior={'padding'}
          keyboardVerticalOffset={onGetKeyboardVerticalOffset()}>
          <View style={themedStyle.viewContainer}>
            <FlatList
              ref={flatListRef}
              onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
              onLayout={() => flatListRef.current.scrollToEnd({ animated: true })}
              style={themedStyle.viewChatDetail}
              showsVerticalScrollIndicator={false}
              data={chatDetail}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={themedStyle.viewBottom}>
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
                placeholder={'Nhắn tin...'}>
              </TextInput>
              <TouchableOpacity
                disabled={messageInput ? false : true}
                activeOpacity={0.75}
                style={themedStyle.viewSendBtn}
                onPress={() => onSendMessagePress(messageInput)}>
                <Text style={themedStyle.txtBtn}>
                  {'Gửi'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};
export const ChatDetail = withStyles(ChatDetailComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-primary-20'],
    padding: pxToPercentage(8),
    ...viewStyle.shadow2,
  },
  viewCard: {
    flex: 1,
    backgroundColor: theme['color-custom-100'],
    borderTopLeftRadius: pxToPercentage(15),
    borderTopRightRadius: pxToPercentage(15),
    overflow: 'hidden',
  },
  viewHeader: {
    backgroundColor: theme['color-primary-22'],
    flexDirection: 'row',
    justifyContent: 'center',
    height: pxToPercentage(75),
    alignItems: 'center',
    borderBottomWidth: pxToPercentage(1),
    borderColor: theme['color-primary-2'],
  },
  viewLeft: {
    position: 'absolute',
    flexDirection: 'row',
  },
  txtHeader: {
    fontSize: pxToPercentage(16),
    ...textStyle.proDisplayBold,
    color: theme['color-primary-23'],
    textAlign: 'center',
  },
  viewIcon: {
    height: pxToPercentage(75),
    width: pxToPercentage(58),
    borderRadius: pxToPercentage(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconPerson: {
    width: pxToPercentage(40),
    height: pxToPercentage(40),
    borderRadius: pxToPercentage(50),
  },
  iconBack: {
    width: pxToPercentage(20),
    height: pxToPercentage(20),
  },
  viewChatList: {
    paddingHorizontal: pxToPercentage(8),
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    marginTop: pxToPercentage(8),
  },
  txtTime: {
    textAlign: 'right',
    fontSize: pxToPercentage(10),
    color: theme['color-primary-18'],
    ...textStyle.proDisplayRegular,
  },
  txtMessage: {
    fontSize: pxToPercentage(14),
    ...textStyle.proDisplayRegular,
  },
  viewMessageItemById: {
    marginTop: pxToPercentage(5),
    marginBottom: pxToPercentage(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewMyMessageItem: {
    flexDirection: 'row-reverse',
  },
  viewMyMessageContent: {
    backgroundColor: theme['color-primary-0'],
  },
  viewMessageContentById: {
    backgroundColor: theme['color-primary-22'],
    maxWidth: '75%',
    marginBottom: pxToPercentage(10),
    borderRadius: pxToPercentage(10),
    paddingHorizontal: pxToPercentage(15),
    paddingVertical: pxToPercentage(10),
  },
  viewChatDetail: {
  },
  input: {
    flex: 1,
    height: pxToPercentage(45),
    fontSize: pxToPercentage(14),
    paddingLeft: pxToPercentage(10),
    ...textStyle.proDisplayRegular,
  },
  viewInput: {
    flexDirection: 'row',
    borderRadius: pxToPercentage(20),
    borderWidth: pxToPercentage(1),
    alignItems: 'center',
    borderColor: theme['color-primary-11'],
  },
  viewBottom: {
    width: '100%',
    marginBottom: pxToPercentage(8),
  },
  viewSendBtn: {
    width: pxToPercentage(60),
    height: pxToPercentage(33),
    backgroundColor: theme['color-primary-0'],
    marginRight: pxToPercentage(6),
    borderRadius: pxToPercentage(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtn: {
    fontSize: pxToPercentage(14),
    color: theme['color-custom-100'],
  },
}));

