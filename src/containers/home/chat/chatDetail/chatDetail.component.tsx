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
  const [isRead, setIsRead] = React.useState<number>(0);
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
    setChatDetail([...chatDetail, {
      content: message,
      id: 1,
      time: `${date.getHours()}:${date.getMinutes()}`,
    }]);
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
      <View style={themedStyle.viewHeader}>
        <View style={themedStyle.viewIcon}>
          {PersonIconOther2(themedStyle.iconPerson)}
        </View>
        <Text style={themedStyle.txtHeader}>
          {'Tổ phục vụ'}
        </Text>
      </View>
      <View style={themedStyle.viewContainer}>
        <KeyboardAvoidingView
          style={themedStyle.viewChatList}
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
    marginTop: pxToPercentage(20),
  },
  viewHeader: {
    backgroundColor: theme['color-primary-22'],
    flexDirection: 'row',
    borderTopLeftRadius: pxToPercentage(15),
    borderTopRightRadius: pxToPercentage(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtHeader: {
    fontSize: pxToPercentage(16),
    ...textStyle.proDisplayBold,
    color: theme['color-primary-23'],
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
  viewChatList: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  viewContainer: {
    backgroundColor: theme['color-custom-100'],
    marginTop: pxToPercentage(3),
    flex: 1,
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
    marginTop: pxToPercentage(20),
    flexDirection: 'row-reverse',
  },
  viewMyMessageContent: {
    backgroundColor: theme['color-primary-0'],

  },
  viewMessageContentById: {
    backgroundColor: theme['color-primary-22'],
    maxWidth: '75%',
    marginBottom: pxToPercentage(10),
    marginHorizontal: pxToPercentage(10),
    borderRadius: pxToPercentage(10),
    paddingHorizontal: pxToPercentage(15),
    paddingVertical: pxToPercentage(10),
    ...viewStyle.shadow3,
  },
  input: {
    width: pxToPercentage(350),
    height: pxToPercentage(40),
    fontSize: pxToPercentage(14),
    paddingLeft: pxToPercentage(10),
    justifyContent: 'flex-end',
    borderRadius: pxToPercentage(20),
    ...textStyle.proDisplayRegular,
    borderWidth: pxToPercentage(0.5),
    backgroundColor: theme['color-custom-100'],
    alignSelf: 'center',
  },
  viewInput: {
    position: 'absolute',
    borderColor: theme['color-primary-18'],
  },
}));

