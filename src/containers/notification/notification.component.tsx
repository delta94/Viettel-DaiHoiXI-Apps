import React from 'react';
import { View } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { NotificationItem } from './notificationItem.component';
import { List } from '@kitten/ui';
import { Notification as NotificationModel } from '@src/core/models/notification/notification.model';
import { pxToPercentage } from '@src/core/utils/utils';

interface ComponentProps {
  notifications: NotificationModel[];
  onNotificationItemPress: (notification: NotificationModel) => void;
}

export type NotificationProps = ThemedComponentProps & ComponentProps;

const NotificationComponent: React.FunctionComponent<NotificationProps> = (props) => {
  const onNotificationItemPress = (notification: NotificationModel): void => {
    props.onNotificationItemPress(notification);
  };

  const { themedStyle } = props;

  return (
    <View style={themedStyle.container}>
      <List
        data={props.notifications}
        style={themedStyle.container}
        extraData={props.notifications}
        contentContainerStyle={themedStyle.contentContainer}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <NotificationItem
              notification={item}
              onPress={() => onNotificationItemPress(item)}
            />
          );
        }}
      />
    </View>
  );
};

export const Notification = withStyles(NotificationComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-custom-100'],
  },
  contentContainer: {
    paddingTop: pxToPercentage(8),
  },
}));
