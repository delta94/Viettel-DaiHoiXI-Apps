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
import {
  PhoneIcon,
  PersonIconFill,
} from '@src/assets/icons';

interface ComponentProps {
  user: User;
}

export type ProfileInfoProps = ThemedComponentProps & ViewProps & ComponentProps;

const ProfileInfoV1Component: React.FunctionComponent<ProfileInfoProps> = (props) => {
  const { style, themedStyle, user, ...restProps } = props;

  return (
    <View
      style={[themedStyle.container, style]}
      {...restProps}>
      <Avatar
        size='giant'
        style={themedStyle.avatar}
        source={(new RemoteImage(props.user.avatar)).imageSource}
      />
      <View style={themedStyle.viewProfileDetail}>
        <Text
          numberOfLines={1}
          style={themedStyle.txtName}>
          {props.user.full_name}
        </Text>
        <View style={themedStyle.viewPosition}>
          {PersonIconFill(themedStyle.icon)}
          <Text
            numberOfLines={2}
            style={themedStyle.txtProfileDetail}>
            {props.user.position}
          </Text>
        </View>
        <View style={themedStyle.viewPhone}>
          {PhoneIcon([
            themedStyle.icon,
            themedStyle.iconPhone,
          ])}
          <Text
            numberOfLines={1}
            style={themedStyle.txtProfileDetail}>
            {props.user.phone}
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
  },
  viewProfileDetail: {
    justifyContent: 'center',
    marginLeft: pxToPercentage(16),
  },
  viewPosition: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: pxToPercentage(4),
  },
  viewPhone: {
    flexDirection: 'row',
    marginTop: pxToPercentage(5),
  },
  txtName: {
    fontSize: pxToPercentage(20),
    ...textStyle.bold,
    fontWeight: 'normal',
    color: theme['text-basic-color'],
  },
  txtProfileDetail: {
    fontSize: pxToPercentage(14),
    ...textStyle.regular,
    marginLeft: pxToPercentage(9),
  },
  icon: {
    width: pxToPercentage(20),
    height: pxToPercentage(20),
  },
  iconPhone: {
    borderRadius: pxToPercentage(3),
  },
  avatar: {
    width: pxToPercentage(70),
    height: pxToPercentage(70),
  },
}));
