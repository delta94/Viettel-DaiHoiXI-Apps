import React from 'react';
import {
  View,
  ViewProps,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { textStyle } from '@src/components';
import {
  RemoteImage,
  imageBannerName,
} from '@src/assets/images';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '../viewStyle';
import { User as UserModal } from '@src/core/models/user/user.model';
import { Delegate as DelegateModal } from '@src/core/models/delegate/delegate.model';
import { SERVER_ADDRESS } from '../../../config';

interface ComponentProps {
  user: UserModal | DelegateModal;
}

export type ProfileInfoV3TabletProps = ThemedComponentProps & ViewProps & ComponentProps;

const ProfileInfoV3TabletComponent: React.FunctionComponent<ProfileInfoV3TabletProps> = (props) => {
  const { style, themedStyle, user } = props;

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
      <Text style={themedStyle.txtInfo}>
        {'Đại biểu'}
      </Text>
      <ImageBackground
        source={imageBannerName.imageSource}
        style={themedStyle.imgBannerName}>
        <Text
          numberOfLines={2}
          style={themedStyle.txtFullname}>
          {user.fullName.toUpperCase()}
        </Text>
      </ImageBackground>
      <Text
        numberOfLines={5}
        style={themedStyle.txtPosition}>
        {user.position}
      </Text>
    </View>
  );
};

export const ProfileInfoV3Tablet = withStyles(ProfileInfoV3TabletComponent, (theme: ThemeType) => ({
  container: {
    width: pxToPercentage(688),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: pxToPercentage(10),
    borderTopLeftRadius: pxToPercentage(40),
    borderBottomLeftRadius: pxToPercentage(40),
    backgroundColor: theme['color-primary-20'],
    ...viewStyle.shadow2,
  },
  imgAvatar: {
    height: pxToPercentage(320),
    width: pxToPercentage(240),
    borderRadius: pxToPercentage(16),
  },
  txtInfo: {
    marginTop: pxToPercentage(36),
    fontSize: pxToPercentage(34),
    textAlign: 'center',
    ...textStyle.proDisplayRegular,
  },
  txtFullname: {
    fontSize: pxToPercentage(34),
    color: theme['color-custom-100'],
    textAlign: 'center',
    ...textStyle.proDisplayBold,
  },
  txtPosition: {
    marginTop: pxToPercentage(5),
    fontSize: pxToPercentage(34),
    color: theme['text-basic-color'],
    textAlign: 'center',
    ...textStyle.proDisplayRegular,
  },
  imgBannerName: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: pxToPercentage(10),
    height: pxToPercentage(80),
    width: pxToPercentage(550),
  },
}));
