import React, { useState } from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
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
  const [selectedIndex, setSelectedIndex] = useState<any>(null);

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
          selectedOption={selectedIndex}
          placeholder='Chọn tổ'
          size={'large'}
          onSelect={item => setSelectedIndex(item)}>
        </Select>
        <ValidationInput
          style={themedStyle.textInput}
          textStyle={textStyle.proTextRegular}
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
      <SafeAreaView />
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
  flatListContainer: {
    paddingVertical: pxToPercentage(4),
    paddingHorizontal: pxToPercentage(8),
  },
  txtSelectInput: {
    fontSize: pxToPercentage(14),
    padding: 0,
    // marginVertical: pxToPercentage(7),
    ...textStyle.proTextRegular,
  },
  textInput: {
    marginTop: pxToPercentage(4),
  },
}));
