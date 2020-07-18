import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  QRCodeIcon,
  CloseIconOutline,
} from '@src/assets/icons';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import Modal from 'react-native-modal';

interface ComponentProps {
  isVisible: boolean;
  onClosePress: () => void;
}

export type MyQRCodeModalProps = ThemedComponentProps & ComponentProps;

const MyQRCodeModalComponent: React.FunctionComponent<MyQRCodeModalProps> = (props) => {
  const onClosePress = (): void => {
    props.onClosePress();
  };

  const { themedStyle } = props;

  return (
    <Modal
      isVisible={props.isVisible}
      animationIn='slideInUp'
      animationOut='slideOutDown'
      onBackdropPress={onClosePress}
      backdropOpacity={0.5}
      swipeDirection={['down']}
      onSwipeComplete={onClosePress}
      onBackButtonPress={onClosePress}
      backdropTransitionInTiming={1}
      backdropTransitionOutTiming={1}
      style={themedStyle.container}>
      <View style={themedStyle.viewBox}>
        <View style={themedStyle.viewHeader}>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={onClosePress}
            style={themedStyle.btnClose}>
            {CloseIconOutline(themedStyle.iconClose)}
          </TouchableOpacity>
          <Text style={themedStyle.txtTitle}>
            {'MÃ QR CODE CỦA TÔI'}
          </Text>
        </View>
        <View style={themedStyle.viewQRCode}>
          {QRCodeIcon(themedStyle.iconQRCode)}
          <Text style={themedStyle.txtNote}>
            {'Quý đại biểu vui lòng quẹt QR CODE qua máy\n scan mã đặt ở bàn điểm danh để điểm danh\n trước khi vào hội trường'}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export const MyQRCodeModal = withStyles(MyQRCodeModalComponent, (theme: ThemeType) => ({
  container: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  viewBox: {
    height: pxToPercentage(475),
    backgroundColor: 'white',
  },
  viewHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme['color-primary-11'],
  },
  viewQRCode: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: pxToPercentage(20),
  },
  txtTitle: {
    fontSize: pxToPercentage(15),
    paddingVertical: pxToPercentage(10),
    color: theme['text-basic-color'],
    ...textStyle.proTextSemibold,
  },
  iconQRCode: {
    width: pxToPercentage(300),
    height: pxToPercentage(300),
  },
  txtNote: {
    marginTop: pxToPercentage(20),
    fontSize: pxToPercentage(15),
    textAlign: 'center',
    color: theme['background-custom-color-2'],
    ...textStyle.proTextRegular,
  },
  btnClose: {
    position: 'absolute',
    alignSelf: 'flex-start',
    marginLeft: pxToPercentage(5),
  },
  iconClose: {
    width: pxToPercentage(28),
    height: pxToPercentage(28),
    tintColor: theme['color-basic-800'],
  },
}));
