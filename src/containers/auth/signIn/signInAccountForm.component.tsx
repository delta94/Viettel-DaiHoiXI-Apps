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
  NameValidator,
  StringValidator,
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

export type SignInAccountFormProps = ThemedComponentProps & ViewProps & ComponentProps;

const SignInAccountFormComponent: React.FunctionComponent<SignInAccountFormProps> = (props) => {
  const [formData, setFormData] = useState<SignInAccountFormData>({
    userName: undefined,
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

  const onUsernameInputTextChange = (userName: string) => {
    setFormData({ ...formData, userName });
  };

  const onPasswordInputTextChange = (password: string) => {
    setFormData({ ...formData, password });
  };

  const isValid = (value: SignInAccountFormData): boolean => {
    return !isEmpty(value.userName) && !isEmpty(value.password);
  };

  const { style, themedStyle, theme, ...restProps } = props;

  return (
    <View
      {...restProps}
      style={[themedStyle.container, style]}>
      <ValidationInput
        value={formData.userName}
        placeholder='Tên đăng nhập'
        validator={StringValidator}
        onChangeText={onUsernameInputTextChange}
        maxLength={50}
      />
      <ValidationInput
        value={formData.password}
        viewContainerStyle={themedStyle.viewInputPassword}
        placeholder='Mật khẩu'
        secureTextEntry={true}
        validator={StringValidator}
        onChangeText={onPasswordInputTextChange}
        maxLength={50}
      />
    </View>
  );
};

export const SignInAccountForm = withStyles(SignInAccountFormComponent, (theme: ThemeType) => ({
  container: {
  },
  viewInputPassword: {
    marginTop: pxToPercentage(7.5),
  },
}));
