import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import {
  textStyle,
  ValidationInput,
  ScrollableAvoidKeyboard,
} from '@src/components';
import { StringValidator } from '@src/core/validators';
import { BackHeader } from '@src/components/header/backHeader.component';
import { CheckboxItemTablet } from './checkBoxItem.component.tablet';
import { Button } from '@src/components/button/button.component';

interface ComponentProps {
  onBackPress: () => void;
}
export type SignUptoSpeakTabletProps = ThemedComponentProps & ComponentProps;

const SignUptoSpeakTabletComponent: React.FunctionComponent<SignUptoSpeakTabletProps> = (props) => {
  const { themedStyle } = props;
  const [isCreateScreen, setIsCreateScreen] = React.useState<boolean>(true);
  const [topics, setTopic] = React.useState<{
    text: string;
    status: boolean;
  }[]>
    ([
      { text: 'Kinh tế', status: false },
      { text: 'Quản lý đô thị', status: false },
      { text: 'Giáo dục - Đào tạo', status: false },
      { text: 'Khoa học công nghệ', status: false },
      { text: 'Quốc phòng - An ninh', status: false },
      { text: 'Văn hoá - Xã hội', status: false },
      { text: 'Văn hoá - Xã hội', status: false },
      { text: 'Văn hoá - Xã hội', status: false },
    ]);

  const onMessagePress = (): void => {

  };

  const onBackPress = (): void => {
    props.onBackPress();
  };

  const onHelpPress = (): void => {

  };

  const onSigUpPress = (): void => {
    setIsCreateScreen(false);
  };

  const onEditPress = (): void => {
    setIsCreateScreen(true);
  };

  const onCheckboxPress = (id: number) => {
    setTopic(topics.map((item, index) => index === id ?
      { ...item, status: !item.status }
      : item));
  };

  const renderCheckBox = (): React.ReactElement[] => {
    return topics.map((item, index) => {
      return (
        <CheckboxItemTablet
          key={index}
          onCheckboxPress={onCheckboxPress}
          index={index}
          topic={item}
          isCreateScreen={isCreateScreen}
        />
      );
    });
  };

  return (
    <ScrollableAvoidKeyboard style={themedStyle.container}>
      <BackHeader
        title={'ĐĂNG KÝ PHÁT BIỂU'}
        onBackPress={onBackPress}
        onMessagePress={onMessagePress}
        onHelpPress={onHelpPress}
      />
      <View style={themedStyle.viewCard}>
        <View style={themedStyle.viewSection}>
          <View style={themedStyle.viewCardContent}>
            <ScrollView style={themedStyle.viewLeft}>
              {renderCheckBox()}
            </ScrollView>
            <View style={themedStyle.viewRight}>
              <ValidationInput
                disabled={!isCreateScreen}
                multiline={true}
                style={themedStyle.viewTextInput}
                textStyle={themedStyle.txtInputText}
                placeholder='Nhập nội dung'
                validator={StringValidator}
                onChangeText={() => { }}
              />
            </View>
          </View>
          {isCreateScreen &&
            <Button
              titleStyle={themedStyle.txtSignUp}
              title='ĐĂNG KÝ'
              onPress={() => { onSigUpPress(); }}
              activeOpacity={0.75}
              style={[
                themedStyle.btn,
                themedStyle.btnRegister,
              ]}
            />
          }
          {!isCreateScreen &&
            <View style={themedStyle.viewGroupButton}>
              <Button
                titleStyle={[
                  themedStyle.txtSignUp,
                ]}
                title={'SỬA THÔNG TIN'}
                onPress={() => { onEditPress(); }}
                activeOpacity={0.75}
                style={[
                  themedStyle.btn,
                  themedStyle.btnEdit,
                ]}
              />
              <Button
                titleStyle={themedStyle.txtCancel}
                title={'HỦY THÔNG TIN'}
                activeOpacity={0.75}
                style={[
                  themedStyle.btn,
                  themedStyle.btnCancel,
                ]} />
            </View>}
        </View>
      </View>
    </ScrollableAvoidKeyboard>
  );
};

export const SignUpToSpeakTablet = withStyles(SignUptoSpeakTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: pxToPercentage(31),
    paddingBottom: pxToPercentage(31),
    backgroundColor: theme['color-primary-2'],
  },
  viewCard: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: pxToPercentage(40),
    backgroundColor: theme['color-custom-100'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewSection: {
    width: pxToPercentage(1700), // w 900
    height: pxToPercentage(778),
  },
  txtSignUp: {
    ...textStyle.proDisplayRegular,
    fontSize: pxToPercentage(32),
    textAlign: 'center',
    color: theme['color-primary-2'],
  },
  btn: {
    backgroundColor: theme['color-primary-0'],
    borderRadius: pxToPercentage(32),
    marginTop: pxToPercentage(40),
    height: pxToPercentage(86),
    justifyContent: 'center',
  },
  viewGroupButton: {
    flexDirection: 'row',
  },
  btnCancel: {
    marginLeft: pxToPercentage(28),
    backgroundColor: theme['color-primary-18'],
    width: pxToPercentage(836),
  },
  btnEdit: {
    width: pxToPercentage(836),
  },
  txtCancel: {
    ...textStyle.proDisplayRegular,
    fontSize: pxToPercentage(32),
    textAlign: 'center',
    color: theme['color-primary-12'],
  },
  viewCardContent: {
    flexDirection: 'row',
    flex: 1,
  },
  viewLeft: {
    flex: 1,
  },
  viewRight: {
    flex: 1,
    marginLeft: pxToPercentage(28),
  },
  viewTextInput: {
    backgroundColor: 'white',
  },
  txtInputText: {
    height: pxToPercentage(595),
    textAlignVertical: 'top',
    ...textStyle.proTextRegular,
  },
}));
