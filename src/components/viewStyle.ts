import { ViewStyle } from 'react-native';

export const viewStyle: { [key: string]: ViewStyle } = {
  shadow: {
    // shadow ios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.125,
    shadowRadius: 1.5,

    // shadow android
    elevation: 3,
    borderWidth: 0,
  },
  shadow2: {
    // shadow ios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.11,
    shadowRadius: 1.5,

    // shadow android
    elevation: 5,
  },
  shadow3: {
    // shadow ios
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,

    // shadow android
    elevation: 9,
    borderWidth: 0,
  },
  shadow4: {
    // shadow ios
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,

    // shadow android
    elevation: 2,
    borderWidth: 0,
  },
  shadow5: {
    // shadow ios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.125,
    shadowRadius: 1.5,

    // shadow android
    elevation: 1,
    borderWidth: 0,
  },
};
