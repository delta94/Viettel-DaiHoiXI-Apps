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
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import { CheckIcon } from '@src/assets/icons';

interface ComponentProps {
  topic: any;
  onCheckboxPress: (id: number) => void;
  isCreateScreen: boolean;
  index: number;
}
export type CheckboxTabletProps = ThemedComponentProps & ComponentProps;

const CheckBoxComponent: React.FunctionComponent<CheckboxTabletProps> = (props) => {
  const { themedStyle } = props;

  const onCheckboxPress = (id: number) => {
    return props.onCheckboxPress(id);
  };

  return (
    <TouchableOpacity
      disabled={!props.isCreateScreen}
      activeOpacity={0.75}
      onPress={() => { onCheckboxPress(props.index); }}
      style={[
        themedStyle.viewCheckbox, props.topic.status
        && themedStyle.viewOncheck,
      ]}>
      <View style={[
        themedStyle.checkbox,
        props.topic.status && themedStyle.checkedbox,
      ]}>
        {props.topic.status && (
          CheckIcon(themedStyle.icon)
        )}
      </View>
      <Text style={themedStyle.txtCheckBox}>
        {props.topic.text}
      </Text>
    </TouchableOpacity>
  );
};

export const CheckboxItemTablet = withStyles(CheckBoxComponent, (theme: ThemeType) => ({
  checkbox: {
    height: pxToPercentage(54),
    width: pxToPercentage(54),
    borderColor: theme['color-primary-2'],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: pxToPercentage(8),
    borderWidth: pxToPercentage(1),
  },
  viewCheckbox: {
    marginVertical: pxToPercentage(5),
    paddingHorizontal: pxToPercentage(24),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme['color-primary-50'],
    height: pxToPercentage(86),
  },
  viewOncheck: {
    backgroundColor: theme['color-primary-19'],
  },
  checkedbox: {
    backgroundColor: theme['color-primary-2'],
  },
  txtCheckBox: {
    fontSize: pxToPercentage(36),
    ...textStyle.proDisplayRegular,
    marginLeft: pxToPercentage(20),
  },
  icon: {
    height: pxToPercentage(26),
    width: pxToPercentage(36),
  },
}));
