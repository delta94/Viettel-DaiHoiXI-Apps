import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { CloseIcon, PhotoLibraryIcon, QRCodeIcon } from '@src/assets/icons';
import { isTablet } from 'react-native-device-info';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import { ModalScanQRCode } from './modalScanQRCode.component';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export type ScanQRCodeProps = ThemedComponentProps;

const ScanQRCodeComponent: React.FunctionComponent<ScanQRCodeProps> = (props) => {
  const [isVisibleMyQRCode, setIsVisibleMyQRCode] = useState<boolean>(false);

  const onMyQRPress = () => {
    setIsVisibleMyQRCode(true);
  };

  const onClosePress = () => {
    setIsVisibleMyQRCode(false);
  };

  const onKeyboarDismiss = () => {
    Keyboard.dismiss();
  };

  const { themedStyle } = props;

  return (
    <TouchableWithoutFeedback onPress={onKeyboarDismiss}>
      <View style={themedStyle.container}>
        <View style={themedStyle.view}>
          <View style={themedStyle.viewHeader}>
            <View style={themedStyle.viewHeaderLeft}>
              <TouchableOpacity
                activeOpacity={0.75}>
                {CloseIcon(themedStyle.iconClose)}
              </TouchableOpacity>
            </View>
            <View style={themedStyle.viewHeaderRight}>
              <TouchableOpacity
                activeOpacity={0.75}
                style={themedStyle.btnPhotoLibrary}>
                {PhotoLibraryIcon(themedStyle.iconPhoto)}
                <Text style={themedStyle.txt}>Thư viện</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={themedStyle.viewBody}>
            <View style={themedStyle.viewQRCode} />
          </View>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={onMyQRPress}
            style={themedStyle.btnMyQR}>
            {QRCodeIcon(themedStyle.iconQRCode)}
            <Text style={themedStyle.txtQR}> Mã QR của tôi</Text>
          </TouchableOpacity>
        </View>
        <View style={themedStyle.viewFooter}>
          <Text style={themedStyle.txtFooter}>Quét mã để truy cập nhanh vào{'\n'} các tính năng của ứng dụng</Text>
        </View>
        <ModalScanQRCode
          isVisible={isVisibleMyQRCode}
          onClosePress={onClosePress}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export const ScanQRCode = withStyles(ScanQRCodeComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: 'rgba(160, 160, 161, 1)',
  },
  ////
  view: {
    height: hp('80%'),
  },
  viewHeader: {
    flexDirection: 'row',
    marginTop: isTablet() ? pxToPercentage(20) : pxToPercentage(30),
    marginHorizontal: pxToPercentage(15),
  },
  btnPhotoLibrary: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    marginLeft: isTablet() ? pxToPercentage(5) : pxToPercentage(10),
    fontSize: isTablet() ? pxToPercentage(10) : pxToPercentage(14),
    color: 'rgba(255, 255, 255, 1)',
    marginHorizontal: isTablet() ? pxToPercentage(6) : pxToPercentage(12),
    ...textStyle.bold,
  },
  txtQR: {
    fontSize: isTablet() ? pxToPercentage(13) : pxToPercentage(16),
    color: 'rgba(255, 255, 255, 1)',
    ...textStyle.bold,
  },
  iconClose: {
    width: isTablet() ? pxToPercentage(17) : pxToPercentage(25),
    height: isTablet() ? pxToPercentage(17) : pxToPercentage(25),
    tintColor: 'rgba(64, 64, 64, 1)',
  },
  iconQRCode: {
    width: isTablet() ? pxToPercentage(25) : pxToPercentage(30),
    height: isTablet() ? pxToPercentage(25) : pxToPercentage(30),
    tintColor: 'rgba(242, 242, 242, 1)',
  },
  iconPhoto: {
    width: isTablet() ? pxToPercentage(17) : pxToPercentage(25),
    height: isTablet() ? pxToPercentage(17) : pxToPercentage(25),
    tintColor: 'rgba(255, 255, 255, 1)',
  },
  viewHeaderLeft: {
  },
  viewHeaderRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  viewBody: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: isTablet() ? pxToPercentage(40) : pxToPercentage(50),
    height: hp('45%'),
  },
  viewQRCode: {
    backgroundColor: 'rgba(222, 222, 222, 1)',
    height: isTablet() ? pxToPercentage(270) : pxToPercentage(335),
    width: isTablet() ? pxToPercentage(270) : pxToPercentage(335),
    borderRadius: isTablet() ? 20 : 15,
  },
  btnMyQR: {
    alignItems: 'center',
    marginTop: pxToPercentage(40),
  },
  viewFooter: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    alignItems: 'center',
    flex: 1,
  },
  txtFooter: {
    marginTop: isTablet() ? pxToPercentage(25) : pxToPercentage(40),
    fontSize: isTablet() ? pxToPercentage(15) : pxToPercentage(17),
    textAlign: 'center',
    color: 'rgba(160, 160, 161, 1)',
  },
}));
