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
import { DelegateList as DelegateListModel } from '@src/core/models/delegate/delegateList.model';
import { User as UserModel } from '@src/core/models/user/user.model';
import { pxToPercentage } from '@src/core/utils/utils';
import {
  textStyle,
  ValidationInput,
} from '@src/components';
import { DelegateListItem } from './delegateListItem';
import { StringValidator } from '@src/core/validators';

interface ComponentProps {
  delegateList: DelegateListModel[];
  onDelegateItemPress: (delegate: UserModel) => void;
}

export type DelegateListProps = ThemedComponentProps & ComponentProps;

const DelegateListComponent: React.FunctionComponent<DelegateListProps> = (props) => {
  const { themedStyle } = props;
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const onDelegateItemPress = (delegate: UserModel): void => {
    props.onDelegateItemPress(delegate);
  };

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewSearch}>
        <ValidationInput
          style={themedStyle.inputSearch}
          placeholder='Nhập họ tên đại biểu'
          validator={StringValidator}
          onChangeText={() => { }}
        />
        <Select
          data={[
            { text: 'Tất cả' },
            { text: 'Đảng Bộ Khối Dân Chủ Đảng' },
            { text: 'Đảng Bộ Quận 1' },
          ]}
          textStyle={themedStyle.txtSelectOption}
          keyExtractor={(item) => item.text}
          selectedOption={selectedOption}
          placeholder='Chọn đoàn đại biểu'
          placeholderStyle={themedStyle.selectOptionPhd}
          size={'large'}
          controlStyle={themedStyle.selectOption}
          onSelect={setSelectedOption}>
        </Select>
      </View>
      <FlatList
        data={props.delegateList}
        extraData={props.delegateList}
        contentContainerStyle={themedStyle.flatListContainer}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <DelegateListItem
              delegateList={item}
              onDelegateItemPress={onDelegateItemPress}
            />
          );
        }}
      />
    </View>
  );
};

export const DelegateList = withStyles(DelegateListComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-custom-100'],
  },
  viewSearch: {
    padding: pxToPercentage(8),
  },
  inputSearch: {
    fontSize: pxToPercentage(15),
    borderRadius: pxToPercentage(5),
  },
  selectOption: {
    marginTop: pxToPercentage(7.5),
    height: pxToPercentage(48),
    borderRadius: pxToPercentage(5),
    borderColor: theme['color-primary-18'],
  },
  selectOptionPhd: {
    color: theme['color-primary-18'],
  },
  flatListContainer: {
    paddingBottom: pxToPercentage(20),
  },
  txtSelectOption: {
    padding: 0,
    fontSize: pxToPercentage(15),
    ...textStyle.proDisplayRegular,
  },
}));
