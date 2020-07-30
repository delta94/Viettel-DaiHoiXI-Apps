import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {
  Button,
} from '@kitten/ui';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { textStyle } from '@src/components';
import { CheckboxItemTablet } from './checkBoxItem.component.tablet';

interface ComponentProps {
  example?: any;
}

interface TopicDataState {
  text: string;
  status: boolean;
}

export type SignUpToSpeakProps = ComponentProps & ThemedComponentProps;

const SignUpToSpeakComponent: React.FunctionComponent<SignUpToSpeakProps> = (props) => {
  const { themedStyle } = props;
  const [isCreateScreen, setIsCreateScreen] = useState<boolean>(true);
  const [data, setData] = React.useState<TopicDataState[]>
    ([
      { text: 'Kinh tế', status: false },
      { text: 'Quản lý đô thị', status: false },
      { text: 'Giáo dục - Đào tạo', status: false },
      { text: 'Khoa học công nghệ', status: false },
      { text: 'Quốc phòng - An ninh', status: false },
      { text: 'Văn hoá - Xã hội', status: false },
      { text: 'Du lịch', status: false },
      { text: 'Du lịch', status: false },
      { text: 'Đối ngoại', status: false },
      { text: 'Ngoại giao', status: false },
      { text: 'Xây dựng', status: false },
    ]);

  const onSignUpPress = (): void => {
    setIsCreateScreen(false);
  };

  const onEditPress = (): void => {
    setIsCreateScreen(true);
  };

  const onCheckboxPress = (id: number) => {
    setData(data.map((item, index) => index === id ?
      { ...item, status: !item.status }
      : item));
  };

  const renderCheckBoxList = (): React.ReactElement[] => {
    return data.map((item, index) => {
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
    <View style={themedStyle.container}>
      <View style={themedStyle.viewBox}>
        <View style={themedStyle.viewGroupCheckBox}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {renderCheckBoxList()}
          </ScrollView>
        </View>
        {isCreateScreen
          ? <Button
            style={themedStyle.btnSignUp}
            onPress={onSignUpPress}>
            {'Đăng ký'}
          </Button>
          : <View style={themedStyle.viewBtns}>
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
          </View>}
      </View>
    </View>
  );
};

export const SignUpToSpeak = withStyles(SignUpToSpeakComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    padding: pxToPercentage(8),
    paddingBottom: pxToPercentage(20),
    backgroundColor: theme['color-custom-100'],
  },
  viewBox: {
    flex: 1,
    borderRadius: pxToPercentage(12.5),
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
    padding: pxToPercentage(8),
  },
  viewGroupCheckBox: {
    flex: 1,
  },
  txtSelectInput: {
    fontSize: pxToPercentage(14),
    padding: 0,
    ...textStyle.proTextRegular,
  },
  viewBtns: {
    flexDirection: 'row',
    marginTop: pxToPercentage(20),
  },
  btnSignUp: {
    marginTop: pxToPercentage(20),
    backgroundColor: theme['color-primary-2'],
    height: pxToPercentage(48),
  },
  btnEdit: {
    flex: 1,
    marginRight: pxToPercentage(4),
    height: pxToPercentage(48),
    backgroundColor: theme['color-custom-700'],
  },
  btnCancel: {
    flex: 1,
    marginLeft: pxToPercentage(4),
    height: pxToPercentage(48),
    backgroundColor: theme['color-primary-2'],
  },
  viewSpeech: {
    borderRadius: pxToPercentage(5),
    justifyContent: 'center',
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
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
  txtLabel: {
    fontSize: pxToPercentage(14),
    color: 'black',
    ...textStyle.proTextBold,
  },
  scrollView: {
    flex: 1,
  },
}));
