import {
  MeetingDetailState,
  MeetingDetailActionTypes,
  GET_PROGRAM_LIST_SUCCESS,
  GET_ANNOUCEMENT_LIST_SUCCESS,
  GET_NOTIFICATION_LIST_SUCCESS,

} from './types';

const initialState: MeetingDetailState = {
  programs: [],
  annoucement: [],
  notifications: [],
};

export const meetingDetailReducer = (state = initialState, action: MeetingDetailActionTypes): MeetingDetailState => {
  switch (action.type) {
    case GET_PROGRAM_LIST_SUCCESS: {
      return {
        ...state,
        programs: action.payload,
      };
    }
    case GET_ANNOUCEMENT_LIST_SUCCESS: {
      return {
        ...state,
        annoucement: action.payload,
      };
    }
    case GET_NOTIFICATION_LIST_SUCCESS: {
      return {
        ...state,
        notifications: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
