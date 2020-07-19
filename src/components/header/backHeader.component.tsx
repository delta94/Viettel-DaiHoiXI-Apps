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
import { pxToPercentage } from '@src/core/utils/utils';
import { Button } from '@src/components/button/button.component';
import {
  QuestionIcon,
  MessageIconOther,
  ArrowPrevIcon,
} from '@src/assets/icons';
import { textStyle } from '../textStyle';

interface ComponentProps {
  title: string;
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
      <View style={themedStyle.viewLeft}>
        <Button
          title='Quay lại'
          icon={ArrowPrevIcon}
          iconStyle={themedStyle.iconBtnBack}
          onPress={onBackPress}
        />
      </View>
      <View style={themedStyle.viewCenter}>
        <Text style={themedStyle.txtTitle}>
          {props.title}
        </Text>
      </View>
      <View style={themedStyle.viewRight}>
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
  viewLeft: {
    flexDirection: 'row',
    width: pxToPercentage(450),
  },
  viewCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: pxToPercentage(450),
  },
  txtTitle: {
    fontSize: pxToPercentage(58),
    lineHeight: pxToPercentage(90),
    color: theme['color-custom-100'],
    ...textStyle.proDisplayBold,
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
