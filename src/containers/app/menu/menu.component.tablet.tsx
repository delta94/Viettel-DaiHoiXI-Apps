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
import { Menu } from '@src/core/models/menu/menu.model';
import { pxToPercentage } from '@src/core/utils/utils';
import { Deputy as DeputyModel } from '@src/core/models/deputy/deputy.model';
import { viewStyle } from '@src/components/viewStyle';
import { textStyle } from '@src/components';
import { ProfileInfoV2Tablet } from '@src/components/profileInfo/profileInfoV2.component.tablet';
import { MenuEnum } from '@src/core/utils/constants';
import {
  InformationIconOther,
  DelegateListIconOther,
  DocumentIconOther,
  AssetsIconOther,
  SeatMapIconOther,
  PersonIconOther,
  SignUpToSpeakIconOther,
  PeopleIconOther,
} from '@src/assets/icons';

interface ComponentProps {
  deputy: DeputyModel;
  menu: Menu[];
  onMenuItemPress: (type: string) => void;
}

export type MenuTabletProps = ThemedComponentProps & ComponentProps;

const MenuTabletComponent: React.FunctionComponent<MenuTabletProps> = (props) => {
  const onMenuItemPress = (type: string): void => {
    props.onMenuItemPress(type);
  };

  const { themedStyle } = props;

  const renderIcon = (key: string): React.ReactElement => {
    switch (key) {
      case MenuEnum.ThongTin: {
        return InformationIconOther(themedStyle.icon);
      }
      case MenuEnum.DanhSachDaiBieu: {
        return DelegateListIconOther(themedStyle.icon);
      }
      case MenuEnum.TaiLieu: {
        return DocumentIconOther(themedStyle.iconTaiLieu);
      }
      case MenuEnum.PhimAnhHinhAnh: {
        return AssetsIconOther(themedStyle.iconPhimAnh);
      }
      case MenuEnum.SoDoChoNgoi: {
        return SeatMapIconOther(themedStyle.iconSoDo);
      }
      case MenuEnum.DiemDanh: {
        return PersonIconOther(themedStyle.iconDiemDanh);
      }
      case MenuEnum.DangKyPhatBieu: {
        return SignUpToSpeakIconOther(themedStyle.iconDangKyPhatBieu);
      }
      case MenuEnum.ToThaoLuan: {
        return PeopleIconOther(themedStyle.iconToThaoLuan);
      }
      default: {
        return undefined;
      }
    }
  };

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewCard}>
        <ProfileInfoV2Tablet
          deputy={props.deputy}
          onProfilePress={() => { }}
          onQRCodePress={() => { }}
          onSearchPress={() => { }}
        />
        <FlatList
          data={props.menu}
          extraData={props.menu}
          numColumns={4}
          contentContainerStyle={themedStyle.viewListContainer}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                activeOpacity={0.75}
                onPress={() => onMenuItemPress(item.key)}
                style={themedStyle.viewItem}>
                {renderIcon(item.key)}
                <Text style={themedStyle.txtItem}>
                  {item.value.toUpperCase()}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export const MenuTablet = withStyles(MenuTabletComponent, (theme: ThemeType) => ({
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
