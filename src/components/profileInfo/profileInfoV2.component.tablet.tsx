import React from 'react';
import {
  View,
  ViewProps,
  Text,
  Image,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { textStyle } from '@src/components';
import { User } from '@src/core/models/user/user.model';
import { RemoteImage } from '@src/assets/images';
import { pxToPercentage } from '@src/core/utils/utils';
import {
  QRCodeIconOther,
  SearchIcon,
  PersonIcon2,
} from '@src/assets/icons';
import { Button } from '../button/button.component';
import { SERVER_ADDRESS } from '../../../config';

interface ComponentProps {
  user: User;
  onProfilePress: () => void;
  onQRCodePress: () => void;
  onSearchPress: () => void;
}

export type ProfileInfoV2TabletProps = ThemedComponentProps & ViewProps & ComponentProps;

const ProfileInfoV2TabletComponent: React.FunctionComponent<ProfileInfoV2TabletProps> = (props) => {
  const { style, themedStyle, user } = props;

  const onProfileButtonPress = (): void => {
    props.onProfilePress();
  };

  const onQRCodeButtonPress = (): void => {
    props.onQRCodePress();
  };

  const onSearchButtonPress = (): void => {
    props.onSearchPress();
  };

  return (
    <View
      style={[
        themedStyle.container,
        style,
      ]}>
      <Image
        resizeMode='cover'
        source={(new RemoteImage(`${SERVER_ADDRESS}${user.avatar}`)).imageSource}
        style={themedStyle.imgAvatar}
      />
      <View style={themedStyle.viewInfo}>
        <Text style={themedStyle.txtFullname}>
          {`Đồng chí ${user.fullName.toUpperCase()}`}
        </Text>
        <Text
          style={[
            themedStyle.txtInfo,
            themedStyle.txtItalic,
          ]}>
          {user.position}
        </Text>
        <Text style={themedStyle.txtInfo}>
          {`Đoàn: ${user.organization}`}
        </Text>
        <View style={themedStyle.viewRow}>
          <Text style={themedStyle.txtInfo}>
            {`Tổ: ${'1'}`}
          </Text>
          <Text
            style={[
              themedStyle.txtInfo,
              themedStyle.txtDelegateNumber,
            ]}>
            {`Số đại biểu: ${user.code}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export const ProfileInfoV2Tablet = withStyles(ProfileInfoV2TabletComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: pxToPercentage(274),
    padding: pxToPercentage(20),
    paddingTop: pxToPercentage(30),
  },
  imgAvatar: {
    height: pxToPercentage(200),
    width: pxToPercentage(150),
    borderRadius: pxToPercentage(16),
    marginRight: pxToPercentage(20),
    marginTop: pxToPercentage(10),
  },
  viewInfo: {
    flex: 1,
    paddingTop: pxToPercentage(10),
    height: pxToPercentage(200),
    justifyContent: 'space-between',
  },
  viewRow: {
    flexDirection: 'row',
  },
  txtFullname: {
    fontSize: pxToPercentage(34),
    color: theme['text-basic-color'],
    ...textStyle.proDisplayBold,
  },
  txtInfo: {
    fontSize: pxToPercentage(34),
    color: theme['text-basic-color'],
    ...textStyle.proDisplayRegular,
  },
  txtDelegateNumber: {
    marginLeft: pxToPercentage(117),
  },
  txtItalic: {
    ...textStyle.proTextRegularItalic,
  },
}));
