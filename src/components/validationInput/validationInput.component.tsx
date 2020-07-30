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
} from 'react-native';
import { usePrevious } from '@src/core/utils/hookHelper';
import { textStyle } from '..';
import { pxToPercentage } from '@src/core/utils/utils';
import { isTablet } from 'react-native-device-info';

interface ComponentProps extends TextInputProps {
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

  const isValid = (valueParam: string): boolean => {
    const { validator } = props;

    return validator(valueParam);
  };

  const { style, themedStyle, ...restProps } = props;

  return (
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
    />
  );
};

export const ValidationInput = withStyles(ValidationInputComponent, (theme: ThemeType) => ({
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
}));
