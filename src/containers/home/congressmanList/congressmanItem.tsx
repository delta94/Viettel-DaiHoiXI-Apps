import React from 'react';
import { Avatar } from '@kitten/ui';
import { Text, View, ViewProps, Alert, TouchableOpacity } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { textStyle } from '@src/components';
import { pxToPercentage } from '@src/core/utils/utils';
import { RemoteImage } from '@src/assets/images';
import { User as UserModel } from '@src/core/models/user/user.model';
import { ListCongressmen as ListCongressmenModel } from '@src/core/models/congressmanList/congressmanList.model';

interface ComponentProps extends ViewProps {
  congressmen: ListCongressmenModel;
  index: number;
  onCongressmanItemPress: (congressman: UserModel) => void;
}

export type CongressmanItemProps = ThemedComponentProps & ComponentProps;

const CongressmanItemComponent: React.FunctionComponent<CongressmanItemProps> = (props) => {
  const { style, themedStyle, congressmen, ...restProps } = props;

  const onCongressmanItemPress = (congressman: UserModel): void => {
    props.onCongressmanItemPress(congressman);
  };

  const renderUser = (data: UserModel[]): React.ReactElement[] => {
    return data.map((item, index) => {
      return (
        <TouchableOpacity
          {...restProps}
          onPress={() => { }}
          style={themedStyle.viewContainerItem}
        >
          <Avatar
            size='giant'
            shape='square'
            style={themedStyle.avatar}
            source={(new RemoteImage(item.avatar)).imageSource}
          />
          <View style={themedStyle.viewContent}>
            <Text style={themedStyle.txt}>
              {'Đồng chí'}
            </Text>
            <Text style={themedStyle.txtFullName}>
              {item.full_name}
            </Text>
            <Text style={themedStyle.txtPosition}>
              {item.position}
            </Text>
            <View style={themedStyle.viewBottom}>
              <Text style={themedStyle.txtSDB}>
                {'SĐB: ' + item.sdb}
              </Text>
              <Text style={themedStyle.txtTo}>
                {'Tổ: ' + item.to}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View
      style={[
        themedStyle.container,
        style,
      ]}>
      <View style={themedStyle.viewSection}>
        <Text style={themedStyle.txtSection}>
          {props.index + 1 + ' - ' + congressmen.doanDB}
        </Text>
      </View>
      {renderUser(congressmen.congressmen)}
    </View>
  );
};

export const CongressmanItem = withStyles(CongressmanItemComponent, (theme: ThemeType) => ({
  container: {
    marginVertical: pxToPercentage(4),
  },
  viewContainerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: pxToPercentage(4),
    marginTop: pxToPercentage(4),
    borderWidth: pxToPercentage(0.5),
    borderRadius: pxToPercentage(7),
  },
  viewSection: {
    justifyContent: 'center',
    backgroundColor: theme['background-basic-color-5'],
  },
  avatar: {
    width: pxToPercentage(70),
    height: pxToPercentage(80),
    marginLeft: pxToPercentage(8),
  },
  viewContent: {
    flex: 1,
    marginLeft: pxToPercentage(15),
    paddingVertical: pxToPercentage(5),
  },
  txt: {
    fontSize: pxToPercentage(13),
    ...textStyle.semibold,
  },
  txtFullName: {
    fontSize: pxToPercentage(13),
    ...textStyle.regular,
  },
  txtPosition: {
    fontSize: pxToPercentage(13),
    ...textStyle.italic,
  },
  viewBottom: {
    flexDirection: 'row',
  },
  txtSection: {
    fontSize: pxToPercentage(12),
    paddingLeft: pxToPercentage(10),
    paddingVertical: pxToPercentage(5),
    color: 'white',
  },
  txtSDB: {
    fontSize: pxToPercentage(12),
    ...textStyle.semibold,
  },
  txtTo: {
    marginLeft: pxToPercentage(35),
    fontSize: pxToPercentage(12),
    ...textStyle.semibold,
  },
}));
