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
import {
  Select,
  SelectOptionType,
} from '@kitten/ui';
import { DelegateList as DelegateListModel } from '@src/core/models/delegate/delegateList.model';
import {
  pxToPercentage,
  searchASCII,
} from '@src/core/utils/utils';
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
}

export type DelegateListProps = ThemedComponentProps & ComponentProps;

const DelegateListComponent: React.FunctionComponent<DelegateListProps> = (props) => {
  const { themedStyle } = props;
  const [groupSelected, setGroupSelected] = useState<SelectOptionType>({ text: '' });
  const [discussionGroupSelected, setDiscussionGroupSelected] = useState<SelectOptionType>({ text: '' });
  const [keyword, setKeyword] = useState('');

  const onGetGroupsFromData = () => {
    return props.delegateList.map(item => ({ text: item.group }));
  };

  const onGetDiscussionGroupsFromData = () => {
    const discussionGroupsTemp = [];

    props.delegateList.forEach(item => {
      item.deputies.forEach(deputie => {
        discussionGroupsTemp.push(deputie.discussionGroup);
      });
    });

    return [... new Set(discussionGroupsTemp)].map(item => ({ text: item }));
  };

  const onFilterDelegateListByCondition = (): DelegateListModel[] => {
    let delegateListTemp: DelegateListModel[] = [];

    props.delegateList.forEach(item => {
      if (item.group.includes(groupSelected.text === 'Tất cả' ? '' : groupSelected.text)) {
        delegateListTemp = [...delegateListTemp, {
          ...item,
          deputies: [...item.deputies.filter(deputie => {
            return searchASCII(keyword, deputie.fullName) &&
              deputie.discussionGroup.includes(discussionGroupSelected.text === 'Tất cả' ? '' : discussionGroupSelected.text);
          })],
        }];
      }
    });

    return delegateListTemp;
  };

  const onDelegateItemPress = (deputy: Delegate): void => {
    props.onDelegateItemPress(deputy);
  };

  const onChangeText = (value: string) => {
    setKeyword(value || '');
  };

  const onGroupSelect = (option: SelectOptionType) => {
    setGroupSelected(option);
  };

  const onDiscussionGroupSelect = (option: SelectOptionType) => {
    setDiscussionGroupSelected(option);
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
            ...onGetGroupsFromData(),
          ]}
          textStyle={themedStyle.txtSelectOption}
          keyExtractor={(item) => item.text}
          selectedOption={groupSelected}
          placeholder='Chọn đoàn đại biểu'
          placeholderStyle={themedStyle.selectOptionPhd}
          size={'large'}
          controlStyle={themedStyle.selectOption}
          onSelect={onGroupSelect}>
        </Select>
        <Select
          data={[
            { text: 'Tất cả' },
            ...onGetDiscussionGroupsFromData(),
          ]}
          textStyle={themedStyle.txtSelectOption}
          keyExtractor={(item) => item.text}
          selectedOption={discussionGroupSelected}
          placeholder='Chọn tổ'
          placeholderStyle={themedStyle.selectOptionPhd}
          size={'large'}
          controlStyle={themedStyle.selectOption}
          onSelect={onDiscussionGroupSelect}>
        </Select>
      </View>
      <FlatList
        data={[...onFilterDelegateListByCondition().filter(item => item.deputies.length !== 0)]}
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
