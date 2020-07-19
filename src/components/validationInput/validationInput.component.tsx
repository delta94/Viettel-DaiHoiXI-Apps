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
  Input,
  InputProps,
} from '@kitten/ui';
import { usePrevious } from '@src/core/utils/hookHelper';
import { textStyle } from '..';
import { pxToPercentage } from '@src/core/utils/utils';
import { isTablet } from 'react-native-device-info';

interface ComponentProps extends InputProps {
  validator: (value: string) => boolean;
  formatter?: (value: string, stateValue: string) => string;
  /**
   * Will emit changes depending on validation:
   * Will be called with input value if it is valid, otherwise will be called with undefined
   */
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

  const getStatus = (): string | undefined => {
    if (value && value.length) {
      return isValid(value) ? 'success' : 'danger';
    }

    return undefined;
  };

  const { style, themedStyle, ...restProps } = props;

  return (
    <Input
      autoCapitalize='none'
      status={getStatus()}
      textStyle={themedStyle.textStyle}
      maxLength={256}
      size={isTablet() ? 'large' : 'large'}
      {...restProps}
      value={value}
      style={[
        themedStyle.container,
        style,
      ]}
      onChangeText={onChangeText}
    />
  );
};

export const ValidationInput = withStyles(ValidationInputComponent, (theme: ThemeType) => ({
  container: {
  },
  textStyle: {
    fontSize: isTablet() ? pxToPercentage(28) : pxToPercentage(14),
    padding: 0,
    ...textStyle.regular,
  },
}));
