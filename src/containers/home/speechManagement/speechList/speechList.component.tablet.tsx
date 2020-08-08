import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Speech } from '@src/core/models/speech/speech.model';
import { pxToPercentage } from '@src/core/utils/utils';
import { Table } from '@src/components/table/table.component';
import { Thead } from '@src/components/table/thead.component';
import { Th } from '@src/components/table/th.component';
import { Tbody } from '@src/components/table/tbody.component';
import { Tr } from '@src/components/table/tr.component';
import { Td } from '@src/components/table/td.component';
import { textStyle } from '@src/components';
import { SpeechListStatusItemTablet } from './speechListStatusItem.component.tablet';
import { viewStyle } from '@src/components/viewStyle';

interface ComponentProps {
  speechs: Speech[];
  onSpeechInvitationPress: (index: number) => void;
}

export type SpeechListTabletProps = ThemedComponentProps & ComponentProps;

const SpeechListTabletComponent: React.FunctionComponent<SpeechListTabletProps> = (props) => {
  const { themedStyle } = props;

  const renderMeetings = (): React.ReactElement[] => {
    return props.speechs.map((item, index) => {
      return (
        <Tr key={index} minHeight={228}>
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
          <SpeechListStatusItemTablet
            onSpeechInvitationPress={props.onSpeechInvitationPress}
            enum={item.status}
            index={index}
          />
        </Tr>
      );
    });
  };

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewCard}>
        <Table style={themedStyle.viewTable}>
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
          <Tbody>
            {renderMeetings()}
          </Tbody>
        </Table>
      </View>
    </View>
  );
};

export const SpeechListTablet = withStyles(SpeechListTabletComponent, (theme: ThemeType) => ({
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
}));
