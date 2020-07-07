import React from 'react';
import {
  View,
  ViewProps,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
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
  QRCodeIcon,
  LogoutIconThin,
  ChatIconDark,
  UserEditIcon,
} from '@src/assets/icons';

interface ComponentProps {
  user: User;
  children?: React.ReactNode;
}

import { SafeAreaView } from 'react-navigation';

export type ProfileInfoProps = ThemedComponentProps & ViewProps & ComponentProps;

const ProfileInfoComponent: React.FunctionComponent<ProfileInfoProps> = (props) => {
  const { style, themedStyle, user, children, ...restProps } = props;

  const Footer = () => (
    <View  {...props} style={themedStyle.fotterView}>
      <TouchableOpacity
        style={themedStyle.btn}
        activeOpacity={0.75}>
        {UserEditIcon(themedStyle.iconLogout)}
        <Text style={themedStyle.txtButton}>{'SỬA THÔNG TIN'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={themedStyle.btn}
        activeOpacity={0.75}>
        {LogoutIconThin(themedStyle.iconLogout)}
        <Text style={themedStyle.txtButton}>{'ĐĂNG XUẤT'}</Text>
      </TouchableOpacity>
    </View>
  );

  const TopMenu = () => (
    <View  {...props} style={themedStyle.headerView}>
      {QRCodeIcon(themedStyle.qrCodeicon)}
      {ChatIconDark(themedStyle.qrCodeicon)}
    </View>
  );

  const CardItem = () => {
    return (
      <View style={themedStyle.cardDetailView}>
        <Image
          resizeMode='stretch'
          source={(new RemoteImage(user.avatar)).imageSource}
          style={themedStyle.img}
        />
        <View style={themedStyle.sectionDetails}>
          <Text
            numberOfLines={1}
            style={themedStyle.txtName}>
            {'Đồng chí '}{user.full_name}
          </Text>
          <Text
            numberOfLines={2}
            style={themedStyle.txtPosition}>
            {user.position}
          </Text>
          <Text
            numberOfLines={1}
            style={themedStyle.txtPhone}>
            {'Cơ quan: '}{user.organ}
          </Text>
          <Text
            numberOfLines={1}
            style={themedStyle.txtPhone}>
            {'Số điện thoại: '}{user.phone}
          </Text>
          {children}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={themedStyle.backgroundView}>
      </View>
      <TopMenu />
      <View style={themedStyle.cardView} >
        <CardItem />
        <Footer />
      </View>
    </SafeAreaView>
  );
};

const buttonWidth: number = wp(40);

export const ProfileInfo = withStyles(ProfileInfoComponent, (theme: ThemeType) => ({

  cardView: {
    marginTop: pxToPercentage(10),
    borderRadius: pxToPercentage(16),
    marginHorizontal: pxToPercentage(8),
    borderWidth: pxToPercentage(1),
    backgroundColor: theme['border-basic-color-1'],
    ...viewStyle.shadow,
  },
  cardDetailView: {
    flexDirection: 'row',
    marginVertical: pxToPercentage(8),
  },
  sectionDetails: {
    flex: 1,
    flexDirection: 'column',
    marginRight: pxToPercentage(6),
  },
  txtName: {
    fontSize: pxToPercentage(16),
    ...textStyle.bold,
    fontWeight: 'normal',
    color: theme['text-basic-color'],

  },
  txtPosition: {
    fontSize: pxToPercentage(12),
    ...textStyle.bold,
    ...textStyle.italic,
    fontWeight: 'normal',
    color: theme['text-hint-color'],
    paddingTop: pxToPercentage(4),

  },
  txtPhone: {
    fontSize: pxToPercentage(12),
    ...textStyle.regular,
    fontWeight: 'normal',
    color: theme['text-hint-color'],
    paddingTop: pxToPercentage(4),

  },
  img: {
    width: pxToPercentage(85),
    height: '98%',
    borderRadius: pxToPercentage(10),
    marginHorizontal: pxToPercentage(12),
    marginVertical: pxToPercentage(4),
  },
  fotterView: {
    flexDirection: 'row',
    backgroundColor: theme['border-basic-color-4'],
    borderBottomLeftRadius: pxToPercentage(16),
    borderBottomRightRadius: pxToPercentage(16),
    marginTop: pxToPercentage(20),
    ...viewStyle.shadow,
  },
  backgroundView: {
    height: pxToPercentage(90),
    width: '100%',
    backgroundColor: theme['color-primary-default'],
    position: 'absolute',
  },
  btn: {
    flexDirection: 'row',
    width: buttonWidth,
    marginHorizontal: pxToPercentage(12),
    marginVertical: pxToPercentage(8),
    justifyContent: 'center',
  },
  txtButton: {
    color: 'red',
    textAlign: 'center',
    ...textStyle.semibold,
    fontSize: pxToPercentage(12),
  },
  iconLogout: {
    width: pxToPercentage(16),
    height: pxToPercentage(16),
    tintColor: 'red',
    marginRight: pxToPercentage(6),
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: pxToPercentage(8),
  },
  qrCodeicon: {
    width: pxToPercentage(28),
    height: pxToPercentage(28),
    marginRight: pxToPercentage(6),
    marginLeft: pxToPercentage(6),
    tintColor: theme['border-basic-color-4'],
  },
}));
