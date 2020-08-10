import {
  DeputyState,
  DeputyActionTypes,
  GET_DEPUTY_DISCUSSION_GROUPS_SUCCESS,
  GET_DEPUTY_GROUPS_SUCCESS,
  GET_DEPUTY_DETAILS_SUCCESS,
  GET_DISCUSSION_GROUPS_SUCCESS,
  GET_DISCUSSION_GROUPS_KEY_MEMBER_SUCCESS,
} from './types';
import { DeputyDiscussionGroup } from '@src/core/models/deputy/deputyDiscussionGroup.model';
import { DiscussionGroupKeyMember } from '@src/core/models/deputy/keyMember.model';

const initialState: DeputyState = {
  deputyGroups: [],
  deputyDetails: [],
  deputyDiscussionGroups: new DeputyDiscussionGroup(),
  discussionGroup: [],
  discussionGroupKeyMember: new DiscussionGroupKeyMember(),
};

export const deputyReducer = (state = initialState, action: DeputyActionTypes): DeputyState => {
  switch (action.type) {
    case GET_DEPUTY_GROUPS_SUCCESS: {
      return {
        ...state,
        deputyGroups: action.payload,
      };
    }
    case GET_DEPUTY_DETAILS_SUCCESS: {
      return {
        ...state,
        deputyDetails: action.payload,
      };
    }
    case GET_DEPUTY_DISCUSSION_GROUPS_SUCCESS: {
      return {
        ...state,
        deputyDiscussionGroups: action.payload,
      };
    }
    case GET_DISCUSSION_GROUPS_SUCCESS: {
      return {
        ...state,
        discussionGroup: action.payload,
      };
    }
    case GET_DISCUSSION_GROUPS_KEY_MEMBER_SUCCESS: {
      return {
        ...state,
        discussionGroupKeyMember: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
