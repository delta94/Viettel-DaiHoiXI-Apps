import React, {
  useState,
  useEffect,
} from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { usePrevious } from '@src/core/utils/hookHelper';
import { textStyle } from '..';
import { pxToPercentage } from '@src/core/utils/utils';
import { isTablet } from 'react-native-device-info';
import {
  OtherEyeOn,
  OtherEyeOff,
} from '@src/assets/icons';

interface ComponentProps extends TextInputProps {
  viewContainerStyle?: StyleProp<ViewStyle>;
  validator: (value: string) => boolean;
  formatter?: (value: string, stateValue: string) => string;
  onChangeText?: (value: string | undefined) => void;
}

export type ValidationInputProps = ThemedComponentProps & ComponentProps;

/**
 * You probably don't need to pass `value` prop into this component
 */
const ValidationInputComponent: React.FunctionComponent<ValidationInputProps> = (props) => {
  const [value, setValue] = useState<string>(props.value);
  const [isSecure, setIsSecure] = useState<boolean>(props.secureTextEntry);
  const [isIconShow, setIsIconShow] = useState<boolean>(false);

  let prevState = usePrevious({ value });
  if (!prevState) {
    prevState = { value };
  }

  useEffect(() => {
    const oldValue = prevState.value;
    const newValue = value;

    const becomeValid: boolean = !isValid(oldValue) && isValid(newValue);
    const becomeInvalid: boolean = !isValid(newValue) && isValid(oldValue);

    if (becomeValid) {
      props.onChangeText(newValue);
    } else if (becomeInvalid) {
      props.onChangeText(undefined);
    }
  });

  useEffect(() => {
    onValueChange();
  }, [value]);

  const onChangeText = (text: string): void => {
    const { formatter } = props;

    const valueChange: string = formatter ? formatter(text, value) : text;

    setValue(valueChange);
  };

  const onValueChange = (): void => {
    if (isValid(value) && props.onChangeText) {
      props.onChangeText(value);
    }
  };

  const onIconPress = (): void => {
    setIsSecure(!isSecure);
    setIsIconShow(!isIconShow);
  };

  const isValid = (valueParam: string): boolean => {
    const { validator } = props;

    return validator(valueParam);
  };

  const { style, themedStyle, viewContainerStyle, ...restProps } = props;

  return (
    <View
      style={[
        themedStyle.viewContainer,
        viewContainerStyle,
      ]}>
      <TextInput
        autoCapitalize='none'
        maxLength={256}
        {...restProps}
        value={value}
        style={[
          isTablet() ? themedStyle.containerTablet : themedStyle.container,
          style,
        ]}
        placeholderTextColor={themedStyle.phd.color}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
      />
      {props.secureTextEntry &&
        (<TouchableOpacity
          activeOpacity={0.75}
          onPress={onIconPress}
          style={themedStyle.btnIcon}>
          {isIconShow ? OtherEyeOn(themedStyle.icon) : OtherEyeOff(themedStyle.icon)}
        </TouchableOpacity>)}
    </View>
  );
};

export const ValidationInput = withStyles(ValidationInputComponent, (theme: ThemeType) => ({
  viewContainer: {
    justifyContent: 'center',
    marginTop: 1,
  },
  container: {
    fontSize: pxToPercentage(18),
    height: pxToPercentage(48),
    paddingHorizontal: pxToPercentage(16),
    borderRadius: pxToPercentage(16),
    color: theme['text-basic-color'],
    borderWidth: pxToPercentage(1),
    borderColor: theme['color-primary-18'],
    backgroundColor: theme['color-primary-12'],
    ...textStyle.proDisplayRegular,
  },
  containerTablet: {
    fontSize: pxToPercentage(34),
    height: pxToPercentage(100),
    paddingHorizontal: pxToPercentage(24),
    borderRadius: pxToPercentage(28),
    color: theme['text-basic-color'],
    borderWidth: pxToPercentage(2),
    borderColor: theme['color-primary-18'],
    backgroundColor: theme['color-primary-12'],
    ...textStyle.proDisplayRegular,
  },
  phd: {
    color: theme['color-primary-18'],
  },
  btnIcon: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: isTablet() ? pxToPercentage(10) : 0,
    height: isTablet() ? pxToPercentage(100) : pxToPercentage(48),
    width: isTablet() ? pxToPercentage(60) : pxToPercentage(30),
  },
  icon: {
    height: isTablet() ? pxToPercentage(40) : pxToPercentage(16.09),
    width: isTablet() ? pxToPercentage(40) : pxToPercentage(18.62),
    tintColor: theme['color-custom-500'],
  },
}));
