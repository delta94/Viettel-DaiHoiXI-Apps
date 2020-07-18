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
import { userDataFake } from '@src/core/data/user';
import { pxToPercentage } from '@src/core/utils/utils';
import { HomeMeetingItem } from './homeMeetingItem.component';
import { HomeMeetingWeek } from './homeMeetingWeek.component';
import { MeetingItem } from '@src/core/models/meeting/meeting.model';
import { viewStyle } from '@src/components/viewStyle';

interface ComponentProps {
  currentWeek: number;
  meetings: MeetingItem[];
  onMeetingItemPress: () => void;
  onEditProfilePress: () => void;
  onLogoutPress: () => void;
}

export type HomeProps = ThemedComponentProps & ComponentProps;

const HomeComponent: React.FunctionComponent<HomeProps> = (props) => {
  const { themedStyle } = props;

  const onEditProfilePress = (): void => {
    props.onEditProfilePress();
  };

  const onLogoutPress = (): void => {
    props.onLogoutPress();
  };

  const onMeetingItemPress = (): void => {
    props.onMeetingItemPress();
  };

  const onNextWeekPress = (): void => {

  };

  const onPrevWeekPress = (): void => {

  };

  const renderMeetings = (): React.ReactElement[] => {
    return props.meetings.map((item, index) => {
      return (
        <HomeMeetingItem
          key={index}
          meeting={item}
        />
      );
    });
  };

  return (
    <React.Fragment>
      <View style={themedStyle.viewCard} />
      <View style={themedStyle.container}>
        <ProfileInfo
          user={userDataFake}
          style={themedStyle.viewProfileInfo}
          onEditProfilePress={onEditProfilePress}
          onLogoutPress={onLogoutPress}
        />
        <View style={themedStyle.viewContent}>
          <HomeMeetingWeek
            currentWeek={props.currentWeek}
            onNextWeekPress={onNextWeekPress}
            onPrevWeekPress={onPrevWeekPress}
          />
          <ScrollView showsVerticalScrollIndicator={false} >
            {renderMeetings()}
          </ScrollView>
        </View>
      </View>
    </React.Fragment>
  );
};

export const Home = withStyles(HomeComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: pxToPercentage(8),
    backgroundColor: theme['color-primary-11'],
  },
  viewCard: {
    height: pxToPercentage(40),
    backgroundColor: theme['color-primary-2'],
  },
  viewProfileInfo: {
    top: -pxToPercentage(40),
  },
  viewContent: {
    flex: 1,
    top: -pxToPercentage(32),
    borderRadius: pxToPercentage(12.5),
    paddingHorizontal: pxToPercentage(8),
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
  },
}));
