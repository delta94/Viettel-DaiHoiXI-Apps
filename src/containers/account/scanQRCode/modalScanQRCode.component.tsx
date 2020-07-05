import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  CloseIconOutline,
  QRCodeIcon,
  DownloadIcon,
  ShareIconOutline,
  RefreshIconFill,
} from '@src/assets/icons';
import { pxToPercentage } from '@src/core/utils/utils';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
        <TouchableOpacity
          activeOpacity={0.75}
          style={themedStyle.bntClose}
          onPress={onClosePress}>
          {CloseIconOutline(themedStyle.iconClose)}
        </TouchableOpacity>
        <View style={themedStyle.viewQRCode}>
          {QRCodeIcon(themedStyle.iconQRCode)}
        </View>
        <View style={themedStyle.viewButton}>
          <TouchableOpacity
            activeOpacity={0.75}>
            {RefreshIconFill(themedStyle.iconRefresh)}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.75}
            style={themedStyle.btn}>
            {ShareIconOutline(themedStyle.iconShare)}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.75}
            style={themedStyle.btn}>
            {DownloadIcon(themedStyle.iconDownload)}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export const ModalScanQRCode = withStyles(ModalScanQRCodeComponent, (theme: ThemeType) => ({
  container: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  viewBox: {
    height: hp(55),
    backgroundColor: 'white',
  },
  iconClose: {
    width: pxToPercentage(28),
    height: pxToPercentage(28),
  },
  iconQRCode: {
    width: pxToPercentage(200),
    height: pxToPercentage(200),
  },
  iconShare: {
    width: pxToPercentage(37),
    height: pxToPercentage(37),
  },
  iconRefresh: {
    width: pxToPercentage(30),
    height: pxToPercentage(30),
  },
  iconDownload: {
    width: pxToPercentage(32),
    height: pxToPercentage(32),
  },
  btn: {
    marginLeft: pxToPercentage(80),
  },
  bntClose: {
    alignSelf: 'flex-start',
    marginTop: pxToPercentage(5),
    marginLeft: pxToPercentage(5),
  },
  viewQRCode: {
    height: hp(38),
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewButton: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: pxToPercentage(5),
  },
}));
