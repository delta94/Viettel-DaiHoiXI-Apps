import React, { useEffect } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { SpeechSignUp } from './speechSignUp.component';
import { isTablet } from 'react-native-device-info';
import { SpeechSignUpTablet } from './speechSignUp.component.tablet';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import {
  onThunkSpeechFeildsReq,
  onThunkSignUpSpeechReq,
  onThunkUpdateSignUpSpeechReq,
} from './store/thunk';
import { AppState } from '@src/core/store';
import { SpeechSignUpState } from './store/reducer/types';
import { SpeechSignUpReducer } from './store/reducer';
import { SessionState } from '@src/core/store/reducer/session/types';

export const SpeechSignUpContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'SpeechSignUpContainer';
  const dispatch: Dispatch<any> = useDispatch();
  const speechSignUpReducer: SpeechSignUpState = useSelector((state: AppState) => state.speechSignUp);
  const meetingId: string = props.navigation.getParam('meetingId');
  const { deputy }: SessionState = useSelector((state: AppState) => state.session);
  const [isCreateScreen, setIsCreateScreen] = React.useState<boolean>(true);

  useEffect(() => {
    getSpeechFieldsList();
  }, []);

  const getSpeechFieldsList = () => {
    dispatch(onThunkSpeechFeildsReq());
  };

  const onSignUpSpeechSuccess = () => {
    setIsCreateScreen(false);
  };

  const onSigUpPress = (fieldIds: []) => {
    dispatch(onThunkSignUpSpeechReq(meetingId, deputy.userId, '2f3c5d2e-8e58-4790-ec2b-08d82d4728eb', fieldIds, onSignUpSpeechSuccess));
  };

  const onEditFieldPress = (fieldsId: []) => {
    dispatch(onThunkUpdateSignUpSpeechReq('', fieldsId, onSignUpSpeechSuccess));
    setIsCreateScreen(prevState => !prevState);
  };


  if (isTablet()) {
    return (
      <SpeechSignUpTablet
        fields={speechSignUpReducer.fields}
        onSigUpPress={onSigUpPress}
        isCreateScreen={isCreateScreen}
        onEditFieldPress={onEditFieldPress}
      />
    );
  }

  return (
    <SpeechSignUp
      onSigUpPress={onSigUpPress}
      fields={speechSignUpReducer.fields}
      isCreateScreen={isCreateScreen}
      onEditFieldPress={onEditFieldPress}
    />
  );
};
