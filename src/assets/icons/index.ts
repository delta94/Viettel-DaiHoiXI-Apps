import {
  ImageStyle,
  StyleProp,
} from 'react-native';
import {
  Icon,
  IconElement,
  IconSource,
} from './icon.component';
export {
  Icon,
  IconSource,
  RemoteIcon,
} from './icon.component';

export const ArrowIosBackFill = (style: StyleProp<ImageStyle>): IconElement => {
  const source: IconSource = {
    imageSource: require('./eva/arrow-ios-back.png'),
  };

  return Icon(source, style);
};
