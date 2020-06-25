import React from 'react';
import {
  ListItem,
  ListItemProps,
} from '@kitten/ui';
import { Text } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { textStyle } from '@src/components';
import { pxToPercentage } from '@src/core/utils/utils';
import { Notification } from '@src/core/models/notification/notification.model';

interface ComponentProps {
  notification: Notification;
}

export type NotificationItemProps = ThemedComponentProps & ComponentProps & ListItemProps;

const NotificationItemComponent: React.FunctionComponent<NotificationItemProps> = (props) => {
  const { style, themedStyle, notification, ...restProps } = props;

  return (
    <ListItem
      activeOpacity={0.75}
      {...restProps}
      style={[
        themedStyle.container,
        style,
      ]}>
      <Text
        style={[
          themedStyle.txtTitle,
          notification.read && themedStyle.txtRead,
        ]}>
        {notification.title}
      </Text>
      <Text
        style={[
          themedStyle.txtDate,
          notification.read && themedStyle.txtRead,
        ]}>
        {notification.date}
      </Text>
    </ListItem>
  );
};

export const NotificationItem = withStyles(NotificationItemComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: pxToPercentage(8),
    marginHorizontal: pxToPercentage(16),
    paddingHorizontal: pxToPercentage(9),
    paddingVertical: pxToPercentage(9),
    borderRadius: pxToPercentage(4),
    borderWidth: pxToPercentage(1),
    borderColor: theme['border-basic-color-4'],
  },
  txtRead: {
    color: theme['text-hint-color'],
  },
  txtTitle: {
    fontSize: pxToPercentage(14),
    color: theme['text-basic-color'],
    textAlign: 'justify',
    ...textStyle.regular,
  },
  txtDate: {
    alignSelf: 'flex-end',
    marginTop: pxToPercentage(2),
    fontSize: pxToPercentage(12),
    color: theme['text-basic-color'],
    ...textStyle.regular,
  },
}));
