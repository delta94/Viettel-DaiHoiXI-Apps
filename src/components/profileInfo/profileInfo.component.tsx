import React from 'react';
import {
  View,
  ViewProps,
  Text,
  Image,
  TouchableOpacity,
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
import { viewStyle } from '../viewStyle';
import {
  LogoutIconOther,
  EditPersonIconOther,
} from '@src/assets/icons';

interface ComponentProps {
  user: User;
  onEditProfilePress: () => void;
  onLogoutPress: () => void;
}

export type ProfileInfoProps = ThemedComponentProps & ViewProps & ComponentProps;

const ProfileInfoComponent: React.FunctionComponent<ProfileInfoProps> = (props) => {
  const { style, themedStyle, user } = props;

  const onEditProfileButtonPress = (): void => {
    props.onEditProfilePress();
  };

  const onLogoutButtonPress = (): void => {
    props.onLogoutPress();
  };

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
          <Text
            numberOfLines={1}
            style={[
              themedStyle.txtInfo,
              themedStyle.txtBold,
            ]}>
            {`Đồng chí ${user.full_name.toUpperCase()}`}
          </Text>
          <Text
            numberOfLines={2}
            style={[
              themedStyle.txtInfo,
              themedStyle.txtItalic,
            ]}>
            {user.position}
          </Text>
          <Text
            numberOfLines={1}
            style={themedStyle.txtInfo}>
            {'Cơ quan: '}
            <Text
              numberOfLines={1}
              style={[
                themedStyle.txtInfo,
                themedStyle.txtBold,
              ]}>
              {user.unit}
            </Text>
          </Text>
          <Text
            numberOfLines={1}
            style={themedStyle.txtInfo}>
            {'Số điện thoại: '}
            <Text
              numberOfLines={1}
              style={[
                themedStyle.txtInfo,
                themedStyle.txtBold,
              ]}>
              {user.phone}
            </Text>
          </Text>
        </View>
      </View>
      <View style={themedStyle.sectionFooter}>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={onEditProfileButtonPress}
          style={themedStyle.btn}>
          {EditPersonIconOther(themedStyle.iconBtnEdit)}
          <Text style={themedStyle.txtBtn}>
            {'SỬA THÔNG TIN'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={onLogoutButtonPress}
          style={themedStyle.btn}>
          {LogoutIconOther(themedStyle.iconBtnLogout)}
          <Text style={themedStyle.txtBtn}>
            {'ĐĂNG XUẤT'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const ProfileInfo = withStyles(ProfileInfoComponent, (theme: ThemeType) => ({
  container: {
    borderRadius: pxToPercentage(12.5),
    backgroundColor: theme['color-basic-100'],
    ...viewStyle.shadow2,
  },
  sectionBody: {
    flexDirection: 'row',
    padding: pxToPercentage(12.5),
  },
  sectionFooter: {
    flexDirection: 'row',
    height: pxToPercentage(35),
    borderBottomLeftRadius: pxToPercentage(12.5),
    borderBottomRightRadius: pxToPercentage(12.5),
    backgroundColor: theme['background-basic-color-4'],
  },
  btn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtn: {
    textAlign: 'center',
    fontSize: pxToPercentage(12),
    marginLeft: pxToPercentage(5),
    color: theme['color-primary-2'],
    ...textStyle.proTextSemibold,
  },
  iconBtnEdit: {
    tintColor: theme['color-primary-2'],
    width: pxToPercentage(22.5),
    height: pxToPercentage(22.5),
  },
  iconBtnLogout: {
    tintColor: theme['color-primary-2'],
    width: pxToPercentage(20),
    height: pxToPercentage(20),
  },
  imgAvatar: {
    height: pxToPercentage(105),
    width: pxToPercentage(75),
    borderRadius: pxToPercentage(5),
    marginRight: pxToPercentage(12.5),
  },
  viewInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  txtInfo: {
    fontSize: pxToPercentage(13),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegular,
  },
  txtBold: {
    ...textStyle.proTextBold,
  },
  txtItalic: {
    ...textStyle.proTextRegularItalic,
  },
}));
