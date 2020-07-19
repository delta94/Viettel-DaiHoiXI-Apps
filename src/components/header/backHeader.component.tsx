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
  QuestionIcon,
  MessageIconOther,
  ArrowPrevIcon,
} from '@src/assets/icons';

interface ComponentProps {
  onBackPress: () => void;
  onMessagePress: () => void;
  onHelpPress: () => void;
}

export type BackHeaderProps = ThemedComponentProps & ComponentProps;

const BackHeaderComponent: React.FunctionComponent<BackHeaderProps> = (props) => {
  const { themedStyle } = props;

  const onMessagePress = (): void => {
    props.onMessagePress();
  };

  const onBackPress = (): void => {
    props.onBackPress();
  };

  const onHelpPress = (): void => {
    props.onHelpPress();
  };

  return (
    <View style={themedStyle.container}>
      <Button
        title='Quay lại'
        icon={ArrowPrevIcon}
        iconStyle={themedStyle.iconBtnBack}
        onPress={onBackPress}
      />
      <View style={themedStyle.viewRow}>
        <Button
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

export const BackHeader = withStyles(BackHeaderComponent, (theme: ThemeType) => ({
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
  iconBtnBack: {
    width: pxToPercentage(50),
    height: pxToPercentage(46),
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
