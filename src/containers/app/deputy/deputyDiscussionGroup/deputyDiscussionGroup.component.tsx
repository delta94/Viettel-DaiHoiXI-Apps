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
import { Select, SelectOptionType } from '@kitten/ui';
import { pxToPercentage, isEmpty, searchASCII } from '@src/core/utils/utils';
import {
  textStyle,
  ValidationInput,
} from '@src/components';
import { DeputyDiscussionGroupItem } from './deputyDiscussionGroupItem.component';
import { StringValidator } from '@src/core/validators';
import { Deputy as DeputyModel } from '@src/core/models/deputy/deputy.model';
import { DeputyDiscussionGroup as DeputyDiscussionGroupModel } from '@src/core/models/deputy/deputyDiscussionGroup.model';
import { DiscussionGroup } from '@src/core/models/deputy/discussionGroup.model';

interface ComponentProps {
  deputyDiscussionGroups: DeputyDiscussionGroupModel;
  onDeputyPress: (delegate: DeputyModel) => void;
  discussionGroups: DiscussionGroup[];
  onSelectGroupChange: (groupName: SelectOptionType) => void;
  discussionGroupSelected: SelectOptionType;
}

export type DeputyDiscussionGroupProps = ThemedComponentProps & ComponentProps;

const DeputyDiscussionGroupComponent: React.FunctionComponent<DeputyDiscussionGroupProps> = (props) => {
  const { themedStyle } = props;
  const [keyword, setKeyword] = useState('');

  const onDeputyPress = (deputy: DeputyModel): void => {
    props.onDeputyPress(deputy);
  };

  const onFilterDeputiesByCondition = (): DeputyModel[] => {
    return props.deputyDiscussionGroups.discussionGroupDeputies.filter(deputy => {
      return searchASCII(keyword, deputy.fullName);
    });
  };

  const onGetDiscussionGroupsFromData = () => {
    const discussionGroupsTemp = [];

    props.discussionGroups.forEach((item) => {
      if (!isEmpty(item.name)) {
        discussionGroupsTemp.push(item.name);
      }
    });

    return [... new Set(discussionGroupsTemp)].map(item => ({ text: item }));
  };

  const onGroupSelect = (option: SelectOptionType) => {
    props.onSelectGroupChange(option);
  };

  const onChangeText = (value: string) => {
    setKeyword(value || '');
  };

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewSearch}>
        <Select
          data={onGetDiscussionGroupsFromData()}
          placeholder='Chọn Tổ'
          textStyle={themedStyle.txtSelectInput}
          selectedOption={props.discussionGroupSelected}
          keyExtractor={(item) => item.text}
          placeholderStyle={themedStyle.selectOptionPhd}
          size={'large'}
          controlStyle={themedStyle.selectOption}
          onSelect={onGroupSelect}>
        </Select>
        <ValidationInput
          style={themedStyle.inputSearch}
          placeholder='Nhập họ tên đại biểu'
          validator={StringValidator}
          onChangeText={onChangeText}
        />
      </View>
      <FlatList
        data={onFilterDeputiesByCondition()}
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
