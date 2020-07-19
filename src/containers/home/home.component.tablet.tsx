import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { MeetingItem } from '@src/core/models/meeting/meeting.model';
import { viewStyle } from '@src/components/viewStyle';
import { User } from '@src/core/models/user/user.model';
import { HomeHeader } from '@src/components/header/homeHeader.component';
import { ProfileInfoTablet } from '@src/components/profileInfo/profileInfo.component.tablet';
import { Table } from '@src/components/table/table.component';
import { Thead } from '@src/components/table/thead.component';
import { Th } from '@src/components/table/th.component';
import { Tbody } from '@src/components/table/tbody.component';
import { Tr } from '@src/components/table/tr.component';
import { Td } from '@src/components/table/td.component';
import { textStyle } from '@src/components';
import { SearchIcon } from '@src/assets/icons';
import { DateSelector } from '@src/components/dateSelector/dateSelector.component';

interface ComponentProps {
  user: User;
  currentWeek: number;
  meetings: MeetingItem[];
  onMeetingItemPress: (isExample: boolean) => void;
  onEditProfilePress: () => void;
  onLogoutPress: () => void;
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

  };

  const onLogoutPress = (): void => {
    props.onLogoutPress();
  };

  const onHelpPress = (): void => {

  };

  const onDatePress = (): void => {

  };

  const renderMeetings = (): React.ReactElement[] => {
    return props.meetings.map((item, index) => {
      return (
        <Tr key={index}>
          <Td alignItems='center' width={110}>
            <Text style={themedStyle.txtTd}>
              {++index}
            </Text>
          </Td>
          <Td alignItems='center' width={300}>
            <Text style={themedStyle.txtTd}>
              {`${item.fromTime} - ${item.toTime}`}
            </Text>
          </Td>
          <Td>
            <Text style={themedStyle.txtTd}>
              {item.name}
            </Text>
          </Td>
          <Td alignItems='center' width={200}>
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={() => onMeetingItemPress(item.isExample)}>
              {SearchIcon(themedStyle.iconSearch)}
            </TouchableOpacity>
          </Td>
        </Tr>
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
          onProfilePress={() => { }}
          onQRCodePress={() => { }}
          onSearchPress={() => { }}
        />
        <DateSelector
          dateSelected={new Date()}
          numDates={4}
          onDatePress={onDatePress}
        />
        <Table style={themedStyle.viewTable}>
          <Thead>
            <Th alignItems='center' width={110}>
              {'STT'}
            </Th>
            <Th alignItems='center' width={300}>
              {'Thời gian'}
            </Th>
            <Th alignItems='center'>
              {'Nội dung'}
            </Th>
            <Th alignItems='center' width={200}>
              {'Xem'}
            </Th>
          </Thead>
          <Tbody>
            {renderMeetings()}
          </Tbody>
        </Table>
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
  viewTable: {
    flex: 1,
    marginTop: pxToPercentage(28),
  },
  txtTd: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
  iconSearch: {
    width: pxToPercentage(54),
    height: pxToPercentage(54),
  },
}));
