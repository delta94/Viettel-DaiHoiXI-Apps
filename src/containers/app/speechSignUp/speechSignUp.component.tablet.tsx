import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage, chunk } from '@src/core/utils/utils';
import {
  textStyle,
  ScrollableAvoidKeyboard,
} from '@src/components';
import { Checkbox } from '../../../components/checkbox/checkbox.component';
import { Button } from '@src/components/button/button.component';
import { SpeechField } from '@src/core/models/speechSignUp/speechField.model';
import { toasts } from '@src/core/utils/toasts';

interface ComponentProps {
  fields: SpeechField[];
  isCreateScreen: boolean;
  onSigUpPress: (fieldIds: any) => void;
  onEditFieldPress: (fieldIds: any) => void;
}

interface SpeechFieldsDataState {
  key: string;
  value: string;
  status: boolean;
}

export type SpeechSignUpTabletProps = ThemedComponentProps & ComponentProps;

const SpeechSignUpTabletComponent: React.FunctionComponent<SpeechSignUpTabletProps> = (props) => {
  const { themedStyle } = props;
  const [chunkFields, setChunkFields] = React.useState<SpeechFieldsDataState[][]>([]);

  React.useEffect(() => {
    setChunkFields(chunk([...props.fields.map((item) => {
      if (item.key) {
        const list = {
          status: false,
          value: item.value,
          key: item.key,
        };
        return list;
      }
    })], 6));
  }, [props.fields]);

  const onSigUpPress = (): void => {
    const selectList  = [];
    chunkFields.forEach(item => {
      const list: SpeechFieldsDataState[] = item.filter(field => {
        return field.status === true;
      });
      if (list) {
        list.forEach(field => {
          selectList.push(field.key);
        });
      }
    });

    if (selectList.length > 0) {
      return props.onSigUpPress(selectList);

    } else {
      toasts.error('Đăng ký không thành công! Chưa chọn chủ đề phát biểu');
    }
  };

  const onEditPress = (): void => {
    const selectList = [];
    chunkFields.forEach(item => {
      const list: SpeechFieldsDataState[] = item.filter(field => {
        return field.status === true;
      });
      if (list) {
        list.forEach(field => {
          selectList.push(field.key);
        });
      }
    });

    if (selectList.length > 0) {
      props.onEditFieldPress(selectList);
    } else {
      toasts.error('Đăng ký không thành công! Chưa chọn chủ đề phát biểu');
    }
  };

  const onCheckboxPress = (id: number, chunkNumber: number) => {
    setChunkFields([...chunkFields.map((item, index) => {
      if (index === chunkNumber) {
        return [...item.map((value, e) => {
          if (e === id) {
            return {
              ...value, status: !value.status,
            };
          }
          return value;
        })];
      }
      return item;
    })]);

  };

  const renderChunk = (fieldsItem: SpeechFieldsDataState[], chunkNumber: number): React.ReactElement[] => {
    return fieldsItem.map((item, index) => {
      return (
        <Checkbox
          key={index}
          onCheckboxPress={onCheckboxPress}
          index={index}
          topic={item}
          isCreateScreen={props.isCreateScreen}
          chunkNumber={chunkNumber}
        />
      );
    });
  };

  const renderCheckBox = (): React.ReactElement[] => {
    return chunkFields.map((item, index) => {
      return (
        <View style={themedStyle.viewBoxGroup}>
          {renderChunk(item, index)}
        </View>
      );
    });
  };

  return (
    <ScrollableAvoidKeyboard style={themedStyle.container}>
      <View style={themedStyle.viewCard}>
        <View
          style={[
            themedStyle.viewSection,
            props.fields.length < 7 && themedStyle.viewOneBox,
          ]}>
          <Text style={themedStyle.txtTitle}>
            {'Chủ đề'}
          </Text>
          <View style={themedStyle.viewCardContent}>
            {renderCheckBox()}
          </View>
          {props.isCreateScreen &&
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
          {!props.isCreateScreen &&
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

export const SpeechSignUpTablet = withStyles(SpeechSignUpTabletComponent, (theme: ThemeType) => ({
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
    width: pxToPercentage(1800), // w 900
    height: pxToPercentage(778),
  },
  viewOneBox: {
    width: pxToPercentage(900), // w 900
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
    flex: 1,
  },
  btnEdit: {
    flex: 1,
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
  viewBoxGroup: {
    flex: 1,
    marginRight: pxToPercentage(20),
  },
  txtTitle: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
    marginBottom: pxToPercentage(22),
  },
}));
