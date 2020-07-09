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
import { pxToPercentage } from '@src/core/utils/utils';
import { TabVertical } from '@src/components/tabVertical/tabVertical.component';
import { Program } from './program/program.component';
import { programDataFake } from '@src/core/data/program';
import { DatePicker } from '@src/components/datePicker/datePicker.component';
import { SafeAreaView } from 'react-navigation';

interface ComponentProps {
  tabSelected: number;
  onTabSelected: (value: number) => void;
  dateSelected: number;
  onDateSelected: (value: number) => void;
}

export type CongressInformationProps = ThemedComponentProps & ComponentProps;

const CongressInformationComponent: React.FunctionComponent<CongressInformationProps> = (props) => {
  const { themedStyle } = props;

  const onTabSelected = (value: number) => {
    props.onTabSelected(value);
  };

  const onDateSelected = (value: number) => {
    props.onDateSelected(value);
  };

  return (
    <SafeAreaView style={themedStyle.container}>
      <View style={themedStyle.container}>
        {/*<View style={themedStyle.viewHeader}>
      </View>*/}
        <View style={themedStyle.viewBody}>
          <TabVertical
            selected={props.tabSelected}
            onTabSelected={onTabSelected}
          />
          <View style={themedStyle.viewLeft}>
            <Text style={themedStyle.txtTitle}>
              {'THÔNG TIN ĐẠI HỘI'}
            </Text>
            <View style={themedStyle.viewDate}>
              <DatePicker
                day={8}
                selected={props.dateSelected}
                onDateSelected={onDateSelected}
              />
            </View>
            <View style={themedStyle.viewContent}>
              <Program programs={programDataFake} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export const CongressInformation = withStyles(CongressInformationComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: 'rgba(241, 243, 248, 1)',
  },
  viewHeader: {
    height: pxToPercentage(140),
    borderWidth: pxToPercentage(1),
  },
  viewBody: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(172, 32, 5, 1)',
  },
  viewLeft: {
    flex: 1,
    alignItems: 'center',
    marginVertical: pxToPercentage(12),
    marginHorizontal: pxToPercentage(7),
    backgroundColor: 'white',
    borderRadius: pxToPercentage(8),
  },
  txtTitle: {
    fontSize: pxToPercentage(20),
    paddingVertical: pxToPercentage(5),
  },
  viewDate: {
    height: pxToPercentage(30),
  },
  viewContent: {
    flex: 1,
    width: '100%',
    marginVertical: pxToPercentage(5),
    borderRadius: pxToPercentage(5),
  },
}));
