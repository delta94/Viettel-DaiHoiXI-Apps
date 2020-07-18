import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Button } from '@kitten/ui';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { textStyle } from '@src/components';
import { Speech as SpeechModel } from '@src/core/models/speech/speech.model';
import { Hr } from '@src/components/hr/hr.component';
import { SpeechStatusEnum } from '@src/core/utils/constants';

interface ComponentProps {
  index?: number;
  speech: SpeechModel;
  onPress?: (type: number) => void;
}

export type SpeechItemProps = ComponentProps & ThemedComponentProps;

const SpeechItemComponent: React.FunctionComponent<SpeechItemProps> = (props) => {
  const { themedStyle, speech, index } = props;
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const onItemPress = (): void => {
    setIsFocus(prevState => !prevState);
  };

  const renderButtons = (): React.ReactElement => {
    switch (speech.status) {
      case SpeechStatusEnum.Pending: {
        return (
          <React.Fragment>
            <Button
              onPress={() => { }}
              style={themedStyle.btnError}>
              {'Từ chối'}
            </Button>
            <Button
              onPress={() => { }}
              style={themedStyle.btnSuccess}>
              {'Duyệt'}
            </Button>
          </React.Fragment>
        );
      }
      case SpeechStatusEnum.Accepted: {
        return (
          <Button
            onPress={() => { }}
            style={themedStyle.btnSuccess}>
            {'Mời phát biểu'}
          </Button>
        );
      }
      case SpeechStatusEnum.Speaking: {
        return (
          <Button
            onPress={() => { }}
            style={themedStyle.btnError}>
            {'Dừng phát biểu'}
          </Button>
        );
      }
      default: {
        return undefined;
      }
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={onItemPress}
      style={themedStyle.container}>
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
                {'10:00:00'}
              </Text>
            </View>
          </View>
        </React.Fragment>)}
      {isFocus &&
        (<React.Fragment>
          <Hr />
          <View style={themedStyle.viewFooter}>
            {renderButtons()}
          </View>
        </React.Fragment>)}
    </TouchableOpacity>
  );
};

export const SpeechItem = withStyles(SpeechItemComponent, (theme: ThemeType) => ({
  container: {
    marginTop: pxToPercentage(8),
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
}));


