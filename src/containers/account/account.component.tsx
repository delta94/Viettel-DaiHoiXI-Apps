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
import { ProfileInfo } from '@src/components/profileInfo/profileInfo.component';
import { userDataFake } from '@src/core/data/user';
import { pxToPercentage } from '@src/core/utils/utils';
import { Button } from '@kitten/ui';
import { isTablet } from 'react-native-device-info';

interface ComponentProps {
  onLogoutPress: () => void;
}

export type AccountProps = ThemedComponentProps & ComponentProps;

const AccountComponent: React.FunctionComponent<AccountProps> = (props) => {
  const onLogoutButtonPress = (): void => {
    props.onLogoutPress();
  };

  const { themedStyle } = props;

  return (
    <View style={themedStyle.container}>
      <ProfileInfo
        user={userDataFake}
        style={themedStyle.profileInfo}
      />
      <View style={themedStyle.viewContent}>

      </View>
      <Button
        size={isTablet() ? 'giant' : 'large'}
        style={themedStyle.btnLogout}
        onPress={onLogoutButtonPress}>
        {'Đăng xuất'}
      </Button>
    </View>
  );
};

export const Account = withStyles(AccountComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-custom-100'],
  },
  profileInfo: {
    marginBottom: pxToPercentage(8),
    paddingVertical: pxToPercentage(8),
    paddingHorizontal: pxToPercentage(16),
    backgroundColor: theme['background-basic-color-1'],
  },
  viewContent: {
    flex: 1,
  },
  btnLogout: {
    marginHorizontal: pxToPercentage(16),
    marginBottom: pxToPercentage(16),
  },
}));
