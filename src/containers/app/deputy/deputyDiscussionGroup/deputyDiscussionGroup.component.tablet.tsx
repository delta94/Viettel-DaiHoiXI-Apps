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
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { User as UserModel } from '@src/core/models/user/user.model';
import { Table } from '@src/components/table/table.component';
import { Thead } from '@src/components/table/thead.component';
import { Th } from '@src/components/table/th.component';
import { Tbody } from '@src/components/table/tbody.component';
import { Tr } from '@src/components/table/tr.component';
import { Td } from '@src/components/table/td.component';
import { textStyle } from '@src/components';
import { SearchIcon } from '@src/assets/icons';
import { Button } from '@src/components/button/button.component';
import { Select } from '@kitten/ui';
import { RemoteImage } from '@src/assets/images';

interface ComponentProps {
  delegateList: UserModel[];
  onDelegateItemPress: (delegate: UserModel) => void;
}

export type DeputyDiscussionGroupTabletProps = ThemedComponentProps & ComponentProps;

const DeputyDiscussionGroupTabletComponent: React.FunctionComponent<DeputyDiscussionGroupTabletProps> = (props) => {
  const { themedStyle } = props;
  const [selectedOptionTeam, setSelectedOptionTeam] = useState<any>(null);

  const onSearchPress = (): void => {

  };

  const onDelegateItemPress = (delegate: UserModel): void => {
    props.onDelegateItemPress(delegate);
  };

  const renderMeetings = (): React.ReactElement[] => {
    return props.delegateList.map((item, index) => {
      return (
        <Tr key={index}>
          <Td alignItems='center' width={110}>
            <Text style={themedStyle.txtInfo}>
              {item.delegate_number}
            </Text>
          </Td>
          <Td alignItems='center' width={260}>
            <Image
              source={(new RemoteImage(item.avatar).imageSource)}
              style={themedStyle.imgAvatar}
            />
          </Td>
          <Td width={600}>
            <Text style={themedStyle.txtFullname}>
              {item.full_name}
            </Text>
          </Td>
          <Td>
            <Text style={themedStyle.txtInfo}>
              {item.position}
            </Text>
          </Td>
          <Td width={250}>
            <Text style={themedStyle.txtInfo}>
              {`Tổ ${item.team_number}`}
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
      <View style={themedStyle.viewCard}>
        <View style={themedStyle.viewGroupInfo}>
          <Select
            data={[
              { text: 'Tất cả' },
              { text: 'Tổ 1' },
              { text: 'Tổ 2' },
            ]}
            textStyle={themedStyle.txtSelectInput}
            keyExtractor={(item) => item.text}
            selectedOption={selectedOptionTeam}
            controlStyle={themedStyle.selectInputTeam}
            placeholder='Chọn tổ'
            onSelect={setSelectedOptionTeam}>
          </Select>
          <View style={themedStyle.viewInfo}>
            <Text style={themedStyle.txtInfo}>
              {'Tổ trưởng:\tĐồng chí Nguyễn Thiện Nhân - Ủy viên Bộ Chính trị, Bí thư Thành ủy'}
              {'\nThư ký:\t\tĐồng chí Phan Thanh Tân - Phó Bí thư Thường trực Đảng ủy, Phó Chánh Văn phòng Thành ủy'}
              {'\nVị trí họp:\tPhòng 403 - Trung tâm Hội nghị 272 Võ Thị Sáu'}
            </Text>
          </View>
        </View>
        <View style={themedStyle.viewBtns}>
          <TextInput
            placeholder='Nhập họ tên đại biểu'
            onChangeText={() => { }}
            style={themedStyle.textInput}
          />
          <Button
            title='TÌM KIẾM'
            onPress={onSearchPress}
            style={themedStyle.btnSearch}
          />
        </View>
        <Table style={themedStyle.viewTable}>
          <Thead>
            <Th alignItems='center' width={110}>
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
