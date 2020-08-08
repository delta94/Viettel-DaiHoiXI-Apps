import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { SpeechList } from './speechList.component';
import { speechDataFake } from '@src/core/data/speech';
import { isTablet } from 'react-native-device-info';
import { Speech } from '@src/core/models/speech/speech.model';
import { alerts } from '@src/core/utils/alerts';
import { SpeechStatusEnum } from '@src/core/utils/constants';
import { SpeechListTablet } from './speechList.component.tablet';

export const SpeechListContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'SpeechListContainer';
  const [delegateSpeechList, setDelegateSpeechList] = React.useState<Speech[]>(speechDataFake);

  const onSpeechInvitationPress = (id: number) => {
    // check speeching
    let isSpeeching = false;
    for (let i = 0; i < delegateSpeechList.length; i++) {
      if (delegateSpeechList[i].status === SpeechStatusEnum.Speaking && i !== id) {
        isSpeeching = true;
        alerts.alert({
          title: 'Thông báo',
          message: 'Đang có đại biểu khác phát biểu',
        });
        break;
      }
    }
    // if this delegate speech -> stop speech
    if (delegateSpeechList[id].status === SpeechStatusEnum.Speaking) {
      // stop speech -> change status to compolete speech
      setDelegateSpeechList(delegateSpeechList.map((item, index) =>
        index === id ?
          { ...item, status: SpeechStatusEnum.Finished }
          : item));
    } else {
      // if have no one speeching change this delegate status to speeching
      if (!isSpeeching) {
        setDelegateSpeechList(delegateSpeechList.map((item, index) =>
          index === id ?
            { ...item, status: SpeechStatusEnum.Speaking }
            : item));
      }

    }
  };

  if (isTablet()) {
    return (
      <SpeechListTablet
        onSpeechInvitationPress={onSpeechInvitationPress}
        speechs={delegateSpeechList}
      />
    );
  }
  return (
    <SpeechList
      speechs={speechDataFake}
    />
  );
};
