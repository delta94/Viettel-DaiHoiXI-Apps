import React from 'react';
import {
  View,
  Text,
  ImageProps,
  TouchableOpacity,
  ImageStyle,
  StyleProp,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  StyleType,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { BackHeader } from '@src/components/header/backHeader.component';
import { AttendanceTabEnum } from '@src/core/utils/constants';
import {
  PeopleIconOther,
  HallIcon,
} from '@src/assets/icons';
import { textStyle } from '@src/components';
import { DateSelector } from '@src/components/dateSelector/dateSelector.component';
import { HallAttendanceTablet } from './tabs/tablet/hallAttendance.component.tablet';
import { GroupAttendanceTablet } from './tabs/tablet/groupAttendance.component.tablet';
import { HallAttendance } from '@src/core/models/attendance/hallAttendance/hallAttendance.model';
import { GroupAttendance } from '@src/core/models/attendance/groupAttendance/groupAttendance.model';

interface ComponentProps {
  hallAttendance: HallAttendance[];
  groupAttendance: GroupAttendance[];
  onBackPress: () => void;
}

export type AttendanceTabletProps = ThemedComponentProps & ComponentProps;
type IconProp = (style: StyleType) => React.ReactElement<ImageProps>;

const AttendanceTabletComponent: React.FunctionComponent<AttendanceTabletProps> = (props) => {
  const [selectedTab, setSelectedTab] = React.useState(AttendanceTabEnum.Hall);
  const { themedStyle } = props;

  const onMessagePress = (): void => {

  };

  const onBackPress = (): void => {
    props.onBackPress();
  };

  const onHelpPress = (): void => {

  };

  const onDatePress = (): void => {

  };

  const isHallTab = () => {
    return selectedTab === AttendanceTabEnum.Hall;
  };

  const renderTabBtn = (type: number, title: string, icon: IconProp, iconStyle: StyleProp<ImageStyle>): React.ReactElement => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        style={[
          themedStyle.btnTab,
          selectedTab === type && themedStyle.btnSelected,
        ]}
        onPress={() => setSelectedTab(type)}>
        {icon([
          iconStyle,
          selectedTab === type && themedStyle.iconSelected,
        ])}
        <Text
          style={[
            themedStyle.txtTab,
            selectedTab === type && themedStyle.txtTabSelected,
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={themedStyle.container}>
      <BackHeader
        title={'ĐIỂM DANH'}
        onBackPress={onBackPress}
        onMessagePress={onMessagePress}
        onHelpPress={onHelpPress}
      />
      <View style={themedStyle.viewBody}>
        <View style={themedStyle.viewTab}>
          {renderTabBtn(AttendanceTabEnum.Hall, 'Hội Trường', HallIcon, themedStyle.iconHall)}
          {renderTabBtn(AttendanceTabEnum.Group, 'Tổ', PeopleIconOther, themedStyle.iconGroup)}
        </View>
        <View style={themedStyle.viewCard}>
          <DateSelector
            dateSelected={new Date()}
            numDates={3}
            onDatePress={onDatePress}
          />
          {isHallTab() && <HallAttendanceTablet attendances={props.hallAttendance} />}
          {!isHallTab() && <GroupAttendanceTablet groupAttendance={props.groupAttendance} />}
        </View>
      </View>
    </View>
  );
};

export const AttendanceTablet = withStyles(AttendanceTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: pxToPercentage(31),
    paddingBottom: pxToPercentage(31),
    backgroundColor: theme['color-primary-2'],
  },
  viewBody: {
    flex: 1,
    flexDirection: 'row',
  },
  viewTab: {
    justifyContent: 'center',
    marginRight: pxToPercentage(28),
  },
  viewCard: {
    flex: 1,
    borderRadius: pxToPercentage(40),
    backgroundColor: theme['color-custom-100'],
    paddingHorizontal: pxToPercentage(26),
    paddingVertical: pxToPercentage(29),
    ...viewStyle.shadow2,
  },
  btnTab: {
    width: pxToPercentage(260),
    height: pxToPercentage(400),
    backgroundColor: theme['color-primary-2'],
    borderWidth: pxToPercentage(2),
    borderRadius: pxToPercentage(32),
    borderColor: theme['color-primary-21'],
    marginVertical: pxToPercentage(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSelected: {
    backgroundColor: theme['color-primary-19'],
  },
  iconHall: {
    marginBottom: pxToPercentage(29),
    width: pxToPercentage(89.29),
    height: pxToPercentage(86),
    tintColor: 'white',
  },
  iconGroup: {
    marginBottom: pxToPercentage(34),
    width: pxToPercentage(124.58),
    height: pxToPercentage(62),
    tintColor: 'white',
  },
  iconSelected: {
    tintColor: theme['color-primary-2'],
  },
  txtTab: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayBold,
    color: 'white',
  },
  txtTabSelected: {
    color: theme['color-primary-2'],
  },
}));
