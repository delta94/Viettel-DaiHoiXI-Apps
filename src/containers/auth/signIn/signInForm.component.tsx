import React, {
  useState,
  useEffect,
} from 'react';
import { usePrevious } from '@src/core/utils/hookHelper';
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
  EyeOffIconFill,
  PersonIconFill,
  EyeIconFill,
} from '@src/assets/icons';
import {
  PasswordValidator,
  UsernameValidator,
} from '@src/core/validators';
import { SignInFormData } from '@src/core/models/auth/signIn/signIn.model';
import {
  isEmpty,
  pxToPercentage,
} from '@src/core/utils/utils';
import I18n from '@src/assets/i18n';

interface ComponentProps {
  onForgotPasswordPress: () => void;
  onDataChange: (value: SignInFormData | undefined) => void;
}

export type SignInFormProps = ThemedComponentProps & ViewProps & ComponentProps;

const SignInFormComponent: React.FunctionComponent<SignInFormProps> = (props) => {
  const [signInFormData, setSignInFormData] = useState<SignInFormData>({
    username: undefined,
    password: undefined,
  });
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  let prevState = usePrevious(signInFormData);

  if (!prevState) {
    prevState = { ...signInFormData };
  }

  useEffect(() => {
    const prevFormValid: boolean = isValid(prevState);
    const nextFormValid: boolean = isValid(signInFormData);

    // check state is changed or not
    const isStateChanged: boolean = prevState !== signInFormData;

    // check formdata is valid or not
    const becomeValid: boolean = !prevFormValid && nextFormValid;
    const becomeInvalid: boolean = prevFormValid && !nextFormValid;
    const remainValid: boolean = prevFormValid && nextFormValid;

    if (becomeValid) {
      props.onDataChange(signInFormData);
    } else if (becomeInvalid) {
      props.onDataChange(undefined);
    } else if (isStateChanged && remainValid) {
      props.onDataChange(signInFormData);
    }
  });

  const onUsernameInputTextChange = (username: string) => {
    setSignInFormData({ ...signInFormData, username });
  };

  const onPasswordInputTextChange = (password: string) => {
    setSignInFormData({ ...signInFormData, password });
  };

  const isValid = (value: SignInFormData): boolean => {
    return !isEmpty(value.username) &&
      !isEmpty(value.password);
  };

  const onIconPasswordPress = (): void => {
    setIsShowPassword(!isShowPassword);
  };

  const { themedStyle, style, ...restProps } = props;

  return (
    <View
      style={[
        themedStyle.container,
        style,
      ]}
      {...restProps}>
      <View style={themedStyle.formContainer}>
        <ValidationInput
          style={[
            themedStyle.inputStyle,
            themedStyle.usernameInput,
          ]}
          placeholder={I18n.t('signIn.phdUsername')}
          icon={PersonIconFill}
          validator={UsernameValidator}
          onChangeText={onUsernameInputTextChange}
          keyboardType='default'
        />
        <ValidationInput
          style={themedStyle.inputStyle}
          placeholder={I18n.t('signIn.phdPassword')}
          icon={isShowPassword ? EyeIconFill : EyeOffIconFill}
          onIconPress={onIconPasswordPress}
          secureTextEntry={!isShowPassword}
          validator={PasswordValidator}
          onChangeText={onPasswordInputTextChange}
          keyboardType='default'
        />
      </View>
    </View>
  );
};

export const SignInForm = withStyles(SignInFormComponent, (theme: ThemeType) => ({
  container: {},
  inputStyle: {
    backgroundColor: theme['background-basic-color-1'],
  },
  usernameInput: {
    marginTop: pxToPercentage(4),
  },
}));
