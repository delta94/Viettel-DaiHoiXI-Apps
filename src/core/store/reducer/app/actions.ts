import {
  SpinnerSetEnabledAction,
  SET_ENABLED_SPINNER,
  SET_FLAG,
  SetFlagAction,
} from './types';

export const onSetEnabledSpinner = (isEnabled: boolean, textSpinner?: string): SpinnerSetEnabledAction => ({
  type: SET_ENABLED_SPINNER,
  payload: {
    isEnabled,
    textSpinner,
  },
});

export const onSetFlag = (payload: boolean): SetFlagAction => ({
  type: SET_FLAG,
  payload,
});
