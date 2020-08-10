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
import { Checkbox } from '../../../components/checkbox/checkbox.component';
import { SpeechField } from '@src/core/models/speechSignUp/speechField.model';
import { toasts } from '@src/core/utils/toasts';

interface ComponentProps {
  isCreateScreen: boolean;
  fields: SpeechField[];
  onSigUpPress: (fieldsId: any) => void;
  onEditFieldPress: (fieldsId: any) => void;
}

interface SpeechFieldsDataState {
  key: string;
  value: string;
  status: boolean;
}

export type SpeechSignUpProps = ComponentProps & ThemedComponentProps;

const SpeechSignUpComponent: React.FunctionComponent<SpeechSignUpProps> = (props) => {
  const { themedStyle } = props;
  const [fields, setFields] = React.useState<SpeechFieldsDataState[]>([]);

  React.useEffect(() => {
    setFields([...props.fields.map((item) => {
      if (item.key) {
        const list = {
          status: false,
          value: item.value,
          key: item.key,
        };
        return list;
      }
    })]);
  }, [props.fields]);

  const onSignUpPress = (): void => {
    const fieldIds = [];

    const selectList = fields.filter(item => {
      return item.status === true;
    });

    if (selectList.length > 0) {
      selectList.forEach(item => {
        fieldIds.push(item.key);
      });
      props.onSigUpPress(fieldIds);
    } else {
      toasts.error('Đăng ký không thành công! \nChưa chọn chủ đề phát biểu ');
    }
  };

  const onEditPress = (): void => {
    const fieldIds = [];

    const selectList = fields.filter(item => {
      return item.status === true;
    });

    if (selectList.length > 0) {
      selectList.forEach(item => {
        fieldIds.push(item.key);
      });
      props.onEditFieldPress(fieldIds);
    } else {
      toasts.error('Chỉnh sửa đăng ký không thành công! \nChưa chọn chủ đề phát biểu ');
    }
  };

  const onCheckboxPress = (id: number) => {
    setFields(fields.map((item, index) => index === id ?
      { ...item, status: !item.status }
      : item));
  };

  const renderCheckBoxList = (): React.ReactElement[] => {
    return fields.map((item, index) => {
      return (
        <Checkbox
          key={index}
          onCheckboxPress={onCheckboxPress}
          index={index}
          topic={item}
          isCreateScreen={props.isCreateScreen}
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
        {props.isCreateScreen
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

export const SpeechSignUp = withStyles(SpeechSignUpComponent, (theme: ThemeType) => ({
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
