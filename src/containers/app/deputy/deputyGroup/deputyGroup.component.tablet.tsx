import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  pxToPercentage,
  searchASCII,
  isEmpty,
} from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { Table } from '@src/components/table/table.component';
import { Thead } from '@src/components/table/thead.component';
import { Th } from '@src/components/table/th.component';
import { Tr } from '@src/components/table/tr.component';
import { Td } from '@src/components/table/td.component';
import { textStyle } from '@src/components';
import { SearchIcon } from '@src/assets/icons';
import { Button } from '@src/components/button/button.component';
import {
  Select,
  SelectOptionType,
} from '@kitten/ui';
import { RemoteImage } from '@src/assets/images';
import { SERVER_ADDRESS } from '../../../../../config';
import { DeputyGroup as DeputyGroupModel } from '@src/core/models/deputy/deputyGroup.model';
import { Deputy as DeputyModel } from '@src/core/models/deputy/deputy.model';

interface ComponentProps {
  deputyGroups: DeputyGroupModel[];
  onDeputyItemPress: (deputy: DeputyModel) => void;
}

export type DeputyGroupTabletProps = ThemedComponentProps & ComponentProps;

const DeputyGroupTabletComponent: React.FunctionComponent<DeputyGroupTabletProps> = (props) => {
  const { themedStyle } = props;
  const [keyword, setKeyword] = useState('');
  const [groupSelected, setGroupSelected] = useState<SelectOptionType>({ text: '' });
  const [discussionGroupSelected, setDiscussionGroupSelected] = useState<SelectOptionType>({ text: '' });
  const [deputies, setDeputies] = useState<DeputyModel[]>([]);
  const [isLoadding, setLoadding] = useState<boolean>(false);

  React.useEffect(() => {
    onSearchPress(false);
  }, [props.deputyGroups]);

  const onSearchPress = (isMoreLoad: boolean): void => {
    let deputyGroupsTemp: DeputyModel[] = [];

    props.deputyGroups.forEach(item => {
      if (`${item.group}`.includes(groupSelected.text === 'Tất cả' ? '' : groupSelected.text)) {
        deputyGroupsTemp = [...deputyGroupsTemp, ...[...item.deputies.filter(deputy => {
          return searchASCII(keyword, deputy.fullName) &&
            `${deputy.discussionGroup}`.includes(discussionGroupSelected.text === 'Tất cả' ? '' : discussionGroupSelected.text);
        })],
        ];
      }
    });

    const deputyList: DeputyModel[] = JSON.parse(JSON.stringify(deputyGroupsTemp));

    if (isMoreLoad) {
      if (deputyList.length === deputies.length) {
        setLoadding(false);
        return;
      }
      if (deputyList.length > deputies.length + 10) {
        setDeputies([...deputies, ...deputyList.slice(deputies.length, deputies.length + 10)]);
        setLoadding(true);
      } else {
        setDeputies([...deputies, ...deputyList.slice(deputies.length, deputyList.length)]);
        setLoadding(false);
      }
      return;
    } else {
      if (deputyList.length > 10) {
        setDeputies(deputyList.slice(0, 10));
        setLoadding(true);

      } else {
        setDeputies(deputyList.slice(0, deputyList.length));
        setLoadding(false);
      }
      return;
    }
  };

  const onDeputyItemPress = (deputy: DeputyModel): void => {
    props.onDeputyItemPress(deputy);
  };

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

  const onGroupSelect = (option: SelectOptionType) => {
    setGroupSelected(option);
  };

  const onTeamSelect = (option: SelectOptionType) => {
    setDiscussionGroupSelected(option);
  };

  const ListFooter = () => {
    if (isLoadding) {
      return (
        <View style={themedStyle.viewListFooter}>
          <ActivityIndicator size='large' />
        </View>
      );
    }
    return (
      <View />
    );
  };

  const hadelLoadMore = () => {
    onSearchPress(true);
  };

  const renderDeputies = ({ item, index }) => (
    <Tr>
      <Td alignItems='center' width={150}>
        <Text style={themedStyle.txtTd}>
          {item.code}
        </Text>
      </Td>
      <Td alignItems='center' width={260}>
        <Image
          source={(new RemoteImage(`${SERVER_ADDRESS}${item.avatar}`).imageSource)}
          style={themedStyle.imgAvatar}
        />
      </Td>
      <Td width={570}>
        <Text style={themedStyle.txtFullname}>
          {item.fullName.toUpperCase()}
        </Text>
      </Td>
      <Td>
        <Text style={themedStyle.txtTd}>
          {item.position}
        </Text>
      </Td>
      <Td alignItems='center' width={230}>
        <Text style={themedStyle.txtTd}>
          {item.discussionGroup || 'Không'}
        </Text>
      </Td>
      <Td alignItems='center' width={200}>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => onDeputyItemPress(item)}>
          {SearchIcon(themedStyle.iconSearch)}
        </TouchableOpacity>
      </Td>
    </Tr>
  );

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewCard}>
        <View style={themedStyle.viewBtns}>
          <TextInput
            placeholder='Nhập họ tên đại biểu'
            onChangeText={setKeyword}
            style={themedStyle.textInput}
          />
          <Select
            data={[
              { text: 'Tất cả' },
              ...onGetGroupsFromData(),
            ]}
            textStyle={themedStyle.txtSelectInput}
            keyExtractor={(item) => item.text}
            selectedOption={groupSelected}
            controlStyle={themedStyle.selectInput}
            placeholder='Chọn đoàn đại biểu'
            onSelect={onGroupSelect}>
          </Select>
          <Select
            data={[
              { text: 'Tất cả' },
              ...onGetDiscussionGroupsFromData(),
            ]}
            textStyle={themedStyle.txtSelectInput}
            keyExtractor={(item) => item.text}
            selectedOption={discussionGroupSelected}
            controlStyle={themedStyle.selectInputTeam}
            placeholder='Chọn tổ'
            onSelect={onTeamSelect}>
          </Select>
          <Button
            title='TÌM KIẾM'
            onPress={() => onSearchPress(false)}
            style={themedStyle.btnSearch}
          />
        </View>
        <Table style={themedStyle.viewTable}>
          <Thead>
            <Th alignItems='center' width={150}>
              {'SĐB'}
            </Th>
            <Th alignItems='center' width={260}>
              {'Hình ảnh'}
            </Th>
            <Th alignItems='center' width={570}>
              {'Họ tên'}
            </Th>
            <Th alignItems='center'>
              {'Chức vụ'}
            </Th>
            <Th alignItems='center' width={230}>
              {'Tổ'}
            </Th>
            <Th alignItems='center' width={200}>
              {'Xem'}
            </Th>
          </Thead>
          <FlatList
            data={deputies}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderDeputies}
            style={themedStyle.viewFlatList}
            onEndReached={hadelLoadMore}
            onEndReachedThreshold={1}
            ListFooterComponent={ListFooter}
          />
        </Table>
      </View>
    </View>
  );
};

