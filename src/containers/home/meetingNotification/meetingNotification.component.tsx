import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { MeetingNotificationItem } from './meetingNotificationItem.component';
import {
  List,
  Datepicker,
} from '@kitten/ui';
import { Notification as NotificationModel } from '@src/core/models/notification/notification.model';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import { isTablet } from 'react-native-device-info';

interface ComponentProps {
  notifications: NotificationModel[];
  onNotificationItemPress: (notification: NotificationModel) => void;
}

export type MeetingNotificationProps = ThemedComponentProps & ComponentProps;

const MeetingNotificationComponent: React.FunctionComponent<MeetingNotificationProps> = (props) => {
  const [date, setDate] = React.useState(new Date());

  const onNotificationItemPress = (notification: NotificationModel): void => {
    props.onNotificationItemPress(notification);
  };

  const { themedStyle } = props;

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewDatepicker}>
        <Text style={themedStyle.txtChooseDate}>
          {'Chọn ngày:'}
        </Text>
        <Datepicker
          date={date}
          style={themedStyle.datepicker}
          onSelect={nextDate => setDate(nextDate)}
        />
      </View>
      <List
        data={props.notifications}
        style={themedStyle.container}
        extraData={props.notifications}
        contentContainerStyle={themedStyle.contentContainer}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <MeetingNotificationItem
              notification={item}
              onPress={() => onNotificationItemPress(item)}
            />
          );
        }}
      />
    </View>
  );
};

export const MeetingNotification = withStyles(MeetingNotificationComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-custom-100'],
  },
  viewDatepicker: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: pxToPercentage(16),
    marginHorizontal: pxToPercentage(16),
  },
  datepicker: {
    flex: 1,
  },
  txtChooseDate: {
    fontSize: isTablet() ? pxToPercentage(9) : pxToPercentage(14),
    color: theme['text-basic-color'],
    marginRight: pxToPercentage(15),
    marginBottom: pxToPercentage(5),
    ...textStyle.semibold,
  },
  contentContainer: {
  },
}));
