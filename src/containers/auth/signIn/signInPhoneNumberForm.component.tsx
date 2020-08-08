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
import { ValidationInput } from '@src/components';
import { RefreshIconOther } from '@src/assets/icons';
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

interface ComponentProps {
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
        placeholder='Số điện thoại'
        validator={PhoneNumberValidator}
        onChangeText={onUsernameInputTextChange}
      />
      <View style={themedStyle.viewCaptcha}>
        <ValidationInput
          viewContainerStyle={themedStyle.viewInputVerification}
          placeholder='Mã xác nhận'
          validator={NumberValidator}
          onChangeText={onUsernameInputTextChange}
        />
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => { }}
          style={themedStyle.btnCaptcha}>
          <ValidationInput
            editable={false}
            placeholder='ABCD'
            validator={NumberValidator}
            onChangeText={onUsernameInputTextChange}
          />
          {RefreshIconOther(themedStyle.iconRefresh)}
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
    marginTop: pxToPercentage(7.5),
  },
  viewInputVerification: {
    width: '60%',
  },
  btnCaptcha: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: pxToPercentage(15),
  },
  iconRefresh: {
    position: 'absolute',
    right: pxToPercentage(10),
    width: pxToPercentage(17.5),
    height: pxToPercentage(17.5),
  },
}));
