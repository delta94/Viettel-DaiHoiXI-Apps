import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import React, { useState } from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  CloseIconOutline,
} from '@src/assets/icons';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import { ProgramTabEnum, DocumentRequestEnum } from '@src/core/utils/constants';

interface ComponentProps {
  isVisible: boolean;
  onClosePress: () => void;
}

export type ModalDocumentRequestProps = ThemedComponentProps & ComponentProps;

const ModalDocumentRequestComponent: React.FunctionComponent<ModalDocumentRequestProps> = (props) => {
  const onClosePress = (): void => {
    props.onClosePress();
  };

  const { themedStyle } = props;

  const [selectedBtn, setSelectedBtn] = useState<number>(DocumentRequestEnum.OnlyMe);

  const [selectedChoice, setSelectedChoice] = useState<number>(ProgramTabEnum.ChuongTrinh);

  const renderSelected = (type: number): React.ReactElement => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        style={[
          themedStyle.btnChoice,
          selectedChoice === type && themedStyle.btnChoiceSelected,
        ]}
        onPress={() => setSelectedChoice(type)}>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      isVisible={props.isVisible}
      animationIn='slideInUp'
      animationOut='slideOutDown'
      onBackdropPress={onClosePress}
      backdropColor={'rgb(156, 156, 156)'}
      swipeDirection={['down']}
      onSwipeComplete={onClosePress}
      onBackButtonPress={onClosePress}
      backdropTransitionInTiming={1}
      backdropTransitionOutTiming={1}
      style={themedStyle.viewModal}>
      <View style={themedStyle.viewBox}>
        <View style={themedStyle.viewIcon}>
          <TouchableOpacity
            activeOpacity={0.75}
            style={themedStyle.bntClose}
            onPress={onClosePress}>
            {CloseIconOutline(themedStyle.iconClose)}
          </TouchableOpacity>
        </View>
        <View style={themedStyle.viewDoc}>
          <View style={themedStyle.viewDocTop}>
            <Text style={themedStyle.txtDocTop}>
              {'YÊU CẦU TÀI LIỆU'}
            </Text>
            <TextInput
              multiline={true}
              style={themedStyle.txtInputTop}
              placeholder={'Nhập nội dung yêu cầu'}
            />
          </View>
          <View style={themedStyle.viewDocCenter}>
            <Text style={themedStyle.txtDocCenterFist}>
              {'Ai có thể xem tài liệu?'}
            </Text>
            <View style={themedStyle.viewChoice}>
              {renderSelected(DocumentRequestEnum.OnlyMe)}
              <Text style={themedStyle.txtDocCenter}>
                {'Chỉ mình tôi'}
              </Text>
            </View>
            <View style={themedStyle.viewChoice}>
              {renderSelected(DocumentRequestEnum.EveryOne)}
              <Text style={themedStyle.txtDocCenter}>
                {'Mọi người'}
              </Text>
            </View>
          </View>
          <View style={themedStyle.viewDocBottom}>
            <TouchableOpacity style={themedStyle.btnBottomLeft}>
              <Text>
                {'Đồng ý'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onClosePress}
              style={themedStyle.btnBottomRight}>
              <Text>
                {'Đóng'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const ModalDocumentRequest = withStyles(ModalDocumentRequestComponent, (theme: ThemeType) => ({
  viewModal: {
    alignItems: 'center',
    flex: 1,
  },
  viewBox: {
    width: pxToPercentage(350),
    height: pxToPercentage(400),
    backgroundColor: theme['color-primary-20'],
  },
  viewIcon: {
    alignItems: 'flex-end',
  },
  iconClose: {
    tintColor: theme['color-primary-21'],
    width: pxToPercentage(30),
    height: pxToPercentage(30),
    marginTop: pxToPercentage(5),
    marginLeft: pxToPercentage(5),
  },
  viewDoc: {
    flexDirection: 'column',
    flex: 1,
  },
  viewDocTop: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  txtDocTop: {
    fontSize: pxToPercentage(20),
    ...textStyle.proDisplayRegular,
  },
  txtInputTop: {
    width: pxToPercentage(300),
    height: pxToPercentage(80),
    borderWidth: pxToPercentage(1),
    fontSize: pxToPercentage(14),
    ...textStyle.proDisplayRegular,
    borderRadius: pxToPercentage(10),
    paddingLeft: pxToPercentage(5),
    marginTop: pxToPercentage(15),
  },
  viewDocCenter: {
    marginLeft: pxToPercentage(60),
    marginTop: pxToPercentage(42),
    fontSize: pxToPercentage(15),
    ...textStyle.proDisplayRegular,
    flex: 1,
  },
  btnChoice: {
    width: pxToPercentage(20),
    height: pxToPercentage(20),
    borderRadius: pxToPercentage(10),
    borderColor: theme['color-primary-2'],
    borderWidth: pxToPercentage(1),
    marginBottom: pxToPercentage(5),
  },
  btnChoiceSelected: {
    width: pxToPercentage(20),
    height: pxToPercentage(20),
    borderRadius: pxToPercentage(10),
    borderColor: theme['color-primary-2'],
    borderWidth: pxToPercentage(3),
    marginBottom: pxToPercentage(10),
  },
  txtDocCenterFist: {
    marginLeft: pxToPercentage(10),
    marginBottom: pxToPercentage(10),
    fontSize: pxToPercentage(14),
    ...textStyle.proDisplayRegular,
  },
  txtDocCenter: {
    marginLeft: pxToPercentage(10),
    fontSize: pxToPercentage(14),
    ...textStyle.proDisplayRegular,
  },
  viewDocBottom: {
    margin: pxToPercentage(20),
    marginTop: pxToPercentage(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  btnBottomLeft: {
    width: pxToPercentage(140),
    height: pxToPercentage(30),
    backgroundColor: theme['color-primary-7'],
    borderRadius: pxToPercentage(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtTextBottom: {
    fontSize: pxToPercentage(14),
    ...textStyle.proDisplayRegular,
  },
  viewChoice: {
    flexDirection: 'row',
  },
  btnBottomRight: {
    width: pxToPercentage(140),
    height: pxToPercentage(30),
    backgroundColor: theme['color-primary-18'],
    borderRadius: pxToPercentage(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBtnSelected: {
    fontSize: pxToPercentage(14),
    ...textStyle.proDisplayRegular,
    color: theme['color-primary-2'],
  },
  txtSelected: {
    fontSize: pxToPercentage(14),
    ...textStyle.proDisplayRegular,
    color: theme['color-primary-0'],
  },
}));
