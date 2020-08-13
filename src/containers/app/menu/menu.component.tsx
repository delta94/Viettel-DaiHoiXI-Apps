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
import { Menu as MenuModel } from '@src/core/models/menu/menu.model';
import { pxToPercentage } from '@src/core/utils/utils';
import { ProfileInfoV2 } from '@src/components/profileInfo/profileinfoV2.component';
import { viewStyle } from '@src/components/viewStyle';
import { textStyle } from '@src/components';
import { Deputy as DeputyModel } from '@src/core/models/deputy/deputy.model';
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
  SpeechManagementIconOther,
} from '@src/assets/icons';

interface ComponentProps {
  deputy: DeputyModel;
  menu: MenuModel[];
  onMenuItemPress: (type: string) => void;
}

export type MenuProps = ThemedComponentProps & ComponentProps;

const MenuComponent: React.FunctionComponent<MenuProps> = (props) => {
  const onFunctionItemPress = (type: string): void => {
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
        return DocumentIconOther(themedStyle.icon);
      }
      case MenuEnum.PhimAnhHinhAnh: {
        return AssetsIconOther(themedStyle.icon);
      }
      case MenuEnum.SoDoChoNgoi: {
        return SeatMapIconOther(themedStyle.icon);
      }
      case MenuEnum.DiemDanh: {
        return PersonIconOther(themedStyle.icon);
      }
      case MenuEnum.DangKyPhatBieu: {
        return SignUpToSpeakIconOther(themedStyle.icon);
      }
      case MenuEnum.QuanLyPhatBieu: {
        return SpeechManagementIconOther(themedStyle.icon);
      }
      case MenuEnum.ToThaoLuan: {
        return PeopleIconOther(themedStyle.icon);
      }
      default: {
        return undefined;
      }
    }
  };

  return (
    <View style={themedStyle.container}>
      <ProfileInfoV2
        deputy={props.deputy}
        style={themedStyle.viewProfileInfo}
      />
      <View style={themedStyle.viewList}>
        <FlatList
          data={props.menu}
          extraData={props.menu}
          numColumns={3}
          contentContainerStyle={themedStyle.viewListContainer}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                activeOpacity={0.75}
                onPress={() => onFunctionItemPress(item.key)}
                style={themedStyle.viewItem}>
                <View style={themedStyle.viewItemCircle}>
                  {renderIcon(item.key)}
                </View>
                <Text style={themedStyle.txtItem}>
                  {item.value}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export const Menu = withStyles(MenuComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    padding: pxToPercentage(8),
    paddingBottom: pxToPercentage(20),
  },
  viewList: {
    flex: 1,
    marginTop: pxToPercentage(8),
    borderRadius: pxToPercentage(12.5),
    backgroundColor: theme['color-basic-100'],
    ...viewStyle.shadow2,
  },
  viewListContainer: {
  },
  viewItem: {
    width: pxToPercentage(119.666),
    height: pxToPercentage(140),
    paddingTop: pxToPercentage(10),
    paddingHorizontal: pxToPercentage(10),
    alignItems: 'center',
  },
  viewItemCircle: {
    width: pxToPercentage(90),
    height: pxToPercentage(90),
    borderRadius: pxToPercentage(45),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme['color-primary-2'],
  },
  icon: {
    width: pxToPercentage(40),
    height: pxToPercentage(40),
    tintColor: theme['color-custom-100'],
  },
  txtItem: {
    textAlign: 'center',
    marginTop: pxToPercentage(5),
    fontSize: pxToPercentage(14),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegular,
  },
}));
