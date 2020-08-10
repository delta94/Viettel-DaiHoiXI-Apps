import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { textStyle } from '@src/components';
import {
  ArrowForwardIcon,
  ArrowIosBackFill,
} from '@src/assets/icons';
import { pxToPercentage } from '@src/core/utils/utils';
import { MeetingWeek as MeetingWeekModel } from '@src/core/models/meeting/meetingWeek.model';

interface ComponentProps {
  meetingWeeks: MeetingWeekModel[];
  onMeetingWeekPress: (meetingWeekId: string) => void;
}

export type MeetingWeekProps = ThemedComponentProps & ComponentProps;

const MeetingWeekComponent: React.FunctionComponent<MeetingWeekProps> = (props) => {
  const [meetingWeeks, setMeetingWeeks] = useState<MeetingWeekModel[]>(props.meetingWeeks);
  const [meetingWeekSelected, setMeetingWeekSelected] = useState<MeetingWeekModel>(new MeetingWeekModel());

  useEffect(() => {
    setMeetingWeeks(props.meetingWeeks);

    const meetingWeekFound: MeetingWeekModel = props.meetingWeeks.find(item => item.selected);

    if (meetingWeekFound) {
      setMeetingWeekSelected(meetingWeekFound);
    }
  }, [props.meetingWeeks]);

  const { themedStyle } = props;

  const onNextWeekPress = (): void => {
    const meetingWeekIndexFound: number = props.meetingWeeks.findIndex(item => item.id === meetingWeekSelected.id);

    if (meetingWeekIndexFound > -1) {
      if (meetingWeeks[meetingWeekIndexFound + 1]) {
        props.onMeetingWeekPress(meetingWeeks[meetingWeekIndexFound + 1].id);
      }
    }
  };

  const onPrevWeekPress = (): void => {
    const meetingWeekIndexFound: number = props.meetingWeeks.findIndex(item => item.id === meetingWeekSelected.id);

    if (meetingWeekIndexFound > -1) {
      if (meetingWeeks[meetingWeekIndexFound - 1]) {
        props.onMeetingWeekPress(meetingWeeks[meetingWeekIndexFound - 1].id);
      }
    }
  };

  return (
    <View style={themedStyle.container}>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={onPrevWeekPress}
        style={themedStyle.btnCircle}>
        {ArrowIosBackFill(themedStyle.btnCircleIcon)}
      </TouchableOpacity>
      <View style={themedStyle.viewCenter}>
        <View style={themedStyle.viewWeek}>
          <Text style={themedStyle.txtWeek}>
            {meetingWeekSelected.weekName}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={onNextWeekPress}
        style={themedStyle.btnCircle}>
        {ArrowForwardIcon(themedStyle.btnCircleIcon)}
      </TouchableOpacity>
    </View>
  );
};

export const MeetingWeek = withStyles(MeetingWeekComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    alignContent: 'space-between',
    padding: pxToPercentage(16),
  },
  iconLogout: {
    width: pxToPercentage(20),
    height: pxToPercentage(20),
    tintColor: 'red',
  },
  btnCircle: {
    width: pxToPercentage(30),
    height: pxToPercentage(30),
    borderRadius: pxToPercentage(15),
    borderWidth: pxToPercentage(1),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme['color-primary-2'],
  },
  btnCircleIcon: {
    width: pxToPercentage(23),
    height: pxToPercentage(23),
    tintColor: theme['color-primary-2'],
  },
  viewCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewWeek: {
    width: pxToPercentage(120),
    height: pxToPercentage(30),
    borderRadius: pxToPercentage(15),
    borderWidth: pxToPercentage(1),
    justifyContent: 'center',
    borderColor: theme['color-primary-2'],
  },
  txtWeek: {
    fontSize: pxToPercentage(13),
    ...textStyle.proTextSemibold,
    textAlign: 'center',
    color: theme['color-primary-2'],
  },
}));
