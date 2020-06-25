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

interface ComponentProps {
  user: User;
  children?: React.ReactNode;
}

export type ProfileInfoProps = ThemedComponentProps & ViewProps & ComponentProps;

const ProfileInfoComponent: React.FunctionComponent<ProfileInfoProps> = (props) => {
  const { style, themedStyle, user, children, ...restProps } = props;

  return (
    <View
      style={[themedStyle.container, style]}
      {...restProps}>
      <Avatar
        size='giant'
        source={(new RemoteImage(user.avatar)).imageSource}
      />
      <View style={themedStyle.sectionDetails}>
        <Text
          numberOfLines={1}
          style={themedStyle.txtName}>
          {user.full_name}
        </Text>
        <Text
          numberOfLines={2}
          style={themedStyle.txtPosition}>
          {user.position}
        </Text>
        {children}
      </View>
    </View>
  );
};

export const ProfileInfo = withStyles(ProfileInfoComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionDetails: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: pxToPercentage(16),
  },
  txtName: {
    fontSize: pxToPercentage(20),
    ...textStyle.bold,
    fontWeight: 'normal',
    color: theme['text-basic-color'],
  },
  txtPosition: {
    fontSize: pxToPercentage(13),
    ...textStyle.semibold,
    fontWeight: 'normal',
    color: theme['text-hint-color'],
  },
}));
