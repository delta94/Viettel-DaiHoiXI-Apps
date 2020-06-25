import React from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Notification } from '@src/core/models/notification/notification.model';
import { textStyle } from '@src/components';
import { pxToPercentage } from '@src/core/utils/utils';
import { SafeAreaView } from 'react-navigation';

interface ComponentProps {
  notification: Notification;
}

export type NotificationDetailProps = ThemedComponentProps & ComponentProps;

const NotificationDetailComponent: React.FunctionComponent<NotificationDetailProps> = (props) => {
  const { themedStyle, notification } = props;

  return (
    <ScrollView style={themedStyle.container}>
      <SafeAreaView>
        <View style={themedStyle.viewItem}>
          <Text style={themedStyle.txtTitle}>
            {notification.title}
          </Text>
          <Text style={themedStyle.txtDescription}>
            {notification.description}
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export const NotificationDetail = withStyles(NotificationDetailComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingTop: pxToPercentage(8),
    backgroundColor: theme['background-basic-color-2'],
  },
  viewItem: {
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
    textAlign: 'justify',
    fontSize: pxToPercentage(14),
    color: theme['text-basic-color'],
    ...textStyle.semibold,
  },
  txtDescription: {
    textAlign: 'justify',
    marginTop: pxToPercentage(15),
    fontSize: pxToPercentage(14),
    color: theme['text-basic-color'],
    ...textStyle.regular,
  },
}));
