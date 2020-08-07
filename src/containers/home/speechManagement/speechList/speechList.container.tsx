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

  const onSpeechInvitationPress = (id: string) => {
    // check speeching
    if (delegateSpeechList.filter(item => item.status === SpeechStatusEnum.Speaking && item.id !== id).length > 0) {
      alerts.alert({
        title: 'Thông báo',
        message: 'Đang có đại biểu khác phát biểu',
      });
    } else {
      // if this delegate speech -> stop speech
      if (delegateSpeechList.filter(item => item.status === SpeechStatusEnum.Speaking && item.id === id).length > 0) {
        // stop speech -> change status to compolete speech
        setDelegateSpeechList(delegateSpeechList.map((item, index) => {
          return item.id === id ? { ...item, status: SpeechStatusEnum.Finished } : item;
        }));
      } else {
        // if have no one speeching change this delegate status to speeching
        setDelegateSpeechList(delegateSpeechList.map((item, index) => {
          return item.id === id ? { ...item, status: SpeechStatusEnum.Speaking } : item;
        }));
      }
    }
  };

  const onEndDrag = (data: Speech[]) => {
    setDelegateSpeechList(data);
  };

  if (isTablet()) {
    return (
      <SpeechListTablet
        onSpeechInvitationPress={onSpeechInvitationPress}
        speechs={delegateSpeechList}
        onEndDrag={onEndDrag}
      />
    );
  }
  return (
    <SpeechList
      speechs={delegateSpeechList}
      onEndDrag={onEndDrag}
      onSpeechInvitationPress={onSpeechInvitationPress}
    />
  );
};
