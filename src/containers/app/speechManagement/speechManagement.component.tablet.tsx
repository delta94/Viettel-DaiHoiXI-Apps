import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Speech } from '@src/core/models/speech/speech.model';
import { pxToPercentage } from '@src/core/utils/utils';
import { Thead } from '@src/components/table/thead.component';
import { Th } from '@src/components/table/th.component';
import { Tr } from '@src/components/table/tr.component';
import { Td } from '@src/components/table/td.component';
import { textStyle } from '@src/components';
import { SpeechManagementStatusItemTablet } from './speechManagementStatusItem.component.tablet';
import { viewStyle } from '@src/components/viewStyle';
import { SpeechStatusEnum } from '@src/core/utils/constants';
import DraggableFlatList from 'react-native-draggable-flatlist';

interface ComponentProps {
  speechs: Speech[];
  onSpeechInvitationPress: (index: string) => void;
  onEndDrag: (data: Speech[]) => void;
}

export type SpeechManagementTabletProps = ThemedComponentProps & ComponentProps;

const SpeechManagementTabletComponent: React.FunctionComponent<SpeechManagementTabletProps> = (props) => {
  interface TimeProps {
    time: number;
    id: string;
  }
  const { themedStyle } = props;
  const [timer, setTime] = React.useState<TimeProps>({
    id: null,
    time: 600,
  });

  useEffect(() => {
    const findSpeadker = props.speechs.filter(item => {
      return item.status === SpeechStatusEnum.Speaking;
    });
    if (findSpeadker.length > 0 && findSpeadker[0].id !== timer.id) {
      setTime({ time: 600, id: findSpeadker[0].id });
    }
  }, [props.speechs]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer.time) {
        if (props.speechs.filter(item => item.status === SpeechStatusEnum.Speaking)) {
          setTime({ ...timer, time: timer.time - 1 });
        } else {
          clearInterval(interval);
        }
      } else {
        onSpeechInvitationPress(timer.id);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const onSpeechInvitationPress = (id: string) => {
    return props.onSpeechInvitationPress(id);
  };

  const onEndDrag = (data: Speech[]): void => {
    return props.onEndDrag(data);
  };

  const checkSpeak = () => {
    alert('đại biểu đang phát biểu không thể di chuyển');
  };

  const renderItem = ({ item, index, drag, isActive }) => {
    return (
      <View>
        <Tr key={index} minHeight={228} style={themedStyle.viewTr}>
          <TouchableOpacity
            style={[
              themedStyle.viewContentItem,
              isActive && themedStyle.viewActive,
            ]}
            onLongPress={item.status === SpeechStatusEnum.Speaking ? checkSpeak : drag}
            activeOpacity={0.75}>
            <Td alignItems='center' width={110}>
              <Text style={themedStyle.txtContent}>
                {index + 1}
              </Text>
            </Td>
            <Td alignItems='center' width={462}>
              <Text style={themedStyle.txtContent}>
                {item.full_name}
              </Text>
            </Td>
            <Td width={906}>
              <Text style={themedStyle.txtContent}>
                {item.content}
              </Text>
            </Td>
          </TouchableOpacity>
          <SpeechManagementStatusItemTablet
            onSpeechInvitationPress={onSpeechInvitationPress}
            enum={item.status}
            index={index}
            id={item.id}
            time={timer.time}
          />
        </Tr>
      </View>
    );
  };

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewCard}>
        <Thead>
          <Th alignItems='center' width={110}>
            {'STT'}
          </Th>
          <Th alignItems='center' width={462}>
            {'Đại biểu'}
          </Th>
          <Th alignItems='center' width={906} >
            {'Chủ đề'}
          </Th>
          <Th />
        </Thead>
        <DraggableFlatList
          data={props.speechs}
          renderItem={renderItem}
          keyExtractor={(item, index) => `draggable-item-${index}`}
          onDragEnd={({ data }) => onEndDrag(data)}
        />
      </View>
    </View>
  );
};

export const SpeechManagementTablet = withStyles(SpeechManagementTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: pxToPercentage(31),
    paddingBottom: pxToPercentage(31),
    backgroundColor: theme['color-primary-2'],
  },
  viewCard: {
    flex: 1,
    borderRadius: pxToPercentage(40),
    padding: pxToPercentage(20),
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
  },
  viewTable: {
    flex: 1,
  },
  txtContent: {
    fontSize: pxToPercentage(36),
    ...textStyle.proDisplayRegular,
  },
  viewTr: {
    borderBottomWidth: pxToPercentage(2),
    borderTopWidth: pxToPercentage(2),
  },
  viewContentItem: {
    flexDirection: 'row',
  },
  viewActive: {
    backgroundColor: theme['color-primary-12'],
  },
}));
