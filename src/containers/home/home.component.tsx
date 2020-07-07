import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
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
import { meetingDataFake } from '@src/core/data/meeting';
import { HomeMeetingWeek } from './homeMeetingWeek.component';
interface ComponentProps {
  week: string;
  onMeetingItemPress: () => void;
}import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export type HomeProps = ThemedComponentProps & ComponentProps;

const HomeComponent: React.FunctionComponent<HomeProps> = (props) => {
  const onMeetingItemPress = (): void => {
    props.onMeetingItemPress();
  };

  const onNextWeekItemPress = (): void => {
    alert(wp.caller);
  };

  const onPrevWeekItemPress = (): void => {
    alert('do prev week');
  };
  const { themedStyle } = props;
  // sessison default color
  const renderTodayMeeting = (): React.ReactElement[] => {
    return meetingDataFake.default.map((item, index) => {
      return (
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={onMeetingItemPress}
        >
          <HomeMeetingItem
            key={index}
            isTypeDefault
            meetingItem={item}
          />
        </TouchableOpacity>
      );
    });
  };
  // sessison pink color
  const renderFeatureMeeting = (): React.ReactElement[] => {
    return meetingDataFake.pink.map((item, index) => {
      return (
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={onMeetingItemPress}>
          <HomeMeetingItem
            key={index}
            meetingItem={item}
          />
        </TouchableOpacity>
      );
    });
  };
  return (
    <View style={themedStyle.container}>
      <ProfileInfo
        user={userDataFake}
        style={themedStyle.profileInfo}
      />
      <ScrollView style={themedStyle.scrollView} showsVerticalScrollIndicator={false} >
        <HomeMeetingWeek
          meetingItemWeek={props.week}
          onPressNextWeek={onNextWeekItemPress}
          onPressPrevWeek={onPrevWeekItemPress}
        />
        {renderTodayMeeting()}
        {renderFeatureMeeting()}
      </ScrollView>
    </View>
  );
};

export const Home = withStyles(HomeComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-custom-100'],
  },
  scrollView: {
    marginVertical: pxToPercentage(6),
    marginHorizontal: pxToPercentage(8),
    paddingHorizontal: pxToPercentage(8),
    paddingVertical: pxToPercentage(4),
    borderTopLeftRadius: pxToPercentage(16),
    borderTopRightRadius: pxToPercentage(16),
    borderWidth: pxToPercentage(1),
    borderColor: theme['border-basic-color-4'],
  },
  profileInfo: {
    marginBottom: pxToPercentage(8, true),
    paddingVertical: pxToPercentage(8, true),
    paddingHorizontal: pxToPercentage(16),
    backgroundColor: theme['background-basic-color-1'],
  },
}));
