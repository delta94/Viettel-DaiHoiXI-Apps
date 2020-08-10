import React, { useState } from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Select } from '@kitten/ui';
import { pxToPercentage } from '@src/core/utils/utils';
import {
  textStyle,
  ValidationInput,
} from '@src/components';
import { DeputyDiscussionGroupItem } from './deputyDiscussionGroupItem.component';
import { StringValidator } from '@src/core/validators';
import { Deputy as DeputyModel } from '@src/core/models/deputy/deputy.model';
import { DeputyDiscussionGroup as DeputyDiscussionGroupModel } from '@src/core/models/deputy/deputyDiscussionGroup.model';

interface ComponentProps {
  deputyDiscussionGroups: DeputyDiscussionGroupModel[];
  onDeputyPress: (delegate: DeputyModel) => void;
}

export type DeputyDiscussionGroupProps = ThemedComponentProps & ComponentProps;

const DeputyDiscussionGroupComponent: React.FunctionComponent<DeputyDiscussionGroupProps> = (props) => {
  const { themedStyle } = props;
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const onDeputyPress = (deputy: DeputyModel): void => {
    props.onDeputyPress(deputy);
  };

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewSearch}>
        <Select
          data={[
            { text: 'Tất cả' },
            { text: 'Tổ 1' },
            { text: 'Tổ 2' },
          ]}
          textStyle={themedStyle.txtSelectInput}
          selectedOption={selectedOption}
          keyExtractor={(item) => item.text}
          placeholder='Chọn tổ'
          placeholderStyle={themedStyle.selectOptionPhd}
          size={'large'}
          controlStyle={themedStyle.selectOption}
          onSelect={setSelectedOption}>
        </Select>
        <ValidationInput
          style={themedStyle.inputSearch}
          placeholder='Nhập họ tên đại biểu'
          validator={StringValidator}
          onChangeText={() => { }}
        />
      </View>
      <FlatList
        data={props.deputyDiscussionGroups}
        extraData={props.deputyDiscussionGroups}
        contentContainerStyle={themedStyle.flatListContainer}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <DeputyDiscussionGroupItem
              delegate={item}
              onPress={() => onDeputyPress(item)}
            />
          );
        }}
      />
    </View>
  );
};

export const DeputyDiscussionGroup = withStyles(DeputyDiscussionGroupComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-custom-100'],
  },
  viewSearch: {
    padding: pxToPercentage(8),
  },
  inputSearch: {
    fontSize: pxToPercentage(15),
    marginTop: pxToPercentage(7.5),
    borderRadius: pxToPercentage(5),
  },
  selectOption: {
    height: pxToPercentage(48),
    borderRadius: pxToPercentage(5),
    borderColor: theme['color-primary-18'],
  },
  selectOptionPhd: {
    color: theme['color-primary-18'],
  },
  flatListContainer: {
    paddingVertical: pxToPercentage(4),
    paddingHorizontal: pxToPercentage(8),
    paddingBottom: pxToPercentage(20),
  },
  txtSelectOption: {
    padding: 0,
    fontSize: pxToPercentage(15),
    ...textStyle.proDisplayRegular,
  },
  txtSelectInput: {
    fontSize: pxToPercentage(14),
    padding: 0,
    ...textStyle.proTextRegular,
  },
  textInput: {
    marginTop: pxToPercentage(4),
  },
}));
