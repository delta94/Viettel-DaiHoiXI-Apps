import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Button } from '@kitten/ui';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage, tenMinutesCountdown } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { textStyle } from '@src/components';
import { Speech as SpeechModel } from '@src/core/models/speech/speech.model';
import { Hr } from '@src/components/hr/hr.component';
import { SpeechStatusEnum } from '@src/core/utils/constants';

interface ComponentProps {
  index?: number;
  speech: SpeechModel;
  cdTimer: number;
  onSpeechInvitationPress: (id: string) => void;
}

export type SpeechManagementItemProps = ComponentProps & ThemedComponentProps;

const SpeechManagementItemComponent: React.FunctionComponent<SpeechManagementItemProps> = (props) => {
  const { themedStyle, speech, index } = props;

  const onSpeechInvitationPress = (id: string) => {
    return props.onSpeechInvitationPress(id);
  };

  const renderButtons = (): React.ReactElement => {
    switch (speech.status) {
      case SpeechStatusEnum.Accepted: {
        return (
          <Button
            onPress={() => onSpeechInvitationPress(speech.id)}
            style={themedStyle.btnSuccess}>
            {'Mời phát biểu'}
          </Button>
        );
      }
      case SpeechStatusEnum.Speaking: {
        return (
          <Button
            onPress={() => onSpeechInvitationPress(speech.id)}
            style={themedStyle.btnError}>
            {'Dừng phát biểu'}
          </Button>
        );
      }
      case SpeechStatusEnum.Finished: {
        return (
          <Button
            disabled={true}
            textStyle={themedStyle.txtFinished}
            style={themedStyle.btnFinished}>
            {'Đã phát biểu'}
          </Button>
        );
      }
      default: {
        return undefined;
      }
    }
  };

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewHeader}>
        <Text style={themedStyle.txtFullname}>
          {'Đại biểu: '}
          <Text
            style={[
              themedStyle.txtFullname,
              themedStyle.txtBold,
            ]}>
            {speech.full_name.toUpperCase()}
          </Text>
        </Text>
        {index &&
          (<View style={themedStyle.viewIndex}>
            <Text style={themedStyle.txtIndex}>
              {index}
            </Text>
          </View>)}
      </View>
      <Hr />
      <View style={themedStyle.viewBody}>
        <Text style={themedStyle.txtContent}>
          {speech.content}
        </Text>
      </View>
      {speech.status === SpeechStatusEnum.Speaking &&
        (<React.Fragment>
          <Hr />
          <View style={themedStyle.viewTime}>
            <View style={themedStyle.viewTimeBox}>
              <Text style={themedStyle.txtTime}>
                {tenMinutesCountdown(props.cdTimer)}
              </Text>
            </View>
          </View>
        </React.Fragment>)}
      <React.Fragment>
        <Hr />
        <View style={themedStyle.viewFooter}>
          {renderButtons()}
        </View>
      </React.Fragment>
    </View>
  );
};

export const SpeechManagementItem = withStyles(SpeechManagementItemComponent, (theme: ThemeType) => ({
  container: {
    marginVertical: pxToPercentage(8),
    borderRadius: pxToPercentage(5),
    justifyContent: 'center',
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
  },
  viewHeader: {
    justifyContent: 'center',
    padding: pxToPercentage(8),
  },
  viewBody: {
    padding: pxToPercentage(8),
  },
  viewTime: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: pxToPercentage(8),
  },
  viewFooter: {
    flexDirection: 'row',
    padding: pxToPercentage(8),
  },
  viewIndex: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: pxToPercentage(8),
    height: pxToPercentage(25),
    width: pxToPercentage(25),
    borderRadius: pxToPercentage(5),
    backgroundColor: theme['color-primary-2'],
  },
  viewTimeBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: pxToPercentage(30),
    width: pxToPercentage(120),
    borderRadius: pxToPercentage(5),
    backgroundColor: theme['color-custom-800'],
  },
  txtTime: {
    fontSize: pxToPercentage(14),
    color: theme['color-custom-100'],
    ...textStyle.proTextSemibold,
  },
  txtIndex: {
    fontSize: pxToPercentage(14),
    color: theme['color-custom-100'],
    ...textStyle.proTextSemibold,
  },
  txtFullname: {
    fontSize: pxToPercentage(14),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegular,
  },
  txtContent: {
    fontSize: pxToPercentage(14),
    lineHeight: pxToPercentage(25),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegular,
  },
  txtBold: {
    ...textStyle.proTextBold,
  },
  btnError: {
    flex: 1,
    marginRight: pxToPercentage(4),
    backgroundColor: theme['color-primary-2'],
  },
  btnSuccess: {
    flex: 1,
    marginLeft: pxToPercentage(4),
    backgroundColor: theme['color-primary-17'],
  },
  btnFinished: {
    backgroundColor: theme['color-primary-20'],
    flex: 1,
  },
  txtFinished: {
    color: theme['color-primary-18'],
  },
}));


