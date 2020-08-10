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
import { ProfileInfo } from '@src/components/profileInfo/profileInfo.component';
import { pxToPercentage } from '@src/core/utils/utils';
import { MeetingItem } from './meetingItem.component';
import { MeetingWeek } from './meetingWeek.component';
import { Meeting as MeetingModel } from '@src/core/models/meeting/meeting.model';
import { viewStyle } from '@src/components/viewStyle';
import { Deputy as DeputyModel } from '@src/core/models/deputy/deputy.model';
import { MeetingWeek as MeetingWeekModel } from '@src/core/models/meeting/meetingWeek.model';

interface ComponentProps {
  deputy: DeputyModel;
  meetingWeeks: MeetingWeekModel[];
  meetings: MeetingModel[];
  onMeetingItemPress: (meetingId: string) => void;
  onMeetingWeekPress: (meetingWeekId: string) => void;
  onMyProfilePress: () => void;
  onSearchPress: () => void;
  onQRCodePress: () => void;
}

export type MeetingProps = ThemedComponentProps & ComponentProps;

const MeetingComponent: React.FunctionComponent<MeetingProps> = (props) => {
  const { themedStyle } = props;

  const onMyProfilePress = (): void => {
    props.onMyProfilePress();
  };

  const onSearchPress = (): void => {
    props.onSearchPress();
  };

  const onQRCodePress = (): void => {
    props.onQRCodePress();
  };

  const onMeetingItemPress = (meetingId: string): void => {
    props.onMeetingItemPress(meetingId);
  };

  const onMeetingWeekPress = (meetingWeekId: string): void => {
    props.onMeetingWeekPress(meetingWeekId);
  };

  const renderMeetings = (): React.ReactElement[] => {
    return props.meetings.map((item, index) => {
      return (
        <MeetingItem
          key={index}
          day={item.dayOfWeek}
          date={item.date}
          meetings={item.meetings}
          onMeetingItemPress={onMeetingItemPress}
        />
      );
    });
  };

  return (
    <React.Fragment>
      <View style={themedStyle.container}>
        <ProfileInfo
          deputy={props.deputy}
          style={themedStyle.viewProfileInfo}
          onMyProfilePress={onMyProfilePress}
          onSearchPress={onSearchPress}
          onQRCodePress={onQRCodePress}
        />
        <View style={themedStyle.viewContent}>
          <MeetingWeek
            meetingWeeks={props.meetingWeeks}
            onMeetingWeekPress={onMeetingWeekPress}
          />
          <ScrollView showsVerticalScrollIndicator={false} >
            {renderMeetings()}
          </ScrollView>
        </View>
      </View>
    </React.Fragment>
  );
};

export const Meeting = withStyles(MeetingComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: pxToPercentage(8),
    paddingBottom: pxToPercentage(20),
    backgroundColor: theme['color-primary-11'],
  },
  viewCard: {
    height: pxToPercentage(40),
    backgroundColor: theme['color-primary-2'],
  },
  viewProfileInfo: {
  },
  viewContent: {
    flex: 1,
    marginTop: pxToPercentage(8),
    borderRadius: pxToPercentage(12.5),
    paddingHorizontal: pxToPercentage(8),
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
  },
}));
