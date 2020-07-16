import React, {
  useState,
  useEffect,
} from 'react';
import {
  View,
  ViewProps,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  textStyle,
  ValidationInput,
} from '@src/components';
import { RefreshIconFill } from '@src/assets/icons';
import {
  PhoneNumberValidator,
  NumberValidator,
} from '@src/core/validators';
import { SignInPhoneNumberFormData } from '@src/core/models/auth/signIn/signIn.model';
import { usePrevious } from '@src/core/utils/hookHelper';
import {
  isEmpty,
  pxToPercentage,
} from '@src/core/utils/utils';
import { isTablet } from 'react-native-device-info';

interface ComponentProps {
  /**
   * Will emit changes depending on validation:
   * Will be called with form value if it is valid, otherwise will be called with undefined
   */
  onDataChange: (value: SignInPhoneNumberFormData | undefined) => void;
}

export type SignInPhoneNumberFormProps = ThemedComponentProps & ViewProps & ComponentProps;

const SignInPhoneNumberFormComponent: React.FunctionComponent<SignInPhoneNumberFormProps> = (props) => {
  const [formData, setFormData] = useState<SignInPhoneNumberFormData>({
    phone: undefined,
  });

  let prevState = usePrevious(formData);

  if (!prevState) {
    prevState = { ...formData };
  }

  useEffect(() => {
    const oldFormValid: boolean = isValid(prevState);
    const newFormValid: boolean = isValid(formData);

    const isStateChanged: boolean = prevState !== formData;
    const becomeValid: boolean = !oldFormValid && newFormValid;
    const becomeInvalid: boolean = oldFormValid && !newFormValid;
    const remainValid: boolean = oldFormValid && newFormValid;

    if (becomeValid) {
      props.onDataChange(formData);
    } else if (becomeInvalid) {
      props.onDataChange(undefined);
    } else if (isStateChanged && remainValid) {
      props.onDataChange(formData);
    }
  });

  const onUsernameInputTextChange = (phone: string) => {
    setFormData({ ...formData, phone });
  };

  const isValid = (value: SignInPhoneNumberFormData): boolean => {
    return !isEmpty(value.phone);
  };

  const { style, themedStyle, theme, ...restProps } = props;

  return (
    <View
      {...restProps}
      style={[themedStyle.container, style]}>
      <ValidationInput
        style={themedStyle.inputPhoneNumber}
        textStyle={textStyle.regular}
        placeholder='Số điện thoại'
        validator={PhoneNumberValidator}
        onChangeText={onUsernameInputTextChange}
      />
      <View style={themedStyle.viewCaptcha}>
        <ValidationInput
          style={themedStyle.inputVerification}
          textStyle={textStyle.regular}
          placeholder='Mã xác nhận'
          validator={NumberValidator}
          onChangeText={onUsernameInputTextChange}
        />
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => { }}
          style={themedStyle.btnCaptcha}>
          <ValidationInput
            disabled
            onIconPress={() => { }}
            icon={RefreshIconFill}
            textStyle={textStyle.regular}
            placeholder='ABCD'
            validator={NumberValidator}
            onChangeText={onUsernameInputTextChange}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const SignInPhoneNumberForm = withStyles(SignInPhoneNumberFormComponent, (theme: ThemeType) => ({
  container: {
  },
  viewCaptcha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: isTablet() ? pxToPercentage(15) : pxToPercentage(7.5),
  },
  inputVerification: {
    width: '63%',
  },
  btnCaptcha: {
    width: '35%',
  },
}));
