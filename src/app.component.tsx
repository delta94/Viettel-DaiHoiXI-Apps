import 'reflect-metadata';
import 'react-native-gesture-handler';

import React, {
  useState,
  useEffect,
} from 'react';
import { Router } from './core/navigation/routes';
import { ApplicationProvider } from '@kitten/theme';
import { mapping } from '@eva-design/eva';
import {
  ThemeContext,
  ThemeContextType,
  ThemeKey,
  themes,
  ThemeStore,
} from '@src/core/themes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import {
  store,
  persistor,
} from '@src/core/store';
import {
  DynamicStatusBar,
  Spinner,
} from './components';
import { isTablet } from 'react-native-device-info';
import Orientation from 'react-native-orientation-locker';

const App: React.FunctionComponent = () => {
  const [theme, setTheme] = useState<ThemeKey>('App Theme');

  useEffect(() => {
    console.disableYellowBox = true;

    if (isTablet()) {
      Orientation.lockToLandscape();
    } else {
      Orientation.lockToPortrait();
    }
  }, []);

  const contextValue: ThemeContextType = {
    currentTheme: theme,
    toggleTheme: (themeName: ThemeKey) => {
      ThemeStore.setTheme(themeName).then(() => {
        setTheme(themeName);
      });
    },
  };

  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}>
        <DynamicStatusBar barStyle='light-content' />
        <ThemeContext.Provider value={contextValue}>
          <ApplicationProvider
            mapping={mapping}
            theme={themes[theme]}>
            <Spinner />
            <Router />
          </ApplicationProvider>
        </ThemeContext.Provider>
      </PersistGate>
    </Provider>
  );
};

export default App;
