import React from 'react';
import {
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Layout } from '@kitten/ui';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { textStyle } from '@src/components';
import { DateList } from '../dateList.component';
import { Notification as NotificationModel } from '@src/core/models/notification/notification.model';

interface ComponentProps {
  notifications: NotificationModel[];
  onNotificationItemPress: (notification: NotificationModel) => void;
}

export type NotificationProps = ComponentProps & ThemedComponentProps;

const NotificationComponent: React.FunctionComponent<NotificationProps> = (props) => {
  const { themedStyle } = props;

  const onNotificationItemPress = (notification: NotificationModel): void => {
    props.onNotificationItemPress(notification);
  };

  return (
    <Layout style={themedStyle.container}>
      <DateList />
      <FlatList
        data={props.notifications}
        extraData={props.notifications}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={themedStyle.scrollViewContainer}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={() => onNotificationItemPress(item)}
              style={themedStyle.btnItem}>
              <Text style={themedStyle.txtTitle}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </Layout>
  );
};

export const Notification = withStyles(NotificationComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    color: theme['color-custom-100'],
  },
  scrollViewContainer: {
    padding: pxToPercentage(8),
    paddingTop: 0,
  },
  btnItem: {
    padding: pxToPercentage(8),
    marginTop: pxToPercentage(8),
    borderRadius: pxToPercentage(5),
    justifyContent: 'center',
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
  },
  txtTitle: {
    fontSize: pxToPercentage(14),
    textAlign: 'justify',
    lineHeight: pxToPercentage(25),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegular,
  },
}));
