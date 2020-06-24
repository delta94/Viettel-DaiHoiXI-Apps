import React from 'react';
import { SafeAreaView } from '@src/core/navigation';
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
} from '@src/assets/icons';
import { themes } from '@src/core/themes';

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
          selectedIndex={selectedIndex}
          onSelect={onTabSelect}>
          <BottomNavigationTab
            title='Trang chủ'
            icon={LayoutIconOutline}
          />
          <BottomNavigationTab
            title='Kỳ họp'
            icon={StarIconOutline}
          />
          <BottomNavigationTab
            title='Thông báo'
            icon={ColorPaletteIconOutline}
          />
          <BottomNavigationTab
            title='Tài khoản'
            icon={ColorPaletteIconOutline}
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
}));
