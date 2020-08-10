import {
  SpinnerSetEnabledAction,
  SET_ENABLED_SPINNER,
} from './types';

export const onSetEnabledSpinner = (payload: boolean): SpinnerSetEnabledAction => ({
  type: SET_ENABLED_SPINNER,
  payload,
});
