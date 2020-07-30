import React, {
  useState,
  useEffect,
} from 'react';
import {
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { ValidationInput } from '@src/components';
import {
  PasswordValidator,
  NameValidator,
} from '@src/core/validators';
import { SignInAccountFormData } from '@src/core/models/auth/signIn/signIn.model';
import { usePrevious } from '@src/core/utils/hookHelper';
import {
  isEmpty,
  pxToPercentage,
} from '@src/core/utils/utils';

interface ComponentProps {
  onDataChange: (value: SignInAccountFormData | undefined) => void;
}

export type SignInAccountFormTabletProps = ThemedComponentProps & ViewProps & ComponentProps;

const SignInAccountFormTabletComponent: React.FunctionComponent<SignInAccountFormTabletProps> = (props) => {
  const [formData, setFormData] = useState<SignInAccountFormData>({
    username: undefined,
    password: undefined,
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

  const onUsernameInputTextChange = (username: string) => {
    setFormData({ ...formData, username });
  };

  const onPasswordInputTextChange = (password: string) => {
    setFormData({ ...formData, password });
  };

  const isValid = (value: SignInAccountFormData): boolean => {
    return !isEmpty(value.username) && !isEmpty(value.password);
  };

  const { style, themedStyle, theme, ...restProps } = props;

  return (
    <View
      {...restProps}
      style={[themedStyle.container, style]}>
      <ValidationInput
        placeholder='Tên đăng nhập'
        validator={NameValidator}
        onChangeText={onUsernameInputTextChange}
      />
      <ValidationInput
        style={themedStyle.inputPassword}
        placeholder='Mật khẩu'
        secureTextEntry={true}
        validator={PasswordValidator}
        onChangeText={onPasswordInputTextChange}
      />
    </View>
  );
};

export const SignInAccountFormTablet = withStyles(SignInAccountFormTabletComponent, (theme: ThemeType) => ({
  container: {
  },
  inputPassword: {
    marginTop: pxToPercentage(15),
  },
}));
