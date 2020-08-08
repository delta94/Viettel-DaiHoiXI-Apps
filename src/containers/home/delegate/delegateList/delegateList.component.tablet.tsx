import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  pxToPercentage,
  searchASCII,
} from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { Table } from '@src/components/table/table.component';
import { Thead } from '@src/components/table/thead.component';
import { Th } from '@src/components/table/th.component';
import { Tbody } from '@src/components/table/tbody.component';
import { Tr } from '@src/components/table/tr.component';
import { Td } from '@src/components/table/td.component';
import { textStyle } from '@src/components';
import { SearchIcon } from '@src/assets/icons';
import { BackHeader } from '@src/components/header/backHeader.component';
import { Button } from '@src/components/button/button.component';
import {
  Select,
  SelectOptionType,
} from '@kitten/ui';
import { RemoteImage } from '@src/assets/images';
import { DelegateList as DelegateListModel } from '@src/core/models/delegate/delegateList.model';
import { Delegate } from '@src/core/models/delegate/delegate.model';
import { SERVER_ADDRESS } from '../../../../../config';

interface ComponentProps {
  delegateList: DelegateListModel[];
  onDelegateItemPress: (deputy: Delegate) => void;
  onBackPress: () => void;
}

export type DelegateListTabletProps = ThemedComponentProps & ComponentProps;

const DelegateListTabletComponent: React.FunctionComponent<DelegateListTabletProps> = (props) => {
  const { themedStyle } = props;
  const [keyword, setKeyword] = useState('');
  const [groupSelected, setGroupSelected] = useState<SelectOptionType>({ text: '' });
  const [discussionGroupSelected, setDiscussionGroupSelected] = useState<SelectOptionType>({ text: '' });
  const [delegateList, setDelegateList] = useState<DelegateListModel[]>(props.delegateList);

  const onMessagePress = (): void => {

  };

  const onBackPress = (): void => {
    props.onBackPress();
  };

  const onHelpPress = (): void => {

  };

  const onSearchPress = (): void => {
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

    setDelegateList(JSON.parse(JSON.stringify(delegateListTemp)));
  };

  const onDelegateItemPress = (deputy: Delegate): void => {
    props.onDelegateItemPress(deputy);
  };

  const onGetGroupsFromData = () => {
    return [...new Set(props.delegateList.map(item => ({ text: item.group })))];
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

  const onGroupSelect = (option: SelectOptionType) => {
    setGroupSelected(option);
  };

  const onTeamSelect = (option: SelectOptionType) => {
    setDiscussionGroupSelected(option);
  };

  const renderData = (): React.ReactElement[] => {
    return delegateList.map((item, index) => {
      return (
        <React.Fragment key={index}>
          {renderDelegateList(item.deputies)}
        </React.Fragment>
      );
    });
  };

  const renderDelegateList = (deputies: Delegate[]): React.ReactElement[] => {
    return deputies.map((item, index) => {
      return (
        <Tr key={index}>
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
          <Td width={230}>
            <Text style={themedStyle.txtTd}>
              {item.discussionGroup}
            </Text>
          </Td>
          <Td alignItems='center' width={200}>
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={() => onDelegateItemPress(item)}>
              {SearchIcon(themedStyle.iconSearch)}
            </TouchableOpacity>
          </Td>
        </Tr>
      );
    });
  };

  return (
    <View style={themedStyle.container}>
      <BackHeader
        title={'DANH SÁCH ĐẠI BIỂU'}
        onBackPress={onBackPress}
        onMessagePress={onMessagePress}
        onHelpPress={onHelpPress}
      />
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
            onPress={() => onSearchPress()}
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
          <Tbody>
            {renderData()}
          </Tbody>
        </Table>
      </View>
    </View>
  );
};

export const DelegateListTablet = withStyles(DelegateListTabletComponent, (theme: ThemeType) => ({
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
}));
