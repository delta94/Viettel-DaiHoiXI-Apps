import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground, Dimensions,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { viewStyle } from '@src/components/viewStyle';
import { Button } from '@src/components/button/button.component';
import { FlashIcon } from '@src/assets/icons';
import { textStyle } from '@src/components';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { isTablet } from 'react-native-device-info';

interface ComponentProps {
  onBackPress: () => void;
  onQRCodeScanSucces: () => void;
}

export type OtpTabletProps = ComponentProps & ThemedComponentProps;

const OtpTabletComponent: React.FunctionComponent<OtpTabletProps> = (props) => {
  const [otp, setOtp] = useState<string | undefined>(undefined);

  const onBackPress = (): void => {
    props.onBackPress();
  };

  const { themedStyle } = props;

  const onSuccess = e => {
    return props.onQRCodeScanSucces();
  };

  const renderMarker = (): React.ReactElement => {
    return (
      <View style={themedStyle.viewMarker}>
        <View style={themedStyle.viewMarkerColumn}>
          <View style={[
            themedStyle.viewBorderMarker,
            themedStyle.borderTopLeft,
          ]} />
          <View style={[
            themedStyle.viewBorderMarker,
            themedStyle.borderTopRight,
          ]} />
        </View>
        <View style={themedStyle.viewMarkerCenterColumn}>
          <Text style={themedStyle.centerMark}>
            {'+'}
          </Text>
        </View>

        <View style={[
          themedStyle.viewMarkerColumn,
          themedStyle.viewBottomColumn,
        ]}>
          <View style={[
            themedStyle.viewBorderMarker,
            themedStyle.borderBottomLeft,
          ]} />
          <View style={[
            themedStyle.viewBorderMarker,
            themedStyle.borderBottomRight,
          ]} />
        </View>
      </View>
    );
  };

  return (
    <View style={themedStyle.container}>
      <QRCodeScanner
        containerStyle={themedStyle.cameraContainer}
        customMarker={renderMarker()}
        showMarker={true}
        topViewStyle={{ flex: 0 }}
        cameraStyle={isTablet() ? themedStyle.cameraTablet : themedStyle.camera}
        onRead={onSuccess}
        bottomViewStyle={themedStyle.bottomStyle}
        bottomContent={
          <TouchableOpacity style={themedStyle.btnFlash}
            activeOpacity={0.75}>
            <Text style={themedStyle.txt}>
              {'Quét mã QR từ cán bộ điểm danh\nđể đăng nhập '}
            </Text>
            {FlashIcon(themedStyle.icon)}
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export const SigInQRCode = withStyles(OtpTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-primary-11'],
  },
  bottomStyle: {
    justifyContent: 'flex-end',
    marginBottom: pxToPercentage(40),
  },
  btnFlash: {
    alignItems: 'center',
  },
  cameraContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: pxToPercentage(18),
    color: theme['color-custom-100'],
    textAlign: 'center',
    ...textStyle.proDisplayRegular,
  },
  icon: {
    height: pxToPercentage(24),
    width: pxToPercentage(22),
    marginTop: pxToPercentage(5),
  },
  camera: {
    minHeight: '100%',
  },
  cameraTablet: {
    minWidth: '100%',
  },
  viewMarker: {
    height: isTablet() ? pxToPercentage(452) : pxToPercentage(250),
    width: isTablet() ? pxToPercentage(452) : pxToPercentage(250),
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
    flex: 1, justifyContent: 'center',
    alignItems: 'center',
  },
  centerMark: {
    fontSize: isTablet() ? pxToPercentage(64) : pxToPercentage(28),
    color: theme['color-custom-100'],
  },
}));
