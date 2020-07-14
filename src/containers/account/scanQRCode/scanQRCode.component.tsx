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
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import { ModalScanQRCode } from './modalScanQRCode.component';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { heightPercentageToDP } from 'react-native-responsive-screen';

interface ComponentProps {
  onBackPress: () => void;
}

export type ScanQRCodeProps = ThemedComponentProps & ComponentProps;

const ScanQRCodeComponent: React.FunctionComponent<ScanQRCodeProps> = (props) => {
  const [isVisibleMyQRCode, setIsVisibleMyQRCode] = useState<boolean>(false);

  const onBackPress = (): void => {
    props.onBackPress();
  };

  const onMyQRPress = (): void => {
    setIsVisibleMyQRCode(true);
  };

  const onClosePress = (): void => {
    setIsVisibleMyQRCode(false);
  };

  const onKeyboarDismiss = (): void => {
    Keyboard.dismiss();
  };

  const { themedStyle } = props;

  return (
    <TouchableWithoutFeedback onPress={onKeyboarDismiss}>
      <View style={themedStyle.container}>
        <View style={themedStyle.sectionTop}>
          <View style={themedStyle.viewHeader}>
            <View style={themedStyle.viewHeaderLeft}>
              {<TouchableOpacity
                activeOpacity={0.75}
                onPress={onBackPress}>
                {CloseIcon(themedStyle.iconClose)}
              </TouchableOpacity>}
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
            {'Quý đại biểu vui lòng quẹt QR CODE qua máy\n scan mã đặt ở bàn điểm danh để điểm danh\n trước khi vào hội trường'}
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
    paddingTop: getStatusBarHeight(false),
    backgroundColor: theme['background-custom-color-2'],
  },
  sectionTop: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: heightPercentageToDP(2.5),
  },
  sectionFooter: {
    height: heightPercentageToDP(20),
    backgroundColor: theme['background-basic-color-1'],
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: pxToPercentage(30),
  },
  txtFooter: {
    fontSize: pxToPercentage(17),
    textAlign: 'center',
    color: theme['background-custom-color-2'],
  },
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    height: heightPercentageToDP(6.5),
    paddingHorizontal: pxToPercentage(16),
  },
  viewBody: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnMyQR: {
    alignItems: 'center',
  },
  iconQRCode: {
    width: pxToPercentage(30),
    height: pxToPercentage(30),
    tintColor: theme['background-custom-color-3'],
  },
  txtQR: {
    fontSize: pxToPercentage(16),
    color: theme['background-basic-color-1'],
    ...textStyle.bold,
  },
  viewQRCode: {
    backgroundColor: theme['background-custom-color-4'],
    height: pxToPercentage(343),
    width: pxToPercentage(343),
    borderRadius: pxToPercentage(15),
  },
  btnPhotoLibrary: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtPhotoLibrary: {
    marginLeft: pxToPercentage(10),
    fontSize: pxToPercentage(14),
    color: theme['background-basic-color-1'],
    ...textStyle.bold,
  },
  iconClose: {
    width: pxToPercentage(25),
    height: pxToPercentage(25),
    tintColor: theme['background-custom-color-5'],
  },
  iconPhoto: {
    width: pxToPercentage(25),
    height: pxToPercentage(25),
    tintColor: theme['background-basic-color-1'],
  },
  viewHeaderLeft: {
  },
  viewHeaderRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
}));
