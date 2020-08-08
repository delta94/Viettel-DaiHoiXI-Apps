import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { User as UserModal } from '@src/core/models/user/user.model';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { ProfileInfoV3Tablet } from '@src/components/profileInfo/profileinfoV3.component.tablet';
import { QRCodeIconOther } from '@src/assets/icons';
import { textStyle } from '@src/components';

interface ComponentProps {
  user: UserModal;
}

export type ScanQRCodeTabletProps = ThemedComponentProps & ComponentProps;

const ScanQRCodeTabletComponent: React.FunctionComponent<ScanQRCodeTabletProps> = (props) => {
  const { themedStyle } = props;

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewCard}>
        <ProfileInfoV3Tablet user={props.user} />
        <View style={themedStyle.viewQRCode}>
          {QRCodeIconOther(themedStyle.iconQRCode)}
          <Text style={themedStyle.txtNote}>
            {'Quý đại biểu vui lòng quẹt QR CODE qua máy\n scan mã đặt ở bàn điểm danh để điểm danh\n trước khi vào hội trường'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export const ScanQRCodeTablet = withStyles(ScanQRCodeTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: pxToPercentage(31),
    paddingBottom: pxToPercentage(31),
    backgroundColor: theme['color-primary-2'],
  },
  viewCard: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: pxToPercentage(40),
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
  },
  viewQRCode: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconQRCode: {
    width: pxToPercentage(420),
    height: pxToPercentage(420),
    tintColor: theme['color-primary-13'],
  },
  txtNote: {
    marginTop: pxToPercentage(40),
    fontSize: pxToPercentage(34),
    textAlign: 'center',
    ...textStyle.proDisplayRegular,
  },
}));
