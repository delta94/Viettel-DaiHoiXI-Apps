import React from 'react';
import {
  View,
  ViewProps,
  Text,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Avatar } from '@kitten/ui';
import { textStyle } from '@src/components';
import { User } from '@src/core/models/user/user.model';
import { RemoteImage } from '@src/assets/images';
import { pxToPercentage } from '@src/core/utils/utils';
import { isTablet } from 'react-native-device-info';
import { PhoneIcon, PersonIconFill } from '@src/assets/icons';

interface ComponentProps {
  user: User;
  children?: React.ReactNode;
}

export type ProfileInfoProps = ThemedComponentProps & ViewProps & ComponentProps;

const ProfileInfoV1Component: React.FunctionComponent<ProfileInfoProps> = (props) => {
  const { style, themedStyle, user, children, ...restProps } = props;

  return (
    <View
      style={[themedStyle.container, style]}
      {...restProps}>
      <Avatar
        size='giant'
        style={themedStyle.avatar}
        source={(new RemoteImage(user.avatar)).imageSource}
      />
      <View style={themedStyle.sectionDetails}>
        <Text
          numberOfLines={1}
          style={themedStyle.txtName}>
          {user.full_name}
        </Text>
        <View style={themedStyle.viewPosition}>
          {PersonIconFill(themedStyle.iconPosition)}
          <Text
            numberOfLines={2}
            style={themedStyle.txtPosition}>
            {user.position}
          </Text>
        </View>
        <View style={themedStyle.viewPhone}>
          {PhoneIcon(themedStyle.iconPhone)}
          <Text
            numberOfLines={1}
            style={themedStyle.txtPhone}>
            {user.phone}
          </Text>
        </View>
      </View>
    </View>
  );
};

export const ProfileInfoV1 = withStyles(ProfileInfoV1Component, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: pxToPercentage(1),
    borderBottomColor: theme['border-basic-color-4'],
    borderRadius: isTablet() ? pxToPercentage(3) : pxToPercentage(7),
    marginHorizontal: pxToPercentage(4),
    marginTop: pxToPercentage(2),
  },
  sectionDetails: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: isTablet() ? pxToPercentage(14) : pxToPercentage(16),
  },
  txtName: {
    fontSize: isTablet() ? pxToPercentage(13) : pxToPercentage(16),
    ...textStyle.semibold,
    fontWeight: 'normal',
    color: theme['text-basic-color'],
  },
  txtPosition: {
    fontSize: isTablet() ? pxToPercentage(11) : pxToPercentage(14),
    fontWeight: 'normal',
    color: 'black',
    ...textStyle.regular,
    marginLeft: pxToPercentage(5),
  },
  txtPhone: {
    fontSize: isTablet() ? pxToPercentage(11) : pxToPercentage(14),
    fontWeight: 'normal',
    color: 'black',
    ...textStyle.regular,
    marginLeft: pxToPercentage(9),
  },
  iconPosition: {
    width: isTablet() ? pxToPercentage(15) : pxToPercentage(20),
    height: isTablet() ? pxToPercentage(15) : pxToPercentage(20),
  },
  iconPhone: {
    width: isTablet() ? pxToPercentage(15) : pxToPercentage(20),
    height: isTablet() ? pxToPercentage(15) : pxToPercentage(20),
    borderRadius: pxToPercentage(3),
  },
  viewPosition: {
    flexDirection: 'row',
    marginTop: isTablet() ? pxToPercentage(2) : pxToPercentage(4),
  },
  viewPhone: {
    flexDirection: 'row',
    marginTop: isTablet() ? pxToPercentage(2) : pxToPercentage(5),
  },
  avatar: {
    width: isTablet() ? pxToPercentage(70) : pxToPercentage(90),
    height: isTablet() ? pxToPercentage(70) : pxToPercentage(90),
  },
}));
