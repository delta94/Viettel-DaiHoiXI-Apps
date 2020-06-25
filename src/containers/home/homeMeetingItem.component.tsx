import React from 'react';
import {
  ListItem,
  ListItemProps,
} from '@kitten/ui';
import {
  Text,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { MeetingItem } from '@src/core/models/meeting/meeting.model';
import { textStyle } from '@src/components';
import { pxToPercentage } from '@src/core/utils/utils';

interface ComponentProps {
  meetingItem: MeetingItem;
  isToday?: boolean;
}

export type HomeMeetingItemProps = ThemedComponentProps & ComponentProps & ListItemProps;

const HomeMeetingItemComponent: React.FunctionComponent<HomeMeetingItemProps> = (props) => {
  const { style, themedStyle, meetingItem, ...restProps } = props;

  return (
    <ListItem
      activeOpacity={0.75}
      {...restProps}
      style={[
        themedStyle.container,
        style,
      ]}>
      <View
        style={[
          themedStyle.viewHeader,
          props.isToday && themedStyle.viewHeaderToday,
        ]} />
      <Text style={themedStyle.txtName} >
        {meetingItem.name}
      </Text>
      <Text style={themedStyle.txtTime} >
        {meetingItem.time}
      </Text>
    </ListItem>
  );
};

export const HomeMeetingItem = withStyles(HomeMeetingItemComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: pxToPercentage(75.3),
    marginVertical: pxToPercentage(8),
    marginHorizontal: pxToPercentage(16),
    paddingHorizontal: pxToPercentage(16),
    paddingVertical: pxToPercentage(16),
    borderRadius: pxToPercentage(4),
    borderWidth: pxToPercentage(1),
    borderColor: theme['border-basic-color-4'],
  },
  viewHeader: {
    position: 'absolute',
    height: pxToPercentage(75.3),
    width: pxToPercentage(7),
    borderTopLeftRadius: pxToPercentage(4),
    borderBottomLeftRadius: pxToPercentage(4),
    backgroundColor: theme['color-primary-default'],
  },
  viewHeaderToday: {
    backgroundColor: theme['color-warning-default'],
  },
  txtName: {
    fontSize: pxToPercentage(16),
    color: theme['text-basic-color'],
    ...textStyle.semibold,
  },
  txtTime: {
    fontSize: pxToPercentage(14),
    color: theme['text-hint-color'],
    ...textStyle.regular,
  },
}));
