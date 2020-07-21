import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  pxToPercentage,
  tenMinutesCountdown,
} from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import {
  RegisterIcon,
  CheckIconFill,
  WatchIcon,
  StopSpeechIcon,
} from '@src/assets/icons';
import { SpeechStatusEnum } from '@src/core/utils/constants';
import { Td } from '@src/components/table/td.component';
import { imageWatch } from '@src/assets/images';

interface ComponentProps {
  enum?: number;
  index: number;
  onSpeechInvitationPress: (index: number) => void;
}

export type SpeechListStatusItemTabletProps = ThemedComponentProps & ComponentProps;

const SpeechListStatusItemTabletComponent: React.FunctionComponent<SpeechListStatusItemTabletProps> = (props) => {
  const { themedStyle } = props;

  const [time, setTime] = React.useState<number>(600);

  React.useEffect(() => {
    if (props.enum === SpeechStatusEnum.Speaking) {
      const interval = setInterval(() => {
        if (time > 0) {
          setTime(time - 1);
        } else {
          props.onSpeechInvitationPress(props.index);
          clearInterval(interval);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }), [];

  const onSpeechInvitationPress = (index: number): void => {
    props.onSpeechInvitationPress(index);
  };

  if (props.enum === SpeechStatusEnum.Accepted || props.enum === SpeechStatusEnum.Pending) {
    return (
      <Td
        childrenFlex
        style={themedStyle.viewWaitSpeech}>
        <TouchableOpacity
          onPress={() => { onSpeechInvitationPress(props.index); }}
          activeOpacity={0.75}
          style={themedStyle.viewItem}>
          {RegisterIcon([themedStyle.icon, themedStyle.iconRegisterSpeech])}
          <Text style={themedStyle.txtInvitationSpeech}>
            {'MỜI PHÁT BIỂU'}
          </Text>
        </TouchableOpacity>
      </Td>
    );
  }

  if (props.enum === SpeechStatusEnum.Finished) {
    return (
      <Td childrenFlex style={themedStyle.viewSpoken}>
        <TouchableOpacity
          disabled={true}
          activeOpacity={0.75}
          style={themedStyle.viewItem}>
          {CheckIconFill([themedStyle.icon, themedStyle.iconCheck])}
          <Text style={themedStyle.txtSpoken}>
            {'ĐÃ PHÁT BIỂU'}
          </Text>
        </TouchableOpacity>
      </Td>
    );
  }

  if (props.enum === SpeechStatusEnum.Speaking) {
    return (
      <Td childrenFlex style={themedStyle.viewSpeaking}>
        <TouchableOpacity
          onPress={() => { onSpeechInvitationPress(props.index); }}
          activeOpacity={0.75}
          style={themedStyle.viewItem}>
          <ImageBackground
            source={imageWatch.imageSource}
            style={themedStyle.imageWatch}>
            <Text style={themedStyle.txtTime}>
              {tenMinutesCountdown(time)}
            </Text>
          </ImageBackground>
          {StopSpeechIcon([themedStyle.icon, themedStyle.iconStop])}
          <Text style={themedStyle.txtStopSpeech}>
            {'DỪNG PHÁT BIỂU'}
          </Text>
        </TouchableOpacity>
      </Td>
    );
  }
  return (
    <View />
  );
};

export const SpeechListStatusItemTablet = withStyles(SpeechListStatusItemTabletComponent, (theme: ThemeType) => ({
  viewWaitSpeech: {
    backgroundColor: theme['color-primary-0'],
  },
  viewSpeaking: {
    backgroundColor: theme['color-primary-2'],
  },
  viewSpoken: {
    backgroundColor: theme['color-primary-20'],
  },
  viewItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  icon: {
    height: pxToPercentage(56),
  },
  imageWatch: {
    width: pxToPercentage(115),
    height: pxToPercentage(136),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCheck: {
    marginRight: pxToPercentage(31.5),
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
  txtInvitationSpeech: {
    fontSize: pxToPercentage(34),
    color: theme['color-primary-2'],
    ...textStyle.proDisplayRegular,
  },
  txtSpoken: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
    color: theme['color-primary-18'],
  },
  txtTime: {
    marginTop: pxToPercentage(10),
    fontSize: pxToPercentage(30),
    ...textStyle.proDisplayRegular,
  },
  txtStopSpeech: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
    marginLeft: pxToPercentage(20),
    color: theme['color-primary-0'],
  },
  txtContent: {
    fontSize: pxToPercentage(36),
    ...textStyle.proDisplayRegular,
  },
}));
