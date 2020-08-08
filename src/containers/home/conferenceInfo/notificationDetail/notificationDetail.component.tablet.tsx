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
import { viewStyle } from '@src/components/viewStyle';

interface ComponentProps {
  notification: NotificationModel;
}

export type NotificationDetailTabletProps = ThemedComponentProps & ComponentProps;

const NotificationDetailTabletComponent: React.FunctionComponent<NotificationDetailTabletProps> = (props) => {
  const { themedStyle, notification } = props;

  return (
    <View style={themedStyle.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={themedStyle.viewCard}>
        <Text style={themedStyle.txtTitle}>
          {notification.title}
        </Text>
        <Text
          style={themedStyle.txtDescription}>
          {'Nội dung: '}
          <Text style={themedStyle.txtDescription}>
            {notification.description}
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const NotificationDetailTablet = withStyles(NotificationDetailTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: pxToPercentage(31),
    paddingBottom: pxToPercentage(31),
    backgroundColor: theme['color-primary-2'],
  },
  viewCard: {
    flex: 1,
    borderRadius: pxToPercentage(40),
    paddingVertical: pxToPercentage(40),
    paddingHorizontal: pxToPercentage(400),
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
  },
  txtTitle: {
    textAlign: 'justify',
    lineHeight: pxToPercentage(60),
    fontSize: pxToPercentage(36),
    color: theme['text-basic-color'],
    ...textStyle.proTextBold,
  },
  txtDescription: {
    textAlign: 'justify',
    lineHeight: pxToPercentage(55),
    marginTop: pxToPercentage(15),
    fontSize: pxToPercentage(34),
    color: theme['text-basic-color'],
    ...textStyle.proDisplayRegular,
  },
  txtBold: {
    ...textStyle.proTextBold,
  },
}));
