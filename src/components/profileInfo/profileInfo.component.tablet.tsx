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

export type ProfileInfoTabletProps = ThemedComponentProps & ViewProps & ComponentProps;

const ProfileInfoTabletComponent: React.FunctionComponent<ProfileInfoTabletProps> = (props) => {
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
            themedStyle.txtPosition,
          ]}>
          {user.position}
        </Text>
        <Text style={themedStyle.txtInfo}>
          {`Đơn vị: ${user.organization}`}
        </Text>
        <Text style={themedStyle.txtInfo}>
          {`Số điện thoại: ${user.phoneNumber}`}
        </Text>
      </View>
      <View style={themedStyle.viewBtns}>
        <Button
          title='Cá nhân'
          icon={PersonIcon2}
          style={themedStyle.btnProfile}
          iconStyle={themedStyle.iconProfile}
          onPress={onProfileButtonPress}
        />
        <Button
          title='Tìm kiếm'
          icon={SearchIcon}
          style={themedStyle.btnSearch}
          iconStyle={themedStyle.iconSearch}
          onPress={onSearchButtonPress}
        />
        <Button
          title='Mã QR'
          icon={QRCodeIconOther}
          style={themedStyle.btnQR}
          iconStyle={themedStyle.iconQRCode}
          onPress={onQRCodeButtonPress}
        />
      </View>
    </View>
  );
};

export const ProfileInfoTablet = withStyles(ProfileInfoTabletComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
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
  viewBtns: {
    position: 'absolute',
    right: 0,
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
  txtPosition: {
    // flex: 1,
  },
  txtItalic: {
    ...textStyle.proTextRegularItalic,
  },
  btnProfile: {
    height: pxToPercentage(80),
    marginRight: pxToPercentage(20),
  },
  btnSearch: {
    height: pxToPercentage(80),
    marginRight: pxToPercentage(20),
  },
  btnQR: {
    height: pxToPercentage(80),
  },
  iconProfile: {
    width: pxToPercentage(49.38),
    height: pxToPercentage(52.38),
  },
  iconSearch: {
    width: pxToPercentage(54),
    height: pxToPercentage(54),
  },
  iconQRCode: {
    width: pxToPercentage(52),
    height: pxToPercentage(52),
  },
}));
