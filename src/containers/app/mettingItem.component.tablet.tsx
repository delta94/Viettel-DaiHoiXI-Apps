import React from 'react';
import {
  ListItemProps,
} from '@kitten/ui';
import {
  Text,
  View,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { textStyle } from '@src/components';
import { pxToPercentage } from '@src/core/utils/utils';
import { MeetingItem as MeetingItemModal } from '@src/core/models/meeting/meeting.model';

interface ComponentProps extends TouchableOpacityProps {
  day: string;
  date: string;
  meetings: MeetingItemModal[];
  onMeetingItemPress: (meetingId: string) => void;
}

export type MeetingItemProps = ThemedComponentProps & ComponentProps & ListItemProps;

const MeetingItemComponent: React.FunctionComponent<MeetingItemProps> = (props) => {
  const { style, themedStyle, ...restProps } = props;

  const onMeetingItemPress = (meetingId: string): void => {
    return props.onMeetingItemPress(meetingId);
  };

  const renderMeetings = (): React.ReactElement[] => {
    return props.meetings.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          activeOpacity={0.75}
          onPress={() => onMeetingItemPress(item.meetingId)}
          {...restProps}
          style={themedStyle.viewItem}>
          <View
            style={[
              themedStyle.viewContent,
              item.color && { borderColor: item.color },
            ]}>
            <View style={themedStyle.viewCongressName}>
              <Text style={themedStyle.txtColorGray}>
                {item.time}
              </Text>
              <Text
                style={[
                  themedStyle.txtCongressName,
                  item.color && { color: item.color },
                ]}>
                {item.meetingName}
              </Text>
            </View>
          </View>
        </TouchableOpacity >
      );
    });
  };

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewDate}>
        <Text
          style={[
            themedStyle.txtColorGray,
            themedStyle.txtDate,
          ]}>
          {props.date}
        </Text>
        <Text style={themedStyle.txtColorGray}>
          {props.day}
        </Text>
      </View>
      {props.meetings.length !== 0 && renderMeetings()}
    </View>
  );
};

export const MeetingItemTablet = withStyles(MeetingItemComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    borderRightWidth: pxToPercentage(2),
    borderColor: theme['color-primary-18'],
  },
  viewItem: {
    flex: 1,
  },
  viewDate: {
    alignItems: 'center',
  },
  txtColorGray: {
    color: theme['color-primary-18'],
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
  txtDate: {
    fontSize: pxToPercentage(58),
  },
  txtCongressName: {
    lineHeight: pxToPercentage(54),
    color: theme['color-primary-0'],
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
  viewContent: {
    flexDirection: 'row',
    marginVertical: pxToPercentage(30),
    borderLeftWidth: pxToPercentage(10),
    borderColor: theme['color-primary-0'],
  },
  viewCongressName: {
    flex: 1,
    paddingLeft: pxToPercentage(16),
    paddingRight: pxToPercentage(14),
  },
}));
