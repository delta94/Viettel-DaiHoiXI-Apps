import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle, ValidationInput, ScrollableAvoidKeyboard } from '@src/components';
import { StringValidator } from '@src/core/validators';
import { BackHeader } from '@src/components/header/backHeader.component';
import { CheckboxItemTablet } from './checkBoxItem.component.tablet';

interface ComponentProps {
  onBackPress: () => void;
}
export type SignUptoSpeakTabletProps = ThemedComponentProps & ComponentProps;

const SignUptoSpeakTabletComponent: React.FunctionComponent<SignUptoSpeakTabletProps> = (props) => {
  const { themedStyle } = props;
  const [isCreateScreen, setIsCreateScreen] = React.useState<boolean>(true);
  const [topics, setTopic] = React.useState(
    [
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
                style={themedStyle.textInput}
                textStyle={themedStyle.textInputTxt}
                placeholder='Nhập nội dung'
                validator={StringValidator}
                onChangeText={() => { }}
              />
            </View>
          </View>
          {isCreateScreen &&
            <TouchableOpacity
              onPress={() => { onSigUpPress(); }}
              activeOpacity={0.75}
              style={[themedStyle.btn, themedStyle.btnRegister]}>
              <Text style={themedStyle.txtSignUp}>
                {'ĐĂNG KÝ'}
              </Text>
            </TouchableOpacity>}
          {!isCreateScreen &&
            <View style={themedStyle.viewGroupButton}>
              <TouchableOpacity
                onPress={() => { onEditPress(); }}
                activeOpacity={0.75}
                style={themedStyle.btn}>
                <Text style={[
                  themedStyle.txtSignUp,
                  themedStyle.btnEdit,
                ]}>
                  {'SỬA THÔNG TIN'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.75}
                style={[
                  themedStyle.btn,
                  themedStyle.btnCancel,
                ]}>
                <Text style={themedStyle.txtCancel}>
                  {'HỦY THÔNG TIN'}
                </Text>
              </TouchableOpacity>
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
    width: pxToPercentage(900),
  },
  textInput: {
    backgroundColor: 'white',
  },
  viewRight: {
    marginLeft: pxToPercentage(28),
    width: pxToPercentage(600),
  },
  textInputTxt: {
    height: pxToPercentage(595),
    ...textStyle.proTextRegular,
  },
}));
