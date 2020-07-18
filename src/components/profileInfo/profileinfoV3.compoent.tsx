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
import { UserDetail as UserDetailModel } from '@src/core/models/user/userDetail.model';
import {
  RemoteImage,
  imageBannerName,
} from '@src/assets/images';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '../viewStyle';

interface ComponentProps {
  user: UserDetailModel;
}

export type ProfileInfoV3Props = ThemedComponentProps & ViewProps & ComponentProps;

const ProfileInfoV3Component: React.FunctionComponent<ProfileInfoV3Props> = (props) => {
  const { style, themedStyle, user } = props;

  return (
    <View
      style={[
        themedStyle.container,
        style,
      ]}>
      <View style={themedStyle.sectionBody}>
        <Image
          resizeMode='cover'
          source={(new RemoteImage(user.avatar)).imageSource}
          style={themedStyle.imgAvatar}
        />
        <View style={themedStyle.viewInfo}>
          <ImageBackground
            source={imageBannerName.imageSource}
            style={themedStyle.imgBannerName}>
            <Text
              numberOfLines={1}
              style={themedStyle.txtFullname}>
              {user.full_name.toUpperCase()}
            </Text>
          </ImageBackground>
          <Text
            numberOfLines={2}
            style={themedStyle.txtPosition}>
            {user.position}
          </Text>
        </View>
      </View>
    </View>
  );
};

export const ProfileInfoV3 = withStyles(ProfileInfoV3Component, (theme: ThemeType) => ({
  container: {
    borderRadius: pxToPercentage(12.5),
    backgroundColor: theme['color-basic-100'],
    ...viewStyle.shadow2,
  },
  sectionBody: {
    flexDirection: 'row',
    padding: pxToPercentage(12.5),
  },
  imgAvatar: {
    height: pxToPercentage(105),
    width: pxToPercentage(75),
    borderRadius: pxToPercentage(5),
    marginRight: pxToPercentage(12.5),
  },
  viewInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtFullname: {
    fontSize: pxToPercentage(15),
    color: theme['color-custom-100'],
    textAlign: 'center',
    ...textStyle.proTextSemibold,
  },
  txtPosition: {
    marginTop: pxToPercentage(5),
    fontSize: pxToPercentage(13),
    color: theme['text-basic-color'],
    textAlign: 'center',
    ...textStyle.proTextRegularItalic,
  },
  imgBannerName: {
    justifyContent: 'center',
    alignItems: 'center',
    height: pxToPercentage(35),
    width: pxToPercentage(35) * (1401 / 225),
  },
}));
