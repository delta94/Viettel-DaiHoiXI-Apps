import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage, searchASCII, isEmpty } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { Table } from '@src/components/table/table.component';
import { Thead } from '@src/components/table/thead.component';
import { Th } from '@src/components/table/th.component';
import { Tbody } from '@src/components/table/tbody.component';
import { Tr } from '@src/components/table/tr.component';
import { Td } from '@src/components/table/td.component';
import { textStyle } from '@src/components';
import { SearchIcon } from '@src/assets/icons';
import { Button } from '@src/components/button/button.component';
import { Select, SelectOptionType } from '@kitten/ui';
import { RemoteImage } from '@src/assets/images';
import { Deputy as DeputyModel } from '@src/core/models/deputy/deputy.model';
import { DeputyDiscussionGroup as DeputyDiscussionGroupModel } from '@src/core/models/deputy/deputyDiscussionGroup.model';
import { IMAGE_SERVER_ADDRESS } from '../../../../../config';
import { DiscussionGroup } from '@src/core/models/deputy/discussionGroup.model';
import { DiscussionGroupKeyMember } from '@src/core/models/deputy/keyMember.model';
import { ScrollView } from 'react-native-gesture-handler';

interface ComponentProps {
  deputyDiscussionGroups: DeputyDiscussionGroupModel;
  onDelegateItemPress: (deputy: DeputyModel) => void;
  discussionGroups: DiscussionGroup[];
  onSelectGroupChange: (groupName: SelectOptionType) => void;
  discussionGroupSelected: SelectOptionType;
  discussionGroupKeyMember: DiscussionGroupKeyMember;
}

export type DeputyDiscussionGroupTabletProps = ThemedComponentProps & ComponentProps;

const DeputyDiscussionGroupTabletComponent: React.FunctionComponent<DeputyDiscussionGroupTabletProps> = (props) => {
  const { themedStyle } = props;
  const [keyword, setKeyword] = useState('');

  const onSearchPress = (): void => {
  };

  const onFilterDeputiesByCondition = (): DeputyModel[] => {
    return props.deputyDiscussionGroups.discussionGroupDeputies.filter(deputy => {
      return searchASCII(keyword, deputy.fullName);
    });
  };

  const onFilterDeputiesKeyMember = (): DeputyModel[] => {
    return props.discussionGroupKeyMember.keyMembers;
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
  const onDelegateItemPress = (delegate: DeputyModel): void => {
    props.onDelegateItemPress(delegate);
  };

  const onGroupSelect = (option: SelectOptionType) => {
    props.onSelectGroupChange(option);
  };

  const onChangeText = (value: string) => {
    setKeyword(value || '');
  };

  const renderMeetings = (): React.ReactElement[] => {
    return onFilterDeputiesByCondition().map((item, index) => {
      return (
        <Tr key={index}>
          <Td alignItems='center' width={150}>
            <Text style={themedStyle.txtInfo}>
              {item.code}
            </Text>
          </Td>
          <Td alignItems='center' width={260}>
            <Image
              source={(new RemoteImage(`${IMAGE_SERVER_ADDRESS}${item.avatar}`)).imageSource}
              style={themedStyle.imgAvatar}
            />
          </Td>
          <Td width={600}>
            <Text style={themedStyle.txtFullname}>
              {item.fullName}
            </Text>
          </Td>
          <Td>
            <Text style={themedStyle.txtInfo}>
              {item.position || '-'}
            </Text>
          </Td>
          <Td width={250}>
            <Text style={themedStyle.txtInfo}>
              {props.deputyDiscussionGroups.name || '-'}
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

  const renderDescussionKeyMember = (): React.ReactElement[] => {
    return onFilterDeputiesKeyMember().map(item => {
      return (
        <Text
          style={themedStyle.txtInfo}
          numberOfLines={1}>
          {`${item.positionInGroup}:\tĐồng chí ${item.fullName} - ${item.position}`}
        </Text>
      );
    });
  };

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewCard}>
        <View style={themedStyle.viewGroupInfo}>
          <Select
            data={onGetDiscussionGroupsFromData()}
            textStyle={themedStyle.txtSelectInput}
            keyExtractor={(item) => item.text}
            selectedOption={props.discussionGroupSelected}
            controlStyle={themedStyle.selectInputTeam}
            placeholder='Chọn tổ'
            onSelect={onGroupSelect}>
          </Select>
          <View style={themedStyle.viewInfo}>
            <ScrollView>
              <Text style={themedStyle.txtInfo}>
                {`Vị trí họp:\t${isEmpty(props.discussionGroupKeyMember.meetingRoom) ? '-' : props.discussionGroupKeyMember.meetingRoom}`}
              </Text>
              {renderDescussionKeyMember()}
            </ScrollView>
          </View>

        </View>
        <KeyboardAvoidingView>
          <View style={themedStyle.viewBtns}>
            <TextInput
              placeholder='Nhập họ tên đại biểu'
              onChangeText={onChangeText}
              style={themedStyle.textInput}
            />
            <Button
              title='TÌM KIẾM'
              onPress={onSearchPress}
              style={themedStyle.btnSearch}
            />
          </View>
        </KeyboardAvoidingView>
        <Table style={themedStyle.viewTable}>
          <Thead>
            <Th alignItems='center' width={150}>
              {'SĐB'}
            </Th>
            <Th alignItems='center' width={260}>
              {'Hình ảnh'}
            </Th>
            <Th alignItems='center' width={600}>
              {'Họ tên'}
            </Th>
            <Th alignItems='center'>
              {'Chức vụ'}
            </Th>
            <Th alignItems='center' width={250}>
              {'Tổ'}
            </Th>
            <Th alignItems='center' width={200}>
              {'Xem'}
            </Th>
          </Thead>
          <Tbody>
            {renderMeetings()}
          </Tbody>
        </Table>
      </View>
    </View>
  );
};

export const DeputyDiscussionGroupTablet = withStyles(DeputyDiscussionGroupTabletComponent, (theme: ThemeType) => ({
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
  viewGroupInfo: {
    flexDirection: 'row',
  },
  viewInfo: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: pxToPercentage(20),
    height: pxToPercentage(160),
    borderRadius: pxToPercentage(28),
    backgroundColor: theme['color-primary-20'],
  },
  viewBtns: {
    flexDirection: 'row',
    alignItems: 'center',
    height: pxToPercentage(120),
    marginVertical: pxToPercentage(8),
  },
  viewTable: {
    flex: 1,
  },
  txtInfo: {
    fontSize: pxToPercentage(34),
    lineHeight: pxToPercentage(45),
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
    width: pxToPercentage(765),
    marginRight: pxToPercentage(20),
    paddingHorizontal: pxToPercentage(24),
    borderRadius: pxToPercentage(28),
    borderWidth: pxToPercentage(2),
    borderColor: theme['color-primary-18'],
    ...textStyle.proDisplayRegular,
    paddingVertical: 0,
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
    width: pxToPercentage(440),
  },
  iconSearch: {
    width: pxToPercentage(54),
    height: pxToPercentage(54),
  },
}));
