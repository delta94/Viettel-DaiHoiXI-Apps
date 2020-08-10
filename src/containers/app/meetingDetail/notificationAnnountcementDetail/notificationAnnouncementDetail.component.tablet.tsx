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
import { NotificationItem } from '@src/core/models/notification/notification.model';
import { textStyle } from '@src/components';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { AnnoucementItem } from '@src/core/models/annoucement/annoucement.model';

interface ComponentProps {
  notification: NotificationItem | AnnoucementItem;
}

export type NotificationAnnouncementDetailTabletProps = ThemedComponentProps & ComponentProps;

const NotificationAnnouncementDetailTabletComponent: React.FunctionComponent<NotificationAnnouncementDetailTabletProps> = (props) => {
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
            {notification.content}
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export const NotificationAnnouncementDetailTablet = withStyles(NotificationAnnouncementDetailTabletComponent, (theme: ThemeType) => ({
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
