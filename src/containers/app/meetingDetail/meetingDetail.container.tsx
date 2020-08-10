import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { NotificationItem } from '@src/core/models/notification/notification.model';
import { AnnoucementItem } from '@src/core/models/annoucement/annoucement.model';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';
import { isTablet } from 'react-native-device-info';
import { Dispatch } from 'redux';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { ConferenceListState } from './store/reducer/types';
import { AppState } from '@src/core/store';
import { SessionState } from '@src/core/store/reducer/session/types';
import { onThunkGetProgramListReq, onThunkGetNotificationListReq, onThunkGetAnnoucementListReq } from './store/thunk';
import { MeetingDetailTablet } from './meetingDetail.component.tablet';
import { MeetingDetail } from './meetingDetail.component';

export const MeetingDetailContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'MeetingDetailContainer';

  const dispatch: Dispatch<any> = useDispatch();
  const meetingDetailReducer: ConferenceListState = useSelector((state: AppState) => state.meetingDetail);

  React.useEffect(() => {
    onGetDelegateList();
  }, []);

  const onGetDelegateList = (): void => {
    // dispatch(onThunkGetProgramListReq(meetingId, () => { }));
    // dispatch(onThunkGetNotificationListReq(meetingId, () => { }));
    // dispatch(onThunkGetPressReleaseListReq(meetingId, () => { }));

    // hard code meetingId
    dispatch(onThunkGetProgramListReq('e05561b7-b2ec-4d8e-8639-08d8352259e3', () => { }));
    dispatch(onThunkGetNotificationListReq('e05561b7-b2ec-4d8e-8639-08d8352259e3', () => { }));
    dispatch(onThunkGetAnnoucementListReq('e05561b7-b2ec-4d8e-8639-08d8352259e3', () => { }));
  };

  const onNotificationItemPress = (notification: NotificationItem): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'notification',
      params: {
        notification,
      },
    });
  };

  const onAnnoucementItemPress = (notification: AnnoucementItem): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'announcement',
      params: {
        notification,
      },
    });
  };

  const onMessagePress = (): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'chat',
    });
  };

  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  if (isTablet()) {
    return (
      <MeetingDetailTablet
        programs={meetingDetailReducer.programs}
        notifications={meetingDetailReducer.notifications}
        annoucements={meetingDetailReducer.annoucement}
        onNotificationItemPress={onNotificationItemPress}
        onAnnoucementItemPress={onAnnoucementItemPress}
        onBackPress={onBackPress}
        onMessagePress={onMessagePress}
      />
    );
  }
  return (
    <MeetingDetail
      programs={meetingDetailReducer.programs}
      notifications={meetingDetailReducer.notifications}
      annoucements={meetingDetailReducer.annoucement}
      onNotificationItemPress={onNotificationItemPress}
      onAnnoucementItemPress={onAnnoucementItemPress}
    />
  );
};
