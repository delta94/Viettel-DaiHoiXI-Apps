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
import { BackHeader } from '@src/components/header/backHeader.component';
import { CheckboxItemTablet } from './checkBoxItem.component.tablet';
import { Button } from '@src/components/button/button.component';

interface ComponentProps {
  onBackPress: () => void;
}

interface TopicDataState {
  text: string;
  status: boolean;
}
export type SignUptoSpeakTabletProps = ThemedComponentProps & ComponentProps;

const SignUptoSpeakTabletComponent: React.FunctionComponent<SignUptoSpeakTabletProps> = (props) => {
  const { themedStyle } = props;
  const [isCreateScreen, setIsCreateScreen] = React.useState<boolean>(true);
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
      { text: 'Giáo dục', status: false },
    ]);

  const [chunkTopic, setChunkTopic] = React.useState<TopicDataState[][]>(chunk(data, 6));

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

  const onCheckboxPress = (id: number, chunkNumber: number) => {
    setChunkTopic([...chunkTopic.map((item, index) => {
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

  const renderChunk = (topics: { text: string; status: boolean; }[], chunkNumber: number): React.ReactElement[] => {
    return topics.map((item, index) => {
      return (
        <CheckboxItemTablet
          key={index}
          onCheckboxPress={onCheckboxPress}
          index={index}
          topic={item}
          isCreateScreen={isCreateScreen}
          chunkNumber={chunkNumber}
        />
      );
    });
  };

  const renderCheckBox = (): React.ReactElement[] => {
    return chunkTopic.map((item, index) => {
      return (
        <View style={themedStyle.viewBoxGroup}>
          {renderChunk(item, index)}
        </View>
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
        <View style={[
          themedStyle.viewSection,
          data.length < 7 && themedStyle.viewOneBox,
        ]}>
          <Text style={themedStyle.txtTitle}>
            {'Chủ đề'}
          </Text>
          <View style={themedStyle.viewCardContent}>
            {renderCheckBox()}
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
