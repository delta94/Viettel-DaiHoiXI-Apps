import React from 'react';
import { View } from 'react-native';
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
import { ContainerView } from '@src/components';

interface ComponentProps {
  example?: any;
}

export type HomeProps = ThemedComponentProps & ComponentProps;

const HomeComponent: React.FunctionComponent<HomeProps> = (props) => {
  const { themedStyle } = props;

  const renderTodayMeeting = (): React.ReactElement[] => {
    return meetingDataFake.today.map((item, index) => {
      return (
        <HomeMeetingItem
          key={index}
          isToday
          meetingItem={item}
        />
      );
    });
  };

  const renderFeatureMeeting = (): React.ReactElement[] => {
    return meetingDataFake.feature.map((item, index) => {
      return (
        <HomeMeetingItem
          key={index}
          meetingItem={item}
        />
      );
    });
  };

  return (
    <View style={themedStyle.container}>
      <ProfileInfo
        user={userDataFake}
        style={themedStyle.profileInfo}
      />
      <ContainerView>
        {renderTodayMeeting()}
        {renderFeatureMeeting()}
      </ContainerView>
    </View>
  );
};

export const Home = withStyles(HomeComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-custom-100'],
  },
  profileInfo: {
    marginBottom: pxToPercentage(8),
    paddingVertical: pxToPercentage(8),
    paddingHorizontal: pxToPercentage(16),
    backgroundColor: theme['background-basic-color-1'],
  },
}));
