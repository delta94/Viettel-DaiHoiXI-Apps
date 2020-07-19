import React from 'react';
import { View } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { Button } from '@src/components/button/button.component';
import {
  ExitIcon,
  QuestionIcon,
  MessageIconOther,
} from '@src/assets/icons';

interface ComponentProps {
  onLogoutPress: () => void;
  onMessagePress: () => void;
  onHelpPress: () => void;
}

export type HomeHeaderProps = ThemedComponentProps & ComponentProps;

const HomeHeaderComponent: React.FunctionComponent<HomeHeaderProps> = (props) => {
  const { themedStyle } = props;

  const onMessagePress = (): void => {
    props.onMessagePress();
  };

  const onLogoutPress = (): void => {
    props.onLogoutPress();
  };

  const onHelpPress = (): void => {
    props.onHelpPress();
  };

  return (
    <View style={themedStyle.container}>
      <Button
        title='Đăng xuất'
        icon={ExitIcon}
        iconStyle={themedStyle.iconBtnLogout}
        onPress={onLogoutPress}
      />
      <View style={themedStyle.viewRow}>
        <Button
          title='Hướng dẫn'
          icon={QuestionIcon}
          style={themedStyle.btnHelp}
          iconStyle={themedStyle.iconBtnHelp}
          onPress={onHelpPress}
        />
        <Button
          title='Trò chuyện'
          icon={MessageIconOther}
          iconStyle={themedStyle.iconMessage}
          onPress={onMessagePress}
        />
      </View>
    </View>
  );
};

export const HomeHeader = withStyles(HomeHeaderComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: pxToPercentage(120),
  },
  viewRow: {
    flexDirection: 'row',
  },
  btnHelp: {
    marginRight: pxToPercentage(20),
  },
  iconBtnLogout: {
    width: pxToPercentage(54.29),
    height: pxToPercentage(54),
  },
  iconBtnHelp: {
    height: pxToPercentage(60),
    width: pxToPercentage(36),
  },
  iconMessage: {
    height: pxToPercentage(54),
    width: pxToPercentage(57.7),
  },
}));
