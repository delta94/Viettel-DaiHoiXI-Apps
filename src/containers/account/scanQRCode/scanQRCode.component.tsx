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
import {
  CloseIcon,
  PhotoLibraryIcon,
  QRCodeIcon,
} from '@src/assets/icons';
import { isTablet } from 'react-native-device-info';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import { ModalScanQRCode } from './modalScanQRCode.component';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { heightPercentageToDP } from 'react-native-responsive-screen';

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
        <View style={themedStyle.sectionTop}>
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
                <Text style={themedStyle.txtPhotoLibrary}>
                  {'Thư viện'}
                </Text>
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
            <Text style={themedStyle.txtQR}>
              {'Mã QR của tôi'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={themedStyle.sectionFooter}>
          <Text style={themedStyle.txtFooter}>
            {'Quét mã để truy cập nhanh vào\ncác tính năng của ứng dụng'}
          </Text>
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
    paddingTop: getStatusBarHeight(true),
    backgroundColor: theme['background-custom-color-2'],
  },
  sectionTop: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: isTablet() ? pxToPercentage(10) : pxToPercentage(50),
  },
  sectionFooter: {
    height: isTablet() ? pxToPercentage(100) : pxToPercentage(150),
    backgroundColor: theme['background-basic-color-1'],
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: isTablet() ? pxToPercentage(20) : pxToPercentage(30),
  },
  txtFooter: {
    fontSize: isTablet() ? pxToPercentage(15) : pxToPercentage(17),
    textAlign: 'center',
    color: theme['background-custom-color-2'],
  },
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    height: heightPercentageToDP(6.5),
    paddingHorizontal: pxToPercentage(15),
  },
  viewBody: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnMyQR: {
    alignItems: 'center',
  },
  iconQRCode: {
    width: isTablet() ? pxToPercentage(25) : pxToPercentage(30),
    height: isTablet() ? pxToPercentage(25) : pxToPercentage(30),
    tintColor: theme['background-custom-color-3'],
  },
  txtQR: {
    fontSize: isTablet() ? pxToPercentage(13) : pxToPercentage(16),
    color: theme['background-basic-color-1'],
    ...textStyle.bold,
  },
  viewQRCode: {
    backgroundColor: theme['background-custom-color-4'],
    height: isTablet() ? pxToPercentage(270) : pxToPercentage(335),
    width: isTablet() ? pxToPercentage(270) : pxToPercentage(335),
    borderRadius: isTablet() ? pxToPercentage(20) : pxToPercentage(15),
  },
  btnPhotoLibrary: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtPhotoLibrary: {
    marginLeft: isTablet() ? pxToPercentage(5) : pxToPercentage(10),
    fontSize: isTablet() ? pxToPercentage(10) : pxToPercentage(14),
    color: theme['background-basic-color-1'],
    marginHorizontal: isTablet() ? pxToPercentage(6) : pxToPercentage(12),
    ...textStyle.bold,
  },
  iconClose: {
    width: isTablet() ? pxToPercentage(17) : pxToPercentage(25),
    height: isTablet() ? pxToPercentage(17) : pxToPercentage(25),
    tintColor: theme['background-custom-color-5'],
  },
  iconPhoto: {
    width: isTablet() ? pxToPercentage(17) : pxToPercentage(25),
    height: isTablet() ? pxToPercentage(17) : pxToPercentage(25),
    tintColor: theme['background-basic-color-1'],
  },
  viewHeaderLeft: {
  },
  viewHeaderRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
}));
