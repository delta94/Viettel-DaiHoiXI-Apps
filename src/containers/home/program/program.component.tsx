import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { ProgramContentItem } from './programContentItem.component';
import {
  Datepicker,
  Modal,
} from '@kitten/ui';
import { ProgramDetailModal } from './programDetailModal.component';
import {
  Program as ProgramModel,
  ProgramContent,
} from '@src/core/models/program/program.model';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';

interface ComponentProps {
  programs: ProgramModel[];
}

export type ProgramProps = ThemedComponentProps & ComponentProps;

const ProgramComponent: React.FunctionComponent<ProgramProps> = (props) => {
  const [date, setDate] = React.useState<Date>(new Date());
  const [programContentSelected, setProgramContentSelected] = React.useState<ProgramContent>(new ProgramContent);
  const [visible, setVisible] = React.useState<boolean>(false);

  const onProgramContentItemPress = (item: ProgramContent): void => {
    setProgramContentSelected(item);
    setVisible(true);
  };

  const onHideModal = (): void => {
    setVisible(false);
  };

  const { themedStyle } = props;

  const renderContents = (contents: ProgramContent[]): React.ReactElement[] => {
    return contents.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          activeOpacity={0.75}
          onPress={() => onProgramContentItemPress(item)}>
          <ProgramContentItem content={item} />
        </TouchableOpacity>
      );
    });
  };

  const renderPrograms = (): React.ReactElement[] => {
    return props.programs.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <View style={themedStyle.viewSection}>
            <Text style={themedStyle.txtSection}>
              {'SÁNG'}
            </Text>
          </View>
          {renderContents(item.contents)}
        </React.Fragment>
      );
    });
  };

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
      <ScrollView
        style={themedStyle.scrollView}
        contentContainerStyle={themedStyle.scrollViewContainer}>
        {renderPrograms()}
      </ScrollView>
      <Modal
        visible={visible}
        backdropStyle={themedStyle.backdrop}
        onBackdropPress={onHideModal}>
        <ProgramDetailModal content={programContentSelected} />
      </Modal>
    </View>
  );
};

export const Program = withStyles(ProgramComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-custom-100'],
  },
  scrollView: {
    paddingHorizontal: pxToPercentage(16),
  },
  scrollViewContainer: {
    paddingBottom: pxToPercentage(16),
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
    fontSize: pxToPercentage(14),
    color: theme['text-basic-color'],
    marginRight: pxToPercentage(15),
    marginBottom: pxToPercentage(5),
    ...textStyle.semibold,
  },
  viewSection: {
    paddingTop: pxToPercentage(16),
    marginLeft: pxToPercentage(66),
  },
  txtSection: {
    textAlign: 'center',
    color: 'red',
    fontSize: pxToPercentage(14),
    ...textStyle.regular,
  },
}));
