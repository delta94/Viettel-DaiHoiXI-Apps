import DeputyService from '@src/core/services/deputy.service';
import { ThunkActionTypes } from '@src/core/store/thunk/types';
import {
  onGetDeputyGroupsSuccess,
  onGetDeputyDetailsSuccess,
  onGetDeputyDiscussionGroupsSuccess,
  onGetDiscussionGroupsSuccess,
  onGetDiscussionGroupKeyMemberSuccess,
} from '../reducer/actions';
import { catchHandle } from '@src/core/utils/catchHelper';
import { toasts } from '@src/core/utils/toasts';
import { onSetEnabledSpinner } from '@src/core/store/reducer/app/actions';

export const onThunkGetDeputyGroupsReq = (meetingId: string): ThunkActionTypes => async (dispatch) => {
  dispatch(onSetEnabledSpinner(true));

  const deputyService = new DeputyService();

  try {
    const res = await deputyService.getDeputyGroups(meetingId);

    if (res.success) {
      dispatch(onGetDeputyGroupsSuccess(res.data || []));
    } else {
      toasts.error(res.message);
    }
  } catch (e) {
    catchHandle(e, dispatch);
  }

  dispatch(onSetEnabledSpinner(false));
};

export const onThunkGetDeputyDetailsReq = (deputyId: string): ThunkActionTypes => async (dispatch) => {
  dispatch(onSetEnabledSpinner(true));

  const deputyService = new DeputyService();

  try {
    const res = await deputyService.getDeputyDetails(deputyId);

    if (res.success) {
      dispatch(onGetDeputyDetailsSuccess(res.data || []));
    } else {
      toasts.error(res.message);
    }
  } catch (e) {
    catchHandle(e, dispatch);
  }

  dispatch(onSetEnabledSpinner(false));
};

export const onThunkGetDeputyDiscussionGroupsReq = (meetingId: string, discussionGroupId: string): ThunkActionTypes => async (dispatch) => {
  dispatch(onSetEnabledSpinner(true));

  const deputyService = new DeputyService();

  try {
    const res = await deputyService.getDeputyDiscussionGroups(meetingId, discussionGroupId);
    if (res.success) {
      dispatch(onGetDeputyDiscussionGroupsSuccess(res.data));
    } else {
      toasts.error(res.message);
    }
  } catch (e) {
    catchHandle(e, dispatch);
  }

  dispatch(onSetEnabledSpinner(false));
};

export const onThunkGetDiscussionGroupsReq = (meetingId: string): ThunkActionTypes => async (dispatch) => {
  dispatch(onSetEnabledSpinner(true));

  const deputyService = new DeputyService();

  try {
    const res = await deputyService.getDiscussionGroups(meetingId);

    if (res.success) {
      dispatch(onGetDiscussionGroupsSuccess(res.data || []));
    } else {
      toasts.error(res.message + 'bien');
    }
  } catch (e) {
    catchHandle(e, dispatch);
  }

  dispatch(onSetEnabledSpinner(false));
};

export const onThunkGetDiscussionGroupsKeyMemberReq = (meetingId: string, discussionGroupId: string): ThunkActionTypes => async (dispatch) => {
  dispatch(onSetEnabledSpinner(true));

  const deputyService = new DeputyService();

  try {
    const res = await deputyService.getDiscussionGroupsKeyMember(meetingId, discussionGroupId);
    if (res.success) {
      dispatch(onGetDiscussionGroupKeyMemberSuccess(res.data));

    } else {
      toasts.error(res.message);
    }
  } catch (e) {
    catchHandle(e, dispatch);
  }

  dispatch(onSetEnabledSpinner(false));
};
