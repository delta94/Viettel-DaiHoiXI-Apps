import React, { useEffect } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Meeting } from './meeting.component';
import { MeetingTablet } from './meeting.component.tablet';
import { isTablet } from 'react-native-device-info';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { Dispatch } from 'redux';
import { SessionState } from '@src/core/store/reducer/session/types';
import { AppState } from '@src/core/store';
import { toasts } from '@src/core/utils/toasts';
import { MeetingState } from './store/reducer/types';
import { MeetingWeek as MeetingWeekModel } from '@src/core/models/meeting/meetingWeek.model';
import {
  onThunkGetMeetingWeeksReq,
  onThunkGetMeetingsReq,
} from './store/thunk';
import { onUpdateMeetingWeeks } from './store/reducer/actions';

export const MeetingContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'MeetingContainer';
  const dispatch: Dispatch<any> = useDispatch();
  const {
    loggedIn,
    deputy,
  }: SessionState = useSelector((state: AppState) => state.session);
  const {
    meetingWeeks,
    meetings,
  }: MeetingState = useSelector((state: AppState) => state.meetings);

  useEffect(() => {
    if (!loggedIn) {
      props.navigation.navigate({
        key: navigationKey,
        routeName: 'auth',
      });
    }
  }, [loggedIn]);

  useEffect(() => {
    onGetMeetingWeeks();
  }, []);

  useEffect(() => {
    if (meetingWeeks.length > 0) {
      const meetingWeekFound: MeetingWeekModel = meetingWeeks.find(meetingWeek => meetingWeek.selected);

      if (meetingWeekFound) {
        const dates = meetingWeekFound.id.split('-');
        const fromDates = dates[0].split('/');
        const toDates = dates[1].split('/');

        onGetMeetingByWeek(deputy.userId, `${fromDates[0]}-${fromDates[1]}-${fromDates[2]}`, `${toDates[0]}-${toDates[1]}-${toDates[2]}`);
      }
    }
  }, [meetingWeeks]);

  const onGetMeetingWeeks = (): void => {
    dispatch(onThunkGetMeetingWeeksReq());
  };

  const onGetMeetingByWeek = (userId: string, fromDate: string, toDate: string): void => {
    dispatch(onThunkGetMeetingsReq(userId, fromDate, toDate));
  };

  const onMeetingItemPress = (meetingId: string): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'menu',
      params: {
        meetingId,
      },
    });
  };

  const onMyProfilePress = (): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'deputyDetail',
      params: {
        deputy,
      },
    });
  };

  const onMyQRCodePress = (): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'myQRCode',
    });
  };

  const onEmailPress = (): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'chat',
    });
  };

  const onMeetingWeekPress = (meetingWeekId: string): void => {
    dispatch(onUpdateMeetingWeeks(meetingWeekId));
  };


  const onSearchPress = (): void => {
    toasts.info('Chức năng này không có sẵn!');
  };

  if (isTablet()) {
    return (
      <MeetingTablet
        deputy={deputy}
        meetingWeeks={meetingWeeks}
        meetings={meetings}
        onMyProfilePress={onMyProfilePress}
        onMeetingItemPress={onMeetingItemPress}
        onMeetingWeekPress={onMeetingWeekPress}
        onMyQRCodePress={onMyQRCodePress}
        onSearchPress={onSearchPress}
        onEmailPress={onEmailPress}
      />
    );
  }

  return (
    <Meeting
      deputy={deputy}
      meetingWeeks={meetingWeeks}
      meetings={meetings}
      onMyProfilePress={onMyProfilePress}
      onSearchPress={onSearchPress}
      onQRCodePress={onMyQRCodePress}
      onMeetingItemPress={onMeetingItemPress}
      onMeetingWeekPress={onMeetingWeekPress}
    />
  );
};
