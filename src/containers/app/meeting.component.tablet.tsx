import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { ProfileInfoTablet } from '@src/components/profileInfo/profileInfo.component.tablet';
import { WeekSelector } from '@src/components/weekSelector/weekSelector.component';
import { MeetingItemTablet } from './mettingItem.component.tablet';
import { Deputy as DeputyModel } from '@src/core/models/deputy/deputy.model';
import { Meeting as MeetingModel } from '@src/core/models/meeting/meeting.model';
import { MeetingWeek as MeetingWeekModel } from '@src/core/models/meeting/meetingWeek.model';

interface ComponentProps {
  deputy: DeputyModel;
  meetingWeeks: MeetingWeekModel[];
  meetings: MeetingModel[];
  onMeetingItemPress: (meetingId: string) => void;
  onMeetingWeekPress: (meetingWeekId: string) => void;
  onMyProfilePress: () => void;
  onMyQRCodePress: () => void;
  onSearchPress: () => void;
  onEmailPress: () => void;
}

export type MeetingTabletProps = ThemedComponentProps & ComponentProps;

const MeetingTabletComponent: React.FunctionComponent<MeetingTabletProps> = (props) => {
  const { themedStyle } = props;

  const onMyProfilePress = (): void => {
    props.onMyProfilePress();
  };

  const onMeetingItemPress = (meetingId: string): void => {
    props.onMeetingItemPress(meetingId);
  };

  const onMeetingWeekPress = (meetingWeekId: string): void => {
    props.onMeetingWeekPress(meetingWeekId);
  };

  const onDatePress = (): void => {

  };

  const onMyQRCodePress = (): void => {
    props.onMyQRCodePress();
  };

  const onSearchPress = (): void => {
    props.onSearchPress();
  };

  const renderMeetings = (): React.ReactElement[] => {
    return props.meetings.map((item, index) => {
      return (
        <MeetingItemTablet
          key={index}
          onMeetingItemPress={onMeetingItemPress}
          meetings={item.meetings}
          day={item.dayOfWeek}
          date={item.date}
        />
      );
    });
  };

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewCard}>
        <ProfileInfoTablet
          deputy={props.deputy}
          onProfilePress={onMyProfilePress}
          onMyQRCodePress={onMyQRCodePress}
          onSearchPress={onSearchPress}
        />
        <WeekSelector
          meetingWeeks={props.meetingWeeks}
          onMeetingWeekPress={onMeetingWeekPress}
        />
        <View style={themedStyle.viewSection}>
          <ScrollView contentContainerStyle={themedStyle.scrollViewContainer}>
            <View style={themedStyle.viewContent}>
              {renderMeetings()}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export const MeetingTablet = withStyles(MeetingTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: pxToPercentage(31),
    paddingBottom: pxToPercentage(31),
    backgroundColor: theme['color-primary-2'],
  },
  viewCard: {
    flex: 1,
    borderRadius: pxToPercentage(40),
    padding: pxToPercentage(20),
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
  },
  viewContent: {
    flex: 1,
    flexDirection: 'row',
  },
  scrollViewContainer: {
    flex: 1,
  },
  viewSection: {
    flex: 1,
    borderWidth: pxToPercentage(2),
    marginTop: pxToPercentage(30),
    borderColor: theme['color-primary-18'],
  },
}));