export const DeputyGroupTablet = withStyles(DeputyGroupTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: pxToPercentage(31),
    paddingBottom: pxToPercentage(31),
    backgroundColor: theme['color-primary-2'],
  },
  viewCard: {
    flex: 1,
    borderRadius: pxToPercentage(40),
    padding: pxToPercentage(20),
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
  },
  viewBtns: {
    flexDirection: 'row',
    alignItems: 'center',
    height: pxToPercentage(120),
  },
  viewTable: {
    flex: 1,
    marginTop: pxToPercentage(28),
  },
  txtTd: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
  txtFullname: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayBold,
  },
  imgAvatar: {
    width: pxToPercentage(120),
    height: pxToPercentage(160),
    borderRadius: pxToPercentage(12),
  },
  textInput: {
    fontSize: pxToPercentage(34),
    height: pxToPercentage(80),
    width: pxToPercentage(584),
    marginRight: pxToPercentage(20),
    paddingHorizontal: pxToPercentage(24),
    borderRadius: pxToPercentage(28),
    borderWidth: pxToPercentage(2),
    borderColor: theme['color-primary-18'],
    ...textStyle.proDisplayRegular,
    paddingVertical: 0,
  },
  selectInput: {
    width: pxToPercentage(584),
    marginRight: pxToPercentage(20),
    borderColor: theme['color-primary-18'],
    borderRadius: pxToPercentage(28),
  },
  selectInputTeam: {
    width: pxToPercentage(376),
    marginRight: pxToPercentage(20),
    borderColor: theme['color-primary-18'],
    borderRadius: pxToPercentage(28),
  },
  txtSelectInput: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
  btnSearch: {
    flex: 1,
    height: pxToPercentage(80),
  },
  iconSearch: {
    width: pxToPercentage(54),
    height: pxToPercentage(54),
  },
  viewListFooter: {
    flexDirection: 'row',
    height: pxToPercentage(80),
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewFlatList: {
    width: '100%',
  },
}));
