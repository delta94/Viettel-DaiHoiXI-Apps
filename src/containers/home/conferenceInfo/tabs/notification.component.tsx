import React from 'react';
import {
  Text,
  TouchableOpacity,
  FlatList,
  View,
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
import { AttachmentIcon } from '@src/assets/icons';

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
        style={themedStyle.flatList}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={themedStyle.scrollViewContainer}
        renderItem={({ item, index }) => {
          return (
            <View style={themedStyle.btnItem}>
              <TouchableOpacity
                activeOpacity={0.75}
                onPress={() => onNotificationItemPress(item)}
              >
                <Text style={themedStyle.txtTitle}>
                  {item.title}
                </Text>
              </TouchableOpacity>
              <View style={themedStyle.viewAttachment}>
                {AttachmentIcon(themedStyle.icon)}
                <Text style={themedStyle.txtAttachment}>
                  {'Tập tin đính kèm'}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </Layout>
  );
};

export const Notification = withStyles(NotificationComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-custom-100'],
  },
  flatList: {
    backgroundColor: theme['color-custom-100'],
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
  viewAttachment: {
    flexDirection: 'row',
  },
  icon: {
    height: pxToPercentage(20),
    width: pxToPercentage(20),
  },
  txtAttachment: {
    fontSize: pxToPercentage(14),
    ...textStyle.proDisplayRegular,
    marginLeft: pxToPercentage(10),
  },
}));
