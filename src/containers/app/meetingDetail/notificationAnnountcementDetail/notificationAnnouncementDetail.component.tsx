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
import { Notification as NotificationModel } from '@src/core/models/notification/notification.model';
import { textStyle } from '@src/components';
import { pxToPercentage } from '@src/core/utils/utils';
import { SafeAreaView } from 'react-navigation';
import { viewStyle } from '@src/components/viewStyle';

interface ComponentProps {
  notification: NotificationModel;
}

export type NotificationAnnouncementDetailProps = ThemedComponentProps & ComponentProps;

const NotificationAnnouncementDetailComponent: React.FunctionComponent<NotificationAnnouncementDetailProps> = (props) => {
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

export const NotificationAnnouncementDetail = withStyles(NotificationAnnouncementDetailComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    padding: pxToPercentage(8),
    color: theme['color-custom-100'],
  },
  viewItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: pxToPercentage(8),
    borderRadius: pxToPercentage(5),
    justifyContent: 'center',
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
  },
  txtTitle: {
    textAlign: 'justify',
    lineHeight: pxToPercentage(25),
    fontSize: pxToPercentage(14),
    color: theme['text-basic-color'],
    ...textStyle.proTextBold,
  },
  txtDescription: {
    textAlign: 'justify',
    lineHeight: pxToPercentage(25),
    marginTop: pxToPercentage(15),
    fontSize: pxToPercentage(14),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegular,
  },
}));
