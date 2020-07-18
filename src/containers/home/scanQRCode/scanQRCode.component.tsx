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
  CloseIconOther,
  PhotoLibraryIconOther,
  QRCodeIconOther,
} from '@src/assets/icons';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import { MyQRCodeModal } from './myQRCodeModal.component';
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
        <View style={themedStyle.viewHeader}>
          <View style={themedStyle.viewHeaderLeft}>
            {<TouchableOpacity
              activeOpacity={0.75}
              onPress={onBackPress}>
              {CloseIconOther(themedStyle.iconClose)}
            </TouchableOpacity>}
          </View>
          <View style={themedStyle.viewHeaderRight}>
            <TouchableOpacity
              activeOpacity={0.75}
              style={themedStyle.btnPhotoLibrary}>
              {PhotoLibraryIconOther(themedStyle.iconPhoto)}
              <Text style={themedStyle.txtPhotoLibrary}>
                {'Thư viện'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={themedStyle.viewBody}>
          <View style={themedStyle.viewQRCode} />
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={onMyQRPress}
            style={themedStyle.btnMyQR}>
            {QRCodeIconOther(themedStyle.iconQRCode)}
            <Text style={themedStyle.txtQR}>
              {'Mã QR của tôi'}
            </Text>
          </TouchableOpacity>
        </View>
        <MyQRCodeModal
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
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    height: heightPercentageToDP(6.5),
    paddingHorizontal: pxToPercentage(16),
  },
  viewBody: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: heightPercentageToDP(6.5),
  },
  viewQRCode: {
    height: pxToPercentage(343),
    width: pxToPercentage(343),
    borderRadius: pxToPercentage(16),
    backgroundColor: theme['background-custom-color-4'],
  },
  btnMyQR: {
    marginTop: pxToPercentage(25),
    alignItems: 'center',
  },
  iconQRCode: {
    width: pxToPercentage(30),
    height: pxToPercentage(30),
    tintColor: theme['background-custom-color-3'],
  },
  txtQR: {
    fontSize: pxToPercentage(14),
    marginTop: pxToPercentage(5),
    color: theme['background-basic-color-1'],
    ...textStyle.proTextBold,
  },
  btnPhotoLibrary: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtPhotoLibrary: {
    marginLeft: pxToPercentage(5),
    fontSize: pxToPercentage(14),
    color: theme['background-basic-color-1'],
    ...textStyle.proTextBold,
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
