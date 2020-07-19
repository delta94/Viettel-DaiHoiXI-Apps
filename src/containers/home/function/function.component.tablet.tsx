import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { FunctionModel } from '@src/core/models/function/function.model';
import { pxToPercentage } from '@src/core/utils/utils';
import { User } from '@src/core/models/user/user.model';
import { viewStyle } from '@src/components/viewStyle';
import { textStyle } from '@src/components';
import { BackHeader } from '@src/components/header/backHeader.component';
import { ProfileInfoV2Tablet } from '@src/components/profileInfo/profileInfoV2.component.tablet';
import { FunctionEnum } from '@src/core/utils/constants';

interface ComponentProps {
  user: User;
  functions: FunctionModel[];
  onFunctionItemPress: (type: number) => void;
  onBackPress: () => void;
}

export type FunctionTabletProps = ThemedComponentProps & ComponentProps;

const FunctionTabletComponent: React.FunctionComponent<FunctionTabletProps> = (props) => {
  const onFunctionItemPress = (type: number): void => {
    props.onFunctionItemPress(type);
  };

  const onMessagePress = (): void => {

  };

  const onBackPress = (): void => {
    props.onBackPress();
  };

  const onHelpPress = (): void => {

  };

  const { themedStyle } = props;

  const getIconStyle = (type: number) => {
    switch (type) {
      case FunctionEnum.ThongTin:
      case FunctionEnum.DanhSachDaiBieu: {
        return themedStyle.icon;
      }
      case FunctionEnum.TaiLieu: {
        return themedStyle.iconTaiLieu;
      }
      case FunctionEnum.PhimAnhHinhAnh: {
        return themedStyle.iconPhimAnh;
      }
      case FunctionEnum.SoDoChoNgoi: {
        return themedStyle.iconSoDo;
      }
      case FunctionEnum.DiemDanh: {
        return themedStyle.iconDiemDanh;
      }
      case FunctionEnum.DangKyPhatBieu: {
        return themedStyle.iconDangKyPhatBieu;
      }
      case FunctionEnum.ToThaoLuan: {
        return themedStyle.iconToThaoLuan;
      }
      default: {
        return undefined;
      }
    }
  };

  return (
    <View style={themedStyle.container}>
      <BackHeader
        onBackPress={onBackPress}
        onMessagePress={onMessagePress}
        onHelpPress={onHelpPress}
      />
      <View style={themedStyle.viewCard}>
        <ProfileInfoV2Tablet
          user={props.user}
          onProfilePress={() => { }}
          onQRCodePress={() => { }}
          onSearchPress={() => { }}
        />
        <FlatList
          data={props.functions}
          extraData={props.functions}
          numColumns={4}
          contentContainerStyle={themedStyle.viewListContainer}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                activeOpacity={0.75}
                onPress={() => onFunctionItemPress(item.type)}
                style={themedStyle.viewItem}>
                {item.icon([getIconStyle(item.type)])}
                <Text style={themedStyle.txtItem}>
                  {item.title.toUpperCase()}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export const FunctionTablet = withStyles(FunctionTabletComponent, (theme: ThemeType) => ({
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
  viewListContainer: {
    alignItems: 'center',
  },
  viewItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: pxToPercentage(400),
    height: pxToPercentage(272),
    borderRadius: pxToPercentage(32),
    marginHorizontal: pxToPercentage(28),
    marginBottom: pxToPercentage(56),
    backgroundColor: theme['color-primary-2'],
  },
  txtItem: {
    textAlign: 'center',
    lineHeight: pxToPercentage(55),
    marginTop: pxToPercentage(24),
    fontSize: pxToPercentage(34),
    color: theme['color-primary-0'],
    ...textStyle.proDisplayBold,
  },
  icon: {
    width: pxToPercentage(88),
    height: pxToPercentage(88),
    tintColor: theme['color-primary-0'],
  },
  iconTaiLieu: {
    width: pxToPercentage(72),
    height: pxToPercentage(88),
    tintColor: theme['color-primary-0'],
  },
  iconPhimAnh: {
    width: pxToPercentage(102),
    height: pxToPercentage(88), // 82
    tintColor: theme['color-primary-0'],
  },
  iconSoDo: {
    width: pxToPercentage(120),
    height: pxToPercentage(88), // 69
    tintColor: theme['color-primary-0'],
  },
  iconDiemDanh: {
    width: pxToPercentage(88),
    height: pxToPercentage(88), // 80
    tintColor: theme['color-primary-0'],
  },
  iconDangKyPhatBieu: {
    width: pxToPercentage(66),
    height: pxToPercentage(88),
    tintColor: theme['color-primary-0'],
  },
  iconToThaoLuan: {
    width: pxToPercentage(132.6),
    height: pxToPercentage(88), // 66
    tintColor: theme['color-primary-0'],
  },
}));
