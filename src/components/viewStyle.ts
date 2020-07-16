import { ViewStyle } from 'react-native';

export const viewStyle: { [key: string]: ViewStyle } = {
  shadow1: {
    // shadow ios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.525,
    shadowRadius: 10,

    // shadow android
    elevation: 20,
  },
};
