import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import {
  Button,
  Select,
} from '@kitten/ui';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import {
  ValidationInput,
  textStyle,
  ScrollableAvoidKeyboard,
} from '@src/components';
import { StringValidator } from '@src/core/validators';
import { Hr } from '@src/components/hr/hr.component';

interface ComponentProps {
  example?: any;
}

export type SignUpToSpeakProps = ComponentProps & ThemedComponentProps;

const SignUpToSpeakComponent: React.FunctionComponent<SignUpToSpeakProps> = (props) => {
  const { themedStyle } = props;
  const [selectedOption, setSelectedOption] = useState<any>([]);
  const [isCreateScreen, setIsCreateScreen] = useState<boolean>(true);

  const onSignUpPress = (): void => {
    setIsCreateScreen(false);
  };

  const onEditPress = (): void => {
    setIsCreateScreen(true);
  };

  if (!isCreateScreen) {
    return (
      <ScrollableAvoidKeyboard style={themedStyle.container}>
        <View style={themedStyle.viewBox}>
          <View style={themedStyle.viewSpeech}>
            <View style={themedStyle.viewHeader}>
              <Text style={themedStyle.txtTitle}>
                {'Chủ đề'}
              </Text>
              <View style={themedStyle.viewIndex}>
                <Text style={themedStyle.txtIndex}>
                  {'Chờ phê duyệt'}
                </Text>
              </View>
            </View>
            <Hr />
            <View style={themedStyle.viewBody}>
              <Text style={themedStyle.txtContent}>
                {'Nghị quyết về thí điểm cơ chế, chính sách đặc thù phát triển thành phố Hồ Chí Minh'}
              </Text>
            </View>
          </View>
          <View style={themedStyle.viewBtns}>
            <Button
              style={themedStyle.btnEdit}
              onPress={onEditPress}>
              {'Sửa thông tin'}
            </Button>
            <Button
              style={themedStyle.btnCancel}
              onPress={() => { }}>
              {'Huỷ đăng ký'}
            </Button>
          </View>
        </View>
        <SafeAreaView />
      </ScrollableAvoidKeyboard>
    );
  }

  return (
    <ScrollableAvoidKeyboard style={themedStyle.container}>
      <View style={themedStyle.viewBox}>
        <Select
          data={[
            { text: 'Kinh tế' },
            { text: 'Quản lý đô thị' },
            { text: 'Giáo dục - Đào tạo' },
            { text: 'Khoa học công nghệ' },
            { text: 'Quốc phòng - An ninh' },
            { text: 'Văn hoá - Xã hội' },
          ]}
          placeholder='Chọn chủ đề'
          size={'large'}
          label={'Chủ đề'}
          multiSelect={true}
          keyExtractor={(item) => item.text}
          selectedOption={selectedOption}
          textStyle={themedStyle.txtSelectInput}
          labelStyle={themedStyle.txtLabel}
          onSelect={setSelectedOption}>
        </Select>
        <ValidationInput
          label={'Nội dung'}
          multiline={true}
          labelStyle={themedStyle.txtLabel}
          style={themedStyle.textInput}
          textStyle={themedStyle.textInputTxt}
          placeholder='Nhập nội dung'
          validator={StringValidator}
          onChangeText={() => { }}
        />
        <Button
          style={themedStyle.btnSignUp}
          onPress={onSignUpPress}>
          {'Đăng ký'}
        </Button>
      </View>
      <SafeAreaView />
    </ScrollableAvoidKeyboard>
  );
};

export const SignUpToSpeak = withStyles(SignUpToSpeakComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    padding: pxToPercentage(8),
    backgroundColor: theme['color-custom-100'],
  },
  viewBox: {
    flex: 1,
    padding: pxToPercentage(8),
    backgroundColor: theme['color-custom-100'],
    borderRadius: pxToPercentage(5),
    ...viewStyle.shadow2,
  },
  txtSelectInput: {
    fontSize: pxToPercentage(14),
    padding: 0,
    ...textStyle.proTextRegular,
  },
  textInput: {
    marginTop: pxToPercentage(8),
  },
  textInputTxt: {
    height: pxToPercentage(300),
    ...textStyle.proTextRegular,
  },
  txtLabel: {
    fontSize: pxToPercentage(14),
    color: theme['text-basic-color'],
  },
  viewBtns: {
    flexDirection: 'row',
    marginTop: pxToPercentage(8),
  },
  btnSignUp: {
    marginTop: pxToPercentage(4),
    backgroundColor: theme['color-primary-2'],
  },
  btnEdit: {
    flex: 1,
    marginRight: pxToPercentage(4),
    backgroundColor: theme['color-custom-700'],
  },
  btnCancel: {
    flex: 1,
    marginLeft: pxToPercentage(4),
    backgroundColor: theme['color-primary-2'],
  },
  //
  viewSpeech: {
    borderRadius: pxToPercentage(5),
    justifyContent: 'center',
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
  },
  viewHeader: {
    justifyContent: 'center',
    padding: pxToPercentage(8),
  },
  viewBody: {
    padding: pxToPercentage(8),
  },
  viewIndex: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: pxToPercentage(8),
    height: pxToPercentage(25),
    paddingHorizontal: pxToPercentage(8),
    borderRadius: pxToPercentage(5),
    backgroundColor: theme['color-primary-13'],
  },
  txtIndex: {
    fontSize: pxToPercentage(12),
    color: theme['color-custom-100'],
    ...textStyle.proTextSemibold,
  },
  txtTitle: {
    fontSize: pxToPercentage(14),
    color: theme['text-basic-color'],
    ...textStyle.proTextBold,
  },
  txtContent: {
    fontSize: pxToPercentage(14),
    lineHeight: pxToPercentage(25),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegular,
  },
  txtBold: {
    ...textStyle.proTextBold,
  },
}));
