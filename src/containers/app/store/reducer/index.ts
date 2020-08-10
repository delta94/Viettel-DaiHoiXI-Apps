import {
  GET_MEETINGS_SUCCESS,
  MeetingState,
  MeetingActionTypes,
  GET_MEETING_WEEKS_SUCCESS,
  UPDATE_MEETING_WEEKS,
} from './types';

const initialState: MeetingState = {
  meetings: [],
  meetingWeeks: [],
};

export const meetingReducer = (state = initialState, action: MeetingActionTypes): MeetingState => {
  switch (action.type) {
    case GET_MEETINGS_SUCCESS: {
      return {
        ...state,
        meetings: action.payload,
      };
    }
    case GET_MEETING_WEEKS_SUCCESS: {
      return {
        ...state,
        meetingWeeks: action.payload,
      };
    }
    case UPDATE_MEETING_WEEKS: {
      return {
        ...state,
        meetingWeeks: [...state.meetingWeeks.map(item => {
          return {
            ...item,
            selected: item.id === action.payload,
          };
        })],
      };
    }
    default: {
      return state;
    }
  }
};

