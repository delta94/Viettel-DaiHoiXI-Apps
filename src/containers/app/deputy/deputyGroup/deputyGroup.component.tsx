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
import {
  pxToPercentage,
  searchASCII,
  isEmpty,
} from '@src/core/utils/utils';
import {
  textStyle,
  ValidationInput,
} from '@src/components';
import { DeputyGroupItem } from './deputyGroupItem';
import { StringValidator } from '@src/core/validators';
import { DeputyGroup as DeputyGroupModel } from '@src/core/models/deputy/deputyGroup.model';
import { Deputy as DeputyModel } from '@src/core/models/deputy/deputy.model';

interface ComponentProps {
  deputyGroups: DeputyGroupModel[];
  onDeputyItemPress: (deputy: DeputyModel) => void;
}

export type DeputyGroupProps = ThemedComponentProps & ComponentProps;

const DeputyGroupComponent: React.FunctionComponent<DeputyGroupProps> = (props) => {
  const { themedStyle } = props;
  const [groupSelected, setGroupSelected] = useState<SelectOptionType>({ text: '' });
  const [discussionGroupSelected, setDiscussionGroupSelected] = useState<SelectOptionType>({ text: '' });
  const [keyword, setKeyword] = useState('');

  const onGetGroupsFromData = () => {
    const groupsTemp = [];

    props.deputyGroups.forEach(item => {
      if (!isEmpty(item.group)) {
        groupsTemp.push(item.group);
      }
    });

    return groupsTemp.map(item => ({ text: item }));
  };

  const onGetDiscussionGroupsFromData = () => {
    const discussionGroupsTemp = [];

    props.deputyGroups.forEach(item => {
      item.deputies.forEach(deputy => {
        if (!isEmpty(deputy.discussionGroup)) {
          discussionGroupsTemp.push(deputy.discussionGroup);
        }
      });
    });

    return [... new Set(discussionGroupsTemp)].map(item => ({ text: item }));
  };

  const onFilterDeputiesByCondition = (): DeputyGroupModel[] => {
    let delegateListTemp: DeputyGroupModel[] = [];

    props.deputyGroups.forEach(item => {
      if (`${item.group}`.includes(groupSelected.text === 'Tất cả' ? '' : groupSelected.text)) {
        delegateListTemp = [...delegateListTemp, {
          ...item,
          deputies: [...item.deputies.filter(deputy => {
            return searchASCII(keyword, deputy.fullName) &&
              `${deputy.discussionGroup}`.includes(discussionGroupSelected.text === 'Tất cả' ? '' : discussionGroupSelected.text);
          })],
        }];
      }
    });

    return delegateListTemp;
  };

  const onDeputyPress = (deputy: DeputyModel): void => {
    props.onDeputyItemPress(deputy);
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
        data={[...onFilterDeputiesByCondition().filter(item => item.deputies.length !== 0)]}
        extraData={props.deputyGroups}
        contentContainerStyle={themedStyle.flatListContainer}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <DeputyGroupItem
              deputyGroup={item}
              onDeputyPress={onDeputyPress}
            />
          );
        }}
      />
    </View>
  );
};

export const DeputyGroup = withStyles(DeputyGroupComponent, (theme: ThemeType) => ({
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
