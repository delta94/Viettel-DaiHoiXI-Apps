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
import { WeeklyMeeting as WeeklyMeetingModel } from '@src/core/models/meeting/meeting.model';
import { viewStyle } from '@src/components/viewStyle';
import { User } from '@src/core/models/user/user.model';
import { HomeHeader } from '@src/components/header/homeHeader.component';
import { ProfileInfoTablet } from '@src/components/profileInfo/profileInfo.component.tablet';
import { WeekSelector } from '@src/components/weekSelector/weekSelector.component';
import { HomeMeetingItemTablet } from './homeMettingItem.component.tablet';

interface ComponentProps {
  user: User;
  currentWeek: number;
  meetings: WeeklyMeetingModel[];
  onMeetingItemPress: (isExample: boolean) => void;
  onEditProfilePress: () => void;
  onLogoutPress: () => void;
  onQRCodePress: () => void;
  onSearchPress: () => void;
  onEmailPress: () => void;
}

export type HomeTabletProps = ThemedComponentProps & ComponentProps;

const HomeTabletComponent: React.FunctionComponent<HomeTabletProps> = (props) => {
  const { themedStyle } = props;

  const onEditProfilePress = (): void => {
    props.onEditProfilePress();
  };

  const onMeetingItemPress = (isExample: boolean): void => {
    props.onMeetingItemPress(isExample);
  };

  const onMessagePress = (): void => {
    props.onEmailPress();
  };

  const onLogoutPress = (): void => {
    props.onLogoutPress();
  };

  const onHelpPress = (): void => {

  };

  const onDatePress = (): void => {

  };

  const onQRCodePress = (): void => {
    props.onQRCodePress();
  };

  const onSearchPress = (): void => {
    props.onSearchPress();
  };

  const renderMeetings = (): React.ReactElement[] => {
    return props.meetings.map((item, index) => {
      return (
        <HomeMeetingItemTablet
          onMeetingItemPress={onMeetingItemPress}
          meeting={item.contents}
          day={item.day}
          date={item.date}
          isSunday={index === props.meetings.length - 1 ? true : false}
        />
      );
    });
  };

  return (
    <View style={themedStyle.container}>
      <HomeHeader
        onLogoutPress={onLogoutPress}
        onMessagePress={onMessagePress}
        onHelpPress={onHelpPress}
      />
      <View style={themedStyle.viewCard}>
        <ProfileInfoTablet
          user={props.user}
          onProfilePress={onEditProfilePress}
          onQRCodePress={onQRCodePress}
          onSearchPress={onSearchPress}
        />
        <WeekSelector
          weekSelected={props.currentWeek}
          numWeeks={4}
          onWeekPress={onDatePress}
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

export const HomeTablet = withStyles(HomeTabletComponent, (theme: ThemeType) => ({
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
