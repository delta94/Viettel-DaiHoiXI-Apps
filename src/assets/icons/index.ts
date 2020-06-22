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

export const EyeOffIconFill = (style: StyleProp<ImageStyle>): IconElement => {
  const source: IconSource = {
    imageSource: require('./eva/eye-off.png'),
  };

  return Icon(source, style);
};

export const EyeIconFill = (style: StyleProp<ImageStyle>): IconElement => {
  const source: IconSource = {
    imageSource: require('./eva/eye.png'),
  };

  return Icon(source, style);
};

export const PersonIconFill = (style: StyleProp<ImageStyle>): IconElement => {
  const source: IconSource = {
    imageSource: require('./eva/person.png'),
  };

  return Icon(source, style);
};
