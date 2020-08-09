import React, { useState } from 'react';
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
import { pxToPercentage } from '@src/core/utils/utils';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {
  FlashIcon,
  OnFlashIcon,
} from '@src/assets/icons';
import { textStyle } from '@src/components';
import { isTablet } from 'react-native-device-info';
import { RNCamera as Camera } from 'react-native-camera';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { QrCode } from '@src/core/models/qrCode/qrCode.model';

interface ComponentProps {
  onQRCodeScanSucces: (data: QrCode) => void;
}

export type SigInQRCodeProps = ComponentProps & ThemedComponentProps;

const SigInQRCodeComponent: React.FunctionComponent<SigInQRCodeProps> = (props) => {
  const [isOnFlash, setIsOnFlash] = useState<boolean>(false);

  const { themedStyle } = props;

  const onQRCodeScanSucces = (data: QrCode) => {
    props.onQRCodeScanSucces(data);
  };

  const onFlashPress = () => {
    setIsOnFlash(!isOnFlash);
  };

  const renderMarker = (): React.ReactElement => {
    return (
      <View style={themedStyle.viewMarker}>
        <View style={themedStyle.viewMarkerColumn}>
          <View
            style={[
              themedStyle.viewBorderMarker,
              themedStyle.borderTopLeft,
            ]}
          />
          <View
            style={[
              themedStyle.viewBorderMarker,
              themedStyle.borderTopRight,
            ]}
          />
        </View>
        <View style={themedStyle.viewMarkerCenterColumn}>
          <Text style={themedStyle.centerMark}>
            {'+'}
          </Text>
        </View>
        <View
          style={[
            themedStyle.viewMarkerColumn,
            themedStyle.viewBottomColumn,
          ]}>
          <View
            style={[
              themedStyle.viewBorderMarker,
              themedStyle.borderBottomLeft,
            ]}
          />
          <View
            style={[
              themedStyle.viewBorderMarker,
              themedStyle.borderBottomRight,
            ]}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={themedStyle.container}>
      <QRCodeScanner
        reactivate={true}
        reactivateTimeout={3000}
        cameraProps={{ flashMode: isOnFlash ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off }}
        containerStyle={themedStyle.cameraContainer}
        customMarker={renderMarker()}
        showMarker={true}
        topViewStyle={themedStyle.viewTopCamera}
        cameraStyle={themedStyle.camera}
        onRead={onQRCodeScanSucces}
      />
      <View style={themedStyle.viewBottom}>
        <Text style={themedStyle.txt}>
          {'Quét mã QR từ cán bộ điểm danh\nđể đăng nhập '}
        </Text>
        <TouchableOpacity
          style={themedStyle.btnFlash}
          activeOpacity={0.75}
          onPress={onFlashPress}>
          {isOnFlash ? OnFlashIcon(themedStyle.icon) : FlashIcon(themedStyle.icon)}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const SigInQRCode = withStyles(SigInQRCodeComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  camera: {
    minHeight: '100%',
  },
  viewTopCamera: {
    flex: 0,
  },
  viewBottom: {
    position: 'absolute',
    bottom: isTablet() ? pxToPercentage(25) : pxToPercentage(5),
  },
  btnFlash: {
    alignItems: 'center',
    paddingBottom: pxToPercentage(20),
  },
  cameraContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    textAlign: 'center',
    fontSize: isTablet() ? pxToPercentage(50) : pxToPercentage(18),
    color: theme['color-custom-100'],
    ...textStyle.proDisplayRegular,
  },
  icon: {
    height: isTablet() ? pxToPercentage(60) : pxToPercentage(24),
    width: isTablet() ? pxToPercentage(60) : pxToPercentage(24),
    marginTop: isTablet() ? pxToPercentage(30) : pxToPercentage(10),
  },
  viewMarker: {
    marginBottom: isTablet() ? 0 : getStatusBarHeight() + pxToPercentage(80),
    height: isTablet() ? pxToPercentage(600) : pxToPercentage(250),
    width: isTablet() ? pxToPercentage(600) : pxToPercentage(250),
  },
  viewMarkerColumn: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  viewBottomColumn: {
    alignItems: 'flex-end',
  },
  viewBorderMarker: {
    height: isTablet() ? pxToPercentage(40) : pxToPercentage(20),
    width: isTablet() ? pxToPercentage(40) : pxToPercentage(20),
    borderColor: theme['color-custom-100'],
  },
  borderTopLeft: {
    borderTopWidth: isTablet() ? pxToPercentage(8) : pxToPercentage(3),
    borderLeftWidth: isTablet() ? pxToPercentage(8) : pxToPercentage(3),
  },
  borderTopRight: {
    borderTopWidth: isTablet() ? pxToPercentage(8) : pxToPercentage(3),
    borderRightWidth: isTablet() ? pxToPercentage(8) : pxToPercentage(3),
  },
  borderBottomLeft: {
    borderBottomWidth: isTablet() ? pxToPercentage(8) : pxToPercentage(3),
    borderLeftWidth: isTablet() ? pxToPercentage(8) : pxToPercentage(3),
  },
  borderBottomRight: {
    borderBottomWidth: isTablet() ? pxToPercentage(8) : pxToPercentage(3),
    borderRightWidth: isTablet() ? pxToPercentage(8) : pxToPercentage(3),
  },
  viewMarkerCenterColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerMark: {
    fontSize: isTablet() ? pxToPercentage(64) : pxToPercentage(28),
    color: theme['color-custom-100'],
    ...textStyle.proDisplayBold,
  },
}));
