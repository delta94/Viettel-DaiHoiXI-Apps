import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Modal from 'react-native-modal';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  QRCodeIcon,
} from '@src/assets/icons';
import { pxToPercentage } from '@src/core/utils/utils';

interface ComponentProps {
  isVisible: boolean;
  onClosePress: () => void;
}

export type ModalScanQRCodeProps = ThemedComponentProps & ComponentProps;

const ModalScanQRCodeComponent: React.FunctionComponent<ModalScanQRCodeProps> = (props) => {
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
      backdropColor={null}
      swipeDirection={['down']}
      onSwipeComplete={onClosePress}
      onBackButtonPress={onClosePress}
      backdropTransitionInTiming={1}
      backdropTransitionOutTiming={1}
      style={themedStyle.container}>
      <View style={themedStyle.viewBox}>
        <View style={themedStyle.viewHeader}>
          <Text style={themedStyle.txtTitle}>{'MÃ QR CODE CỦA TÔI'}</Text>
        </View>
        <View>
          <View style={themedStyle.viewQRCode}>
            {QRCodeIcon(themedStyle.iconQRCode)}
          </View>
          <Text style={themedStyle.txtFooter}>
            {'Quý đại biểu vui lòng quẹt QR CODE qua máy\n scan mã đặt ở bàn điểm danh để điểm danh\n trước khi vào hội trường'}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export const ModalScanQRCode = withStyles(ModalScanQRCodeComponent, (theme: ThemeType) => ({
  container: {
    margin: 0,
  },
  viewBox: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme['color-primary-11'],
    borderRadius: pxToPercentage(10),
  },
  txtTitle: {
    fontSize: pxToPercentage(18),
    alignItems: 'center',
    fontWeight: 'bold',
    paddingVertical: pxToPercentage(10),
  },
  txtFooter: {
    fontSize: pxToPercentage(17),
    textAlign: 'center',
    color: theme['background-custom-color-2'],
    marginTop: pxToPercentage(20),
  },
  iconClose: {
    width: pxToPercentage(28),
    height: pxToPercentage(28),
  },
  iconQRCode: {
    width: pxToPercentage(250),
    height: pxToPercentage(250),
  },
  bntClose: {
    alignSelf: 'flex-start',
    marginTop: pxToPercentage(5),
    marginLeft: pxToPercentage(5),
  },
  viewQRCode: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: pxToPercentage(20),
  },
}));
