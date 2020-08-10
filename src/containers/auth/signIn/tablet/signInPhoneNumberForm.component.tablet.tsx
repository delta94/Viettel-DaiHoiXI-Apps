import React, {
  useState,
  useEffect,
} from 'react';
import {
  View,
  ViewProps,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  ValidationInput,
  textStyle,
} from '@src/components';
import { RefreshIconOther } from '@src/assets/icons';
import { StringValidator } from '@src/core/validators';
import { SignInPhoneNumberFormData } from '@src/core/models/auth/signIn/signIn.model';
import { usePrevious } from '@src/core/utils/hookHelper';
import {
  isEmpty,
  pxToPercentage,
  generateCaptcha,
} from '@src/core/utils/utils';

interface ComponentProps {
  onDataChange: (value: SignInPhoneNumberFormData | undefined) => void;
}

export type SignInPhoneNumberFormTabletProps = ThemedComponentProps & ViewProps & ComponentProps;

const SignInPhoneNumberFormTabletComponent: React.FunctionComponent<SignInPhoneNumberFormTabletProps> = (props) => {
  const [formData, setFormData] = useState<SignInPhoneNumberFormData>({
    phoneNumber: undefined,
    captcha: generateCaptcha(4),
    enterCaptcha: undefined,
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
    setFormData({ ...formData, phoneNumber: phone });
  };

  const isValid = (value: SignInPhoneNumberFormData): boolean => {
    return !isEmpty(value.phoneNumber) && !isEmpty(value.enterCaptcha);
  };

  const onEnterCaptChaTextChange = (enterCaptca: string) => {
    setFormData({ ...formData, enterCaptcha: enterCaptca });
  };

  const onCaptchaTextChange = (captcha: string) => {
    setFormData({ ...formData, captcha });
  };

  const onRefeshCaptcha = () => {
    setFormData({ ...formData, captcha: generateCaptcha(4) });
  };

  const { style, themedStyle, theme, ...restProps } = props;

  return (
    <View
      {...restProps}
      style={[themedStyle.container, style]}>
      <ValidationInput
        placeholder='Số điện thoại'
        validator={StringValidator}
        onChangeText={onUsernameInputTextChange}
        keyboardType='phone-pad'
        value={formData.phoneNumber}
        maxLength={12}
      />
      <View style={themedStyle.viewCaptcha}>
        <ValidationInput
          viewContainerStyle={themedStyle.viewInputVerification}
          placeholder='Mã xác nhận'
          validator={StringValidator}
          onChangeText={onEnterCaptChaTextChange}
          value={formData.enterCaptcha}
          maxLength={4}
        />
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={onRefeshCaptcha}
          style={themedStyle.btnCaptcha}>
          <TextInput
            style={themedStyle.viewInput}
            value={formData.captcha}
            editable={false}
            onChangeText={onCaptchaTextChange}
          />
          {RefreshIconOther(themedStyle.iconRefresh)}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const SignInPhoneNumberFormTablet = withStyles(SignInPhoneNumberFormTabletComponent, (theme: ThemeType) => ({
  container: {
  },
  viewCaptcha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: pxToPercentage(13),
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
    right: pxToPercentage(20),
    width: pxToPercentage(40),
    height: pxToPercentage(40),
  },
  viewInput: {
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
}));
