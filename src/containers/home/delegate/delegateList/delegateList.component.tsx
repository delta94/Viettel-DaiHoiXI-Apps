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
import { Select, SelectOption } from '@kitten/ui';
import { DelegateList as DelegateListModel } from '@src/core/models/delegate/delegateList.model';
import { pxToPercentage, searchASCII } from '@src/core/utils/utils';
import {
  textStyle,
  ValidationInput,
} from '@src/components';
import { DelegateListItem } from './delegateListItem';
import { StringValidator } from '@src/core/validators';
import { Delegate } from '@src/core/models/delegate/delegate.model';

interface ComponentProps {
  delegateList: DelegateListModel[];
  onDelegateItemPress: (deputy: Delegate) => void;
  dataGroup: any[];
}

export type DelegateListProps = ThemedComponentProps & ComponentProps;

const DelegateListComponent: React.FunctionComponent<DelegateListProps> = (props) => {
  const { themedStyle } = props;
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [delegateList, setDelegateList] = React.useState<DelegateListModel[]>(props.delegateList);
  const [changeText, setChangeText] = useState(' ');

  const onDelegateItemPress = (deputy: Delegate): void => {
    props.onDelegateItemPress(deputy);
  };

  const isAll = (group: string) => {
    if (group === 'Tất cả' || group === '') {
      return false;
    }
    return true;
  };

  const onSearchPress = (fullName: string = '', group: string = ''): void => {
    const filter = props.delegateList
      .filter(item => isAll(group) ? item.group === group : true)
      .map(deputie => {
        const n = Object.assign({}, deputie, {
          'deputies': deputie.deputies.filter(
            subElement => fullName ? searchASCII(fullName, subElement.fullName) : true,
          ),
        });
        return n;
      });
    setDelegateList(filter);
  };

  const onChangeText = (value: string) => {
    if (selectedOption && value) {
      onSearchPress(value, selectedOption.text);
    } else {
      onSearchPress(value);
    }
    setChangeText(value);
  };

  const onSelect = (option: SelectOption) => {
    if (option && changeText) {
      onSearchPress(changeText, option.text);
    } else {
      onSearchPress(undefined, option.text);
    }
    setSelectedOption(option);
  };

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewSearch}>
        <ValidationInput
          style={themedStyle.inputSearch}
          placeholder='Nhập họ tên đại biểu'
          validator={StringValidator}
          onChangeText={(value) => onChangeText(value)}
        />
        <Select
          data={[
            { text: 'Tất cả' },
            ...props.dataGroup,
          ]}
          textStyle={themedStyle.txtSelectOption}
          keyExtractor={(item) => item.text}
          selectedOption={selectedOption}
          placeholder='Chọn đoàn đại biểu'
          placeholderStyle={themedStyle.selectOptionPhd}
          size={'large'}
          controlStyle={themedStyle.selectOption}
          onSelect={onSelect}>
        </Select>
      </View>
      <FlatList
        data={delegateList}
        extraData={delegateList}
        contentContainerStyle={themedStyle.flatListContainer}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            (item.group &&
              <DelegateListItem
                delegateList={item}
                onDelegateItemPress={onDelegateItemPress}
                index={index + 1}
              />)
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
