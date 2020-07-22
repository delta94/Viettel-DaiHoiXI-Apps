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
import { WeeklyMeetingItem } from '@src/core/models/meeting/meeting.model';
import { textStyle } from '@src/components';
import { pxToPercentage } from '@src/core/utils/utils';

interface ComponentProps extends TouchableOpacityProps {
  meeting: WeeklyMeetingItem[];
  isSunday?: boolean;
  onMeetingItemPress?: (isExample: boolean) => void;
  day: number;
  date: string;
}

export type HomeMeetingItemProps = ThemedComponentProps & ComponentProps & ListItemProps;

const HomeMeetingItemComponent: React.FunctionComponent<HomeMeetingItemProps> = (props) => {
  const { style, themedStyle, meeting, ...restProps } = props;

  const onMeetingItemPress = (isExample: boolean): void => {
    return props.onMeetingItemPress(isExample);
  };

  const renderMeetings = (): React.ReactElement[] => {
    return props.meeting.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          activeOpacity={0.75}
          onPress={() => { onMeetingItemPress(item.isExample); }}
          {...restProps}
          style={themedStyle.viewItem}>
          <View
            style={[
              themedStyle.viewContent,
              item.isExample ? themedStyle.viewContentBorderExample : themedStyle.viewContentBorderDefault,
            ]}>
            <View style={themedStyle.viewCongressName}>
              <Text style={themedStyle.txtColorGray}>
                {`${item.fromTime} - ${item.toTime}`}
              </Text>
              {item.isExample &&
                (<Text style={themedStyle.txtCongressNameExample}>
                  {item.name}
                </Text>)}
              {!item.isExample &&
                (<Text style={themedStyle.txtCongressName}>
                  {item.name}
                </Text>)}
            </View>
          </View>
        </TouchableOpacity >
      );
    });
  };

  return (
    <View
      style={[
        themedStyle.container,
        props.isSunday && themedStyle.viewSunday,
      ]}>
      <View style={themedStyle.viewDate}>
        <Text
          style={[
            themedStyle.txtColorGray,
            themedStyle.txtDate,
          ]}>
          {props.date}
        </Text>
        <Text style={themedStyle.txtColorGray}>
          {props.isSunday ? 'Chủ nhật' : `Thứ ${props.day + 1}`}
        </Text>
      </View>
      {props.meeting.length !== 0 && renderMeetings()}
    </View>
  );
};

export const HomeMeetingItemTablet = withStyles(HomeMeetingItemComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    borderRightWidth: pxToPercentage(2),
    borderColor: theme['color-primary-18'],
  },
  viewItem: {
    flex: 1,
  },
  viewSunday: {
    backgroundColor: theme['color-primary-31'],
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
  txtCongressNameExample: {
    color: theme['color-primary-0'],
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
    lineHeight: pxToPercentage(54),
  },
  viewContent: {
    marginVertical: pxToPercentage(30),
    flexDirection: 'row',
  },
  viewContentBorderDefault: {
    borderLeftWidth: pxToPercentage(10),
    borderColor: theme['color-primary-2'],
  },
  viewContentBorderExample: {
    borderLeftWidth: pxToPercentage(10),
    borderColor: theme['color-primary-0'],
  },
  txtCongressName: {
    lineHeight: pxToPercentage(54),
    color: theme['color-primary-2'],
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
  viewCongressName: {
    flex: 1,
    paddingLeft: pxToPercentage(16),
    paddingRight: pxToPercentage(14),
  },
}));
