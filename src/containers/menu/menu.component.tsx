import React from 'react';
// import { SafeAreaView } from '@src/core/navigation';
import {
  ThemeProvider,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  BottomNavigation,
  BottomNavigationTab,
} from '@kitten/ui';
import {
  ColorPaletteIconOutline,
  LayoutIconOutline,
  StarIconOutline,
  HomeIconOutline,
  UserIconOutline,
  BellIconOutline,
} from '@src/assets/icons';
import { themes } from '@src/core/themes';
import { SafeAreaView } from 'react-native';
import { pxToPercentage } from '@src/core/utils/utils';

interface ComponentProps {
  selectedIndex: number;
  onTabSelect: (index: number) => void;
}

type Props = ThemedComponentProps & ComponentProps;

const MenuComponent: React.FunctionComponent<Props> = (props) => {

  const onTabSelect = (index: number): void => {
    props.onTabSelect(index);
  };

  const { selectedIndex, themedStyle } = props;

  return (
    <SafeAreaView style={themedStyle.safeAreaContainer}>
      <ThemeProvider theme={{ ...props.theme, ...themes['App Theme'] }}>
        <BottomNavigation
          appearance='noIndicator'
          style={themedStyle.bottomNavigation}
          selectedIndex={selectedIndex}
          onSelect={onTabSelect}>
          <BottomNavigationTab
            title='Trang chủ'
            icon={HomeIconOutline}
          />
          <BottomNavigationTab
            title='Kỳ họp'
            icon={StarIconOutline}
          />
          <BottomNavigationTab
            title='Thông báo'
            icon={BellIconOutline}
          />
          <BottomNavigationTab
            title='Tài khoản'
            icon={UserIconOutline}
          />
        </BottomNavigation>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export const Menu = withStyles(MenuComponent, (theme: ThemeType) => ({
  safeAreaContainer: {
    backgroundColor: theme['background-basic-color-1'],
  },
  bottomNavigation: {
    borderTopWidth: pxToPercentage(1),
    borderTopColor: theme['border-basic-color-4'],
  },
}));
