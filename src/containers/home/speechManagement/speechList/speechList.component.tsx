import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { Speech as SpeechModel } from '@src/core/models/speech/speech.model';
import { SpeechItem } from './speechItem.component';
import { SpeechStatusEnum } from '@src/core/utils/constants';

interface ComponentProps {
  speechs: SpeechModel[];
}

export type SpeechListProps = ComponentProps & ThemedComponentProps;

const SpeechListComponent: React.FunctionComponent<SpeechListProps> = (props) => {

  const onGetAcceptedSpeechs = (): SpeechModel[] => {
    return props.speechs.filter(item => [
      SpeechStatusEnum.Accepted,
      SpeechStatusEnum.Speaking,
      SpeechStatusEnum.Finished,
    ].includes(item.status));
  };

  const { themedStyle } = props;

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewCard}>
        <FlatList
          data={onGetAcceptedSpeechs()}
          keyExtractor={(item, index) => index.toString()}
          extraData={props.speechs}
          contentContainerStyle={themedStyle.flatListContainer}
          renderItem={({ item, index }) => {
            return (
              <SpeechItem
                index={++index}
                speech={item}
              />
            );
          }}
        />
      </View>
      <SafeAreaView />
    </View>
  );
};

export const SpeechList = withStyles(SpeechListComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    padding: pxToPercentage(8),
    backgroundColor: theme['color-primary-11'],
  },
  flatListContainer: {
    paddingHorizontal: pxToPercentage(8),
  },
  viewCard: {
    flex: 1,
    borderRadius: pxToPercentage(12.5),
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
  },
}));
