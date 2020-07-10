import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Select, Layout} from '@kitten/ui';
import { ListCongressmen as ListCongressmenModel } from '@src/core/models/congressmanList/congressmanList.model';
import { User as UserModel } from '@src/core/models/user/user.model';
import { SearchIconOutline } from '@src/assets/icons';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import { CongressmanItem } from './congressmanItem';

interface ComponentProps {
  congressmen: ListCongressmenModel[];
  onCongressmanItemPress: (congressman: UserModel) => void;
}

export type CongressmanListProps = ThemedComponentProps & ComponentProps;

const CongressmanListComponent: React.FunctionComponent<CongressmanListProps> = (props) => {
  const { themedStyle } = props;
  const [selectedIndex, setSelectedIndex] = useState(null);

  const onCongressmanItemPress = (congressman: UserModel): void => {
    props.onCongressmanItemPress(congressman);
  };

  const onCreateDropDown = () => {
    return (
      <Layout style={{ minHeight: pxToPercentage(20) }}>
        <Select
          data={[
            { text: 'ĐẢNG BỘ KHỐI DÂN CHỦ ĐẢNG' },
            { text: 'ĐẢNG BỘ QUẬN 1' },
          ]}
          selectedOption={selectedIndex}
          placeholder='Chọn đoàn đại biểu'
          onSelect={item => { setSelectedIndex(item); }}>
        </Select>
      </Layout>
    );
  };

  return (
    <SafeAreaView style={themedStyle.container}>
      <View style={themedStyle.container}>
        <View style={themedStyle.viewHeader}>
          <Text style={themedStyle.txtHeader}>
            {'DANH SÁCH ĐẠI BIỂU'}
          </Text>
        </View>
        <View style={themedStyle.viewSearch}>
          <View style={themedStyle.viewFullName}>
            <TextInput
              style={themedStyle.inputFullName}
              placeholder='Nhập họ tên đại biểu'
              autoCapitalize='none'
            />
            <View style={themedStyle.viewIconSearch}>
              {SearchIconOutline(themedStyle.iconSearch)}
            </View>
          </View>
          <View style={themedStyle.viewDropDown}>
            {onCreateDropDown()}
          </View>
        </View>
        <View style={themedStyle.viewBody}>
          <FlatList
            data={props.congressmen}
            extraData={props.congressmen}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <CongressmanItem
                  congressmen={item}
                  index={index}
                  onCongressmanItemPress={onCongressmanItemPress}
                />
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export const CongressmanList = withStyles(CongressmanListComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-custom-color-3'],
  },
  viewHeader: {
    height: pxToPercentage(30),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: pxToPercentage(10),
  },
  contentContainer: {
  },
  txtHeader: {
    fontSize: pxToPercentage(13),
    ...textStyle.bold,
  },
  viewSearch: {
    justifyContent: 'center',
    backgroundColor: 'white',
    height: pxToPercentage(90),
    marginHorizontal: pxToPercentage(6),
  },
  viewFullName: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: pxToPercentage(6),
  },
  inputFullName: {
    flex: 1,
    height: pxToPercentage(35),
    borderWidth: pxToPercentage(0.5),
    borderRadius: pxToPercentage(4),
    fontSize: pxToPercentage(13),
    ...textStyle.italic,
    paddingLeft: pxToPercentage(8),
  },
  viewIconSearch: {
    backgroundColor: 'red',
    marginLeft: pxToPercentage(8),
    borderRadius: pxToPercentage(4),
  },
  iconSearch: {
    width: pxToPercentage(35),
    height: pxToPercentage(35),
    tintColor: 'white',
  },
  viewDropDown: {
    marginTop: pxToPercentage(10),
    height: pxToPercentage(34),
    borderRadius: pxToPercentage(4),
    borderWidth: pxToPercentage(0.5),
    marginHorizontal: pxToPercentage(6),
  },
  viewBody: {
    backgroundColor: 'white',
    flex: 1,
    marginHorizontal: pxToPercentage(6),
    marginVertical: pxToPercentage(3),
  },
  dropDown: {
    flex: 1,
  },
}));
