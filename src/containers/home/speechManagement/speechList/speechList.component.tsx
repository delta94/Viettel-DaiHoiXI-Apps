import React from 'react';
import {
  View,
  TouchableOpacity,
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
import DraggableFlatList from 'react-native-draggable-flatlist';

interface ComponentProps {
  speechs: SpeechModel[];
  onSpeechInvitationPress: (id: string) => void;
  onEndDrag: (data: SpeechModel[]) => void;
}

export type SpeechListProps = ComponentProps & ThemedComponentProps;

const SpeechListComponent: React.FunctionComponent<SpeechListProps> = (props) => {
  interface TimeProps {
    time: number;
    id: string;
  }
  const [timer, setTime] = React.useState<TimeProps>({
    id: null,
    time: 600,
  });

  React.useEffect(() => {
    const findSpeadker = props.speechs.filter(item => {
      return item.status === SpeechStatusEnum.Speaking;
    });
    if (findSpeadker.length > 0 && findSpeadker[0].id !== timer.id) {
      setTime({ time: 600, id: findSpeadker[0].id });
    }
  }, [props.speechs]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (timer.time) {
        if (props.speechs.filter(item => item.status === SpeechStatusEnum.Speaking)) {
          setTime({ ...timer, time: timer.time - 1 });
        } else {
          clearInterval(interval);
        }
      } else {
        props.onSpeechInvitationPress(timer.id);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const onGetAcceptedSpeechs = (): SpeechModel[] => {
    return props.speechs.filter(item => [
      SpeechStatusEnum.Accepted,
      SpeechStatusEnum.Speaking,
      SpeechStatusEnum.Finished,
    ].includes(item.status));
  };

  const onEndDrag = (data: SpeechModel[]) => {
    return props.onEndDrag(data);
  };

  const { themedStyle } = props;

  const renderItem = ({ item, index, drag, isActive }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        onLongPress={drag}>
        <SpeechItem
          index={++index}
          speech={item}
          cdTimer={timer.time}
          onSpeechInvitationPress={props.onSpeechInvitationPress}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewCard}>
        <DraggableFlatList
          onDragEnd={({ data }) => onEndDrag(data)}
          data={onGetAcceptedSpeechs()}
          keyExtractor={(item, index) => index.toString()}
          extraData={props.speechs}
          contentContainerStyle={themedStyle.flatListContainer}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export const SpeechList = withStyles(SpeechListComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    padding: pxToPercentage(8),
    paddingBottom: pxToPercentage(20),
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
