import React, {
  useState,
  useEffect,
} from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  StyleProp,
  TouchableOpacity,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { pxToPercentage } from '@src/core/utils/utils';
import {
  ArrowPrevIcon,
  ArrowNextIcon,
} from '@src/assets/icons';
import { textStyle } from '../textStyle';
import { MeetingWeek as MeetingWeekModel } from '@src/core/models/meeting/meetingWeek.model';

interface ComponentProps {
  meetingWeeks: MeetingWeekModel[];
  onMeetingWeekPress: (meetingWeekId: string) => void;
}

export type WeekSelectorProps = ComponentProps & ThemedComponentProps;

const WeekSelectorComponent: React.FunctionComponent<WeekSelectorProps> = (props) => {
  const { themedStyle } = props;
  const [meetingWeeks, setMeetingWeeks] = useState<MeetingWeekModel[]>(props.meetingWeeks);
  const [meetingWeeksByNum, setMeetingWeeksByNum] = useState<MeetingWeekModel[]>([]);
  const [meetingWeekSelected, setMeetingWeekSelected] = useState<MeetingWeekModel>(new MeetingWeekModel());

  useEffect(() => {
    setMeetingWeeks(props.meetingWeeks);

    const meetingWeekIndexFound: number = props.meetingWeeks.findIndex(item => item.selected);

    if (meetingWeekIndexFound > -1) {
      setMeetingWeekSelected(props.meetingWeeks[meetingWeekIndexFound]);

      const meetingWeeksByNumTemp: MeetingWeekModel[] = [];
      let quotient: number = Math.floor((meetingWeekIndexFound + 1) / 4);
      const remainder: number = (meetingWeekIndexFound + 1) % 4;

      if (remainder === 0) {
        quotient = (quotient - 1) * 4;
      } else {
        quotient *= 4;
      }

      for (let i = 0; i < 4; i++) {
        meetingWeeksByNumTemp.push(props.meetingWeeks[quotient + i]);
      }

      setMeetingWeeksByNum([...meetingWeeksByNumTemp]);
    }
  }, [props.meetingWeeks]);

  const onMeetingWeekPress = (meetingWeekId: string): void => {
    setMeetingWeeksByNum([]);

    props.onMeetingWeekPress(meetingWeekId);
  };

  const onPrevWeeksPress = (): void => {
    const meetingWeekIndexFound: number = props.meetingWeeks.findIndex(item => item.id === meetingWeeksByNum[0].id);

    if (meetingWeekIndexFound + 1 !== 1) {
      const meetingWeeksByNumTemp: MeetingWeekModel[] = [];

      for (let i = 0; i < 4; i++) {
        meetingWeeksByNumTemp.push(meetingWeeks[meetingWeekIndexFound - i - 1]);
      }

      setMeetingWeeksByNum([...meetingWeeksByNumTemp].reverse());
    }
  };

  const onNextWeeksPress = (): void => {
    const meetingWeekIndexFound: number = props.meetingWeeks.findIndex(item => item.id === meetingWeeksByNum[meetingWeeksByNum.length - 1].id);

    if (meetingWeekIndexFound + 1 < 52) {
      const meetingWeeksByNumTemp: MeetingWeekModel[] = [];

      for (let i = 0; i < 4; i++) {
        meetingWeeksByNumTemp.push(meetingWeeks[meetingWeekIndexFound + i + 1]);
      }

      setMeetingWeeksByNum([...meetingWeeksByNumTemp]);
    }
  };

  const getBtnWeekStyle = (meetingWeekId: string, index: number): StyleProp<ViewStyle> => {
    const btnWeekStyle = [themedStyle.btnWeek];

    if (meetingWeekId === meetingWeekSelected.id) {
      btnWeekStyle.push(themedStyle.btnWeekSelected);
    }

    return btnWeekStyle;
  };

  const renderBtnWeeks = (): React.ReactElement[] => {
    return meetingWeeksByNum.map((item, index) => {
      return (
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => onMeetingWeekPress(item.id)}
          style={getBtnWeekStyle(item.id, index)}>
          <Text
            style={[
              themedStyle.txtWeek,
              item.id === meetingWeekSelected.id && themedStyle.txtWeekSelected,
            ]}>
            {item.weekName}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={themedStyle.container}>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={onPrevWeeksPress}
        style={themedStyle.btnPrevChangeWeeks}>
        {ArrowPrevIcon(themedStyle.iconBtnChangeWeeks)}
      </TouchableOpacity>
      <View style={themedStyle.viewWeeks}>
        {renderBtnWeeks()}
      </View>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={onNextWeeksPress}
        style={themedStyle.btnNextChangeWeeks}>
        {ArrowNextIcon(themedStyle.iconBtnChangeWeeks)}
      </TouchableOpacity>
    </View>
  );
};

export const WeekSelector = withStyles(WeekSelectorComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    height: pxToPercentage(86),
  },
  viewWeeks: {
    flex: 1,
    borderWidth: pxToPercentage(2),
    borderRightWidth: pxToPercentage(2),
    borderColor: theme['color-primary-2'],
    borderRadius: pxToPercentage(30),
    flexDirection: 'row',
  },
  btnWeek: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: pxToPercentage(30),
    borderRightWidth: pxToPercentage(2),
    borderColor: theme['color-primary-2'],
  },
  btnWeekSelected: {
    borderRadius: pxToPercentage(30),
    backgroundColor: theme['color-primary-2'],
  },
  txtWeek: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
  txtWeekSelected: {
    color: theme['color-custom-100'],
  },
  btnPrevChangeWeeks: {
    justifyContent: 'center',
    width: pxToPercentage(100),
  },
  btnNextChangeWeeks: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: pxToPercentage(100),
  },
  iconBtnChangeWeeks: {
    width: pxToPercentage(50),
    height: pxToPercentage(46),
  },
}));
