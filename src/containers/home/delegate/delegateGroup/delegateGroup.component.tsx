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
import { DelegateGroup as DelegateGroupModel } from '@src/core/models/delegate/delegateGroup.model';
import { User as UserModel } from '@src/core/models/user/user.model';
import { pxToPercentage } from '@src/core/utils/utils';
import {
  textStyle,
  ValidationInput,
} from '@src/components';
import { DelegateGroupItem } from './delegateGroupItem';
import { StringValidator } from '@src/core/validators';

interface ComponentProps {
  delegateGroup: DelegateGroupModel;
  onDelegateItemPress: (delegate: UserModel) => void;
}

export type DelegateGroupProps = ThemedComponentProps & ComponentProps;

const DelegateGroupComponent: React.FunctionComponent<DelegateGroupProps> = (props) => {
  const { themedStyle } = props;
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const onDelegateItemPress = (congressman: UserModel): void => {
    props.onDelegateItemPress(congressman);
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
        data={props.delegateGroup.delegates}
        extraData={props.delegateGroup}
        contentContainerStyle={themedStyle.flatListContainer}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <DelegateGroupItem
              delegate={item}
              onPress={() => onDelegateItemPress(item)}
            />
          );
        }}
      />
    </View>
  );
};

export const DelegateGroup = withStyles(DelegateGroupComponent, (theme: ThemeType) => ({
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
