import { StyleType } from '@kitten/theme';
import { ImageProps } from 'react-native';

type IconProp = (style: StyleType) => React.ReactElement<ImageProps>;

export class FunctionModel {
  title: string;
  icon: IconProp;
  type: number;
}
