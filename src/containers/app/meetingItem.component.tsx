import React from 'react';
import { ListItemProps } from '@kitten/ui';
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
import { MeetingItem as MeetingItemModal } from '@src/core/models/meeting/meeting.model';
import { textStyle } from '@src/components';
import { pxToPercentage } from '@src/core/utils/utils';

interface ComponentProps extends TouchableOpacityProps {
  meetings: MeetingItemModal[];
  day: string;
  date: string;
  onMeetingItemPress: (meetingId: string) => void;
}

export type MeetingItemProps = ThemedComponentProps & ComponentProps & ListItemProps;

const MeetingItemComponent: React.FunctionComponent<MeetingItemProps> = (props) => {
  const { style, themedStyle, meetings: meeting, ...restProps } = props;

  const onMeetingItemPress = (meetingId: string): void => {
    props.onMeetingItemPress(meetingId);
  };

  const renderMeetings = (): React.ReactElement[] => {
    return props.meetings.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          activeOpacity={0.75}
          {...restProps}
          onPress={() => onMeetingItemPress(item.meetingId)}
          style={themedStyle.container}>
          <View style={themedStyle.sectionDate}>
            <View style={themedStyle.viewDate}>
              <Text
                style={[
                  themedStyle.txtDate,
                  item.color && { color: item.color },
                ]}>
                {props.date}
              </Text>
              <Text style={themedStyle.txtDay}>
                {props.day}
              </Text>
            </View>
            <View style={themedStyle.viewTimeline}>
              <View style={themedStyle.viewLine} />
              <View
                style={[
                  themedStyle.viewDot,
                  item.color && { backgroundColor: item.color },
                ]}
              />
            </View>
          </View>
          <View style={themedStyle.sectionContent}>
            <View
              style={[
                themedStyle.viewContent,
                item.color && { backgroundColor: item.color },
              ]}>
              <View style={themedStyle.viewContentInner}>
                <View
                  style={[
                    themedStyle.viewTime,
                    item.color && { backgroundColor: item.color },
                  ]}>
                  <Text
                    style={[
                      themedStyle.txtTime,
                      item.color && { color: item.color },
                    ]}>
                    {item.time}
                  </Text>
                </View>
                <Text style={themedStyle.txtName}>
                  {item.meetingName}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View>
      {renderMeetings()}
    </View>
  );
};

export const MeetingItem = withStyles(MeetingItemComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    height: pxToPercentage(110),
  },
  sectionDate: {
    flexDirection: 'row',
    width: pxToPercentage(85),
  },
  sectionContent: {
    flex: 1,
    paddingVertical: pxToPercentage(10),
  },
  viewDate: {
    justifyContent: 'center',
    alignItems: 'center',
    width: pxToPercentage(60),
  },
  viewTimeline: {
    justifyContent: 'center',
    alignItems: 'center',
    width: pxToPercentage(25),
  },
  viewContent: {
    flex: 1,
    paddingLeft: pxToPercentage(7.5),
    paddingBottom: pxToPercentage(1.5),
    paddingRight: pxToPercentage(1.5),
    borderRadius: pxToPercentage(12.5),
    backgroundColor: theme['color-primary-0'],
  },
  viewContentInner: {
    flex: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    opacity: 0.9,
    paddingHorizontal: pxToPercentage(15),
    borderRadius: pxToPercentage(12.5),
    backgroundColor: theme['color-custom-100'],
  },
  viewTime: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: pxToPercentage(15),
    paddingBottom: pxToPercentage(2),
    top: -pxToPercentage(20),
    width: pxToPercentage(150),
    height: pxToPercentage(40),
    backgroundColor: theme['color-primary-0'],
  },
  txtTime: {
    fontSize: pxToPercentage(12),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegular,
  },
  viewLine: {
    width: pxToPercentage(1),
    height: pxToPercentage(110),
    backgroundColor: theme['color-basic-400'],
  },
  viewDot: {
    position: 'absolute',
    width: pxToPercentage(10),
    height: pxToPercentage(10),
    borderRadius: pxToPercentage(5),
    backgroundColor: theme['color-primary-0'],
  },
  txtDate: {
    fontSize: pxToPercentage(20),
    color: theme['color-primary-0'],
    ...textStyle.proTextRegularItalic,
  },
  txtDay: {
    fontSize: pxToPercentage(13),
    marginTop: pxToPercentage(2.5),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegular,
  },
  txtName: {
    fontSize: pxToPercentage(13),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegular,
  },
}));
