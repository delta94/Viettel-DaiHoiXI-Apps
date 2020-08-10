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
import { MeetingDetailDate } from '../meetingDetailDate.component';
import { Notification as NotificationModel, NotificationItem } from '@src/core/models/notification/notification.model';
import { AttachmentIcon } from '@src/assets/icons';
import { AttachmentModal } from '../attachmentModel.component';
import { AnnoucementItem, Annoucement as AnnoucementModel } from '@src/core/models/annoucement/annoucement.model';

interface ComponentProps {
  notifications: NotificationModel[] | AnnoucementModel[];
  onNotificationItemPress: (notification: NotificationItem | AnnoucementItem) => void;
  dateSelected: string;
  dateList: string[];
  onDatePress(date: string): void;
  isNotifications: boolean;
}

export type NotificationAnnouncementProps = ComponentProps & ThemedComponentProps;

const NotificationAnnouncementComponent: React.FunctionComponent<NotificationAnnouncementProps> = (props) => {
  const { themedStyle } = props;
  const [isShowModal, setIsShowModal] = React.useState<boolean>(false);

  const [notifications, setNotifications] = React.useState<NotificationModel[] | AnnoucementModel[]>(props.notifications);

  React.useEffect(() => {
    setNotifications(props.notifications.filter(item => item.date === props.dateSelected));
  }, [props.dateSelected, props.notifications]);

  const onNotificationItemPress = (notification: NotificationItem | AnnoucementItem): void => {
    props.onNotificationItemPress(notification);
  };

  const onAttachMentIconPress = () => {
    setIsShowModal(!isShowModal);
  };

  const onDatePress = (date: string): void => {
    props.onDatePress(date);
  };

  const getData = () => {
    if (props.isNotifications) {
      return notifications[0].notifications;
    }
    return notifications[0].annoucements;
  };

  return (
    <Layout style={themedStyle.container}>
      <MeetingDetailDate
        dateSelected={props.dateSelected}
        dateList={props.dateList}
        onDatePress={onDatePress} />
      <FlatList
        data={notifications.length > 0 && getData()}
        extraData={notifications}
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
              <TouchableOpacity
                onPress={onAttachMentIconPress}
                activeOpacity={0.75}
                style={themedStyle.viewAttachment}>
                {AttachmentIcon(themedStyle.icon)}
                <Text style={themedStyle.txtAttachment}>
                  {'Tập tin đính kèm'}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <AttachmentModal
        isVisible={isShowModal}
        onClosePress={onAttachMentIconPress}
      />
    </Layout>
  );
};

export const NotificationAnnouncement = withStyles(NotificationAnnouncementComponent, (theme: ThemeType) => ({
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
