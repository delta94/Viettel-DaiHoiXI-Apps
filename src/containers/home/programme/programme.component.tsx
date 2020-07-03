import React from 'react';
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
import { ProgrameItem } from './programmeItem.component';
import {
  List,
  Datepicker,
  Modal,
} from '@kitten/ui';
import { ProgrammeModelDetail } from './programmeDetailModal.component';
import { Programmation as ProgrammationModel } from '@src/core/models/programmation/programe.model';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import { isTablet } from 'react-native-device-info';
import { ScrollView } from 'react-native-gesture-handler';

interface ComponentProps {
  programmations: ProgrammationModel[];
}

export type ProgrammeProps = ThemedComponentProps & ComponentProps;

const ProgrammeComponent: React.FunctionComponent<ProgrammeProps> = (props) => {
  const [date, setDate] = React.useState<Date>(new Date());
  const [programation, setpProgramation] = React.useState(new ProgrammationModel);
  const [visible, setVisible] = React.useState(false);

  const onFunctionItemPress = (item): void => {
    setpProgramation(item);
    setVisible(true);
  };

  const onHideModal = (): void => {
    setVisible(false);
  };

  const { themedStyle } = props;

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewDatepicker}>
        <Text style={themedStyle.txtChooseDate}>
          {'Chọn ngày:'}
        </Text>
        <Datepicker
          date={date}
          style={themedStyle.datepicker}
          onSelect={nextDate => setDate(nextDate)}
        />
      </View>

      <ScrollView style={[themedStyle.container]}>
        <View style={[themedStyle.sessionView]}>
          <Text style={[themedStyle.txtSession]}>
            {'SÁNG'}
          </Text>
        </View>
        <List
          scrollEnabled={false}
          data={props.programmations}
          extraData={props.programmations}
          contentContainerStyle={themedStyle.contentContainer}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                activeOpacity={0.75}
                onPress={() => onFunctionItemPress(item)}>
                <ProgrameItem
                  programmation={item}
                />
              </TouchableOpacity>
            );
          }}
        />
        <View style={[themedStyle.sessionView]}>
          <Text style={[themedStyle.txtSession]}>
            {'CHIỀU'}
          </Text>
        </View>
        <List
          style={[themedStyle.container]}
          scrollEnabled={false}
          data={props.programmations}
          extraData={props.programmations}
          contentContainerStyle={themedStyle.contentContainer}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                activeOpacity={0.75}
                onPress={() => onFunctionItemPress(item)}>
                <ProgrameItem
                  programmation={item}
                />
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
      <Modal
        visible={visible}
        backdropStyle={themedStyle.backdrop}
        onBackdropPress={onHideModal}>
        <ProgrammeModelDetail programmation={programation} />
      </Modal>
    </View>
  );
};

export const Programmation = withStyles(ProgrammeComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-custom-100'],
    paddingBottom: pxToPercentage(6),
  },
  viewDatepicker: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: pxToPercentage(16),
    marginHorizontal: pxToPercentage(16),
    borderRadius: pxToPercentage(1),
  },
  datepicker: {
    flex: 1,
  },
  txtChooseDate: {
    fontSize: isTablet() ? pxToPercentage(9) : pxToPercentage(14),
    color: theme['text-basic-color'],
    marginRight: pxToPercentage(15),
    marginBottom: pxToPercentage(5),
    ...textStyle.semibold,
  },
  txtTitle: {
    fontSize: isTablet() ? pxToPercentage(9) : pxToPercentage(14),
    color: theme['text-basic-color'],
    textAlign: 'justify',
    ...textStyle.regular,
  },
  viewCard: {
    width: pxToPercentage(300),
    height: pxToPercentage(450),
    paddingBottom: pxToPercentage(36),
  },
  txtSession: {
    textAlign: 'center',
    color: 'red',
    fontSize: isTablet() ? pxToPercentage(9) : pxToPercentage(14),
    ...textStyle.regular,
  },
  sessionView: {
    paddingTop: pxToPercentage(16),
    marginLeft : pxToPercentage(16),
  },
}));
