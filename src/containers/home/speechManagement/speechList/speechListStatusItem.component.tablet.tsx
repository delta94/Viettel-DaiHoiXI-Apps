import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import {
  RegisterIcon,
  CheckIconFill,
  WatchIcon,
  StopSpeechIcon,
} from '@src/assets/icons';
import { SpeechStatusEnum } from '@src/core/utils/constants';
import { Td } from '@src/components/table/td.component';

interface ComponentProps {
  enum?: number;
  index: number;
  OnSpeechInvitationPress: (index: number) => void;
}

export type DelegateSpeechStatusItemProps = ThemedComponentProps & ComponentProps;

const DelegateSpeechStatusItemComponent: React.FunctionComponent<DelegateSpeechStatusItemProps> = (props) => {
  const { themedStyle } = props;

  const [time, setTime] = React.useState<number>(100);

  React.useEffect(() => {
    if (props.enum === SpeechStatusEnum.Speaking) {
      const interval = setInterval(() => {
        if (time > 0) {
          setTime(time - 1);
        } else {
          props.OnSpeechInvitationPress(props.index);
          clearInterval(interval);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }), [];

  const OnSpeechInvitationPress = (index: number): void => {
    props.OnSpeechInvitationPress(index);
  };

  if (props.enum === SpeechStatusEnum.Accepted || props.enum === SpeechStatusEnum.Pending) {
    return (
      <Td childrenFlex style={themedStyle.viewWaitSpeech}>
        <TouchableOpacity
          onPress={() => { OnSpeechInvitationPress(props.index); }}
          activeOpacity={0.75}
          style={themedStyle.viewItem}>
          {RegisterIcon([themedStyle.icon, themedStyle.iconRegisterSpeech])}
          <Text style={themedStyle.txtInvitionSpeech}>
            {'MỜI PHÁT BIỂU'}
          </Text>
        </TouchableOpacity>
      </Td>
    );
  }

  if (props.enum === SpeechStatusEnum.Finished) {
    return (
      <Td childrenFlex style={themedStyle.viewSpeeched}>
        <TouchableOpacity
          activeOpacity={0.75}
          style={themedStyle.viewItem}>
          {CheckIconFill([themedStyle.icon, themedStyle.iconCheck])}
          <Text style={themedStyle.txtSpeeched}>
            {'ĐÃ PHÁT BIỂU'}
          </Text>
        </TouchableOpacity>
      </Td>
    );
  }

  if (props.enum === SpeechStatusEnum.Speaking) {
    return (
      <Td childrenFlex style={themedStyle.viewSpeeching}>
        <TouchableOpacity
          onPress={() => { OnSpeechInvitationPress(props.index); }}
          activeOpacity={0.75}
          style={themedStyle.viewItem}>
          <View style={themedStyle.iconWatch}>
            {WatchIcon([themedStyle.icon, themedStyle.iconWatch])}
            <View style={themedStyle.viewTime}>
              <Text style={themedStyle.txtTime}>
                {`0${Math.trunc(time / 60)}:${time % 60 < 10 ? `0` + (time % 60) : (time % 60)}`}
              </Text>
            </View>
          </View>
          {StopSpeechIcon([themedStyle.icon, themedStyle.iconStop])}
          <Text style={themedStyle.txtStopSpeech}>
            {'ĐANG PHÁT BIỂU'}
          </Text>
        </TouchableOpacity>
      </Td>
    );
  }
  return (
    <View />
  );
};

export const DelegateSpeechStatusTablet = withStyles(DelegateSpeechStatusItemComponent, (theme: ThemeType) => ({
  txtContent: {
    fontSize: pxToPercentage(36),
    ...textStyle.proDisplayRegular,
  },
  viewItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    flex: 1,
  },
  icon: {
    height: pxToPercentage(56),
  },
  iconWatch: {
    width: pxToPercentage(115),
    height: pxToPercentage(136),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCheck: {
    marginRight: pxToPercentage(31.5),
    tintColor: theme['color-primary-51'],
    width: pxToPercentage(65),
    height: pxToPercentage(46),
    resizeMode: 'contain',
  },
  iconRegisterSpeech: {
    tintColor: theme['color-primary-2'],
    width: pxToPercentage(42),
    marginRight: pxToPercentage(31.5),
  },
  iconStop: {
    tintColor: theme['color-primary-0'],
    width: pxToPercentage(24.2),
    height: pxToPercentage(42),
    resizeMode: 'contain',
    marginLeft: pxToPercentage(40),
  },
  txtInvitionSpeech: {
    fontSize: pxToPercentage(34),
    color: theme['color-primary-2'],
    ...textStyle.proDisplayRegular,
  },
  viewWaitSpeech: {
    backgroundColor: theme['color-primary-0'],
  },
  viewSpeeching: {
    backgroundColor: theme['color-primary-2'],
  },
  viewSpeeched: {
    backgroundColor: theme['color-primary-20'],
  },
  viewTime: {
    position: 'absolute',
  },
  txtSpeeched: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
    color: theme['color-primary-51'],
  },
  txtTime: {
    fontSize: pxToPercentage(32),
    ...textStyle.proDisplayRegular,
  },
  txtStopSpeech: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
    marginLeft: pxToPercentage(20),
    color: theme['color-primary-0'],
  },
}));
