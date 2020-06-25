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
import { PressReleaseItem } from './pressReleaseItem.component';
import {
  List,
  Datepicker,
} from '@kitten/ui';
import { PressRelease as PressReleaseModel } from '@src/core/models/pressRelease/pressRelease.model';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import { isTablet } from 'react-native-device-info';

interface ComponentProps {
  pressReleases: PressReleaseModel[];
  onPressReleaseItemPress: (pressRelease: PressReleaseModel) => void;
}

export type PressReleaseProps = ThemedComponentProps & ComponentProps;

const PressReleaseComponent: React.FunctionComponent<PressReleaseProps> = (props) => {
  const [date, setDate] = React.useState(new Date());

  const onPressReleaseItemPress = (pressRelease: PressReleaseModel): void => {
    props.onPressReleaseItemPress(pressRelease);
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
      <List
        data={props.pressReleases}
        style={themedStyle.container}
        extraData={props.pressReleases}
        contentContainerStyle={themedStyle.contentContainer}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <PressReleaseItem
              pressRelease={item}
              onPress={() => onPressReleaseItemPress(item)}
            />
          );
        }}
      />
    </View>
  );
};

export const PressRelease = withStyles(PressReleaseComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-custom-100'],
  },
  viewDatepicker: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: pxToPercentage(16),
    marginHorizontal: pxToPercentage(16),
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
  contentContainer: {
  },
}));
