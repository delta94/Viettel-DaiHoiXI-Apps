import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import { Table } from '@src/components/table/table.component';
import { Thead } from '@src/components/table/thead.component';
import { Th } from '@src/components/table/th.component';
import { Tbody } from '@src/components/table/tbody.component';
import { Tr } from '@src/components/table/tr.component';
import { Td } from '@src/components/table/td.component';
import { SearchIcon, AttachmentIcon } from '@src/assets/icons';
import { Notification as NotificationModel } from '@src/core/models/notification/notification.model';
import { AttachmentModal } from '../../attachmentModel.component';

interface ComponentProps {
  notifications: NotificationModel[];
  onNotificationItemPress: (notification: NotificationModel) => void;
}

export type PressReleaseTabletProps = ComponentProps & ThemedComponentProps;

const PressReleaseTabletComponent: React.FunctionComponent<PressReleaseTabletProps> = (props) => {
  const { themedStyle } = props;
  const [isShowModal, setIsShowModal] = React.useState<boolean>(false);

  const onAttachMentIconPress = () => {
    setIsShowModal(!isShowModal);
  };
  const onNotificationItemPress = (notification: NotificationModel): void => {
    props.onNotificationItemPress(notification);
  };

  const renderNotifications = (): React.ReactElement[] => {
    return props.notifications.map((item, index) => {
      return (
        <Tr key={index}>
          <Td alignItems='center' width={110}>
            <Text style={themedStyle.txtInfo}>
              {++index}
            </Text>
          </Td>
          <Td>
            <Text style={themedStyle.txtInfo}>
              {item.title}
            </Text>
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={onAttachMentIconPress}
              style={themedStyle.viewAttachment}>
              {AttachmentIcon(themedStyle.iconAttachment)}
              <Text style={themedStyle.txtAttachment}>
                {'Tập tin đín kèm'}
              </Text>
            </TouchableOpacity>
          </Td>
          <Td alignItems='center' width={200}>
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={() => onNotificationItemPress(item)}>
              {SearchIcon(themedStyle.iconSearch)}
            </TouchableOpacity>
          </Td>
        </Tr>
      );
    });
  };

  return (
    <Table style={themedStyle.container}>
      <Thead>
        <Th alignItems='center' width={110}>
          {'STT'}
        </Th>
        <Th alignItems='center'>
          {'Nội dung'}
        </Th>
        <Th alignItems='center' width={200}>
          {'Xem'}
        </Th>
      </Thead>
      <Tbody>
        {renderNotifications()}
      </Tbody>
      <AttachmentModal
        isVisible={isShowModal}
        onClosePress={onAttachMentIconPress}
      />
    </Table>
  );
};

export const NotificationTablet = withStyles(PressReleaseTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    marginTop: pxToPercentage(28),
  },
  txtInfo: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
  iconSearch: {
    width: pxToPercentage(54),
    height: pxToPercentage(54),
  },
  iconAttachment: {
    height: pxToPercentage(40),
    width: pxToPercentage(40),
  },
  viewAttachment: {
    flexDirection: 'row',
    marginTop: pxToPercentage(8),
  },
  txtAttachment: {
    fontSize: pxToPercentage(28),
    ...textStyle.proDisplayRegular,
    marginLeft: pxToPercentage(10),
  },
}));
