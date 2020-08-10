import React, { useState } from 'react';
import {
  View,
  Text,
  ViewStyle,
  TouchableOpacity,
  ImageBackground,
  StyleProp,
  ImageProps,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  StyleType,
} from '@kitten/theme';
import {
  ScrollableAvoidKeyboard,
  textStyle,
} from '@src/components';
import {
  imageBgPhone,
  imageFlag,
} from '@src/assets/images';
import {
  SignInAccountFormData,
  SignInPhoneNumberFormData,
} from '@src/core/models/auth/signIn/signIn.model';
import { SignInAccountForm } from './signInAccountForm.component';
import { SignInPhoneNumberForm } from './signInPhoneNumberForm.component';
import { pxToPercentage } from '@src/core/utils/utils';
import {
  FingerprintIconOther,
  FaceIDIconOther,
  QRCodeIconOther,
  PersonIcon2,
} from '@src/assets/icons';
import { IconElement } from '@src/assets/icons/icon.component';
import { SignInTabEnum } from '@src/core/utils/constants';
import { Button } from '@src/components/button/button.component';
import { SwitchSetting } from '@src/components/switch/switchSetting.component';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { toasts } from '@src/core/utils/toasts';

interface ComponentProps {
  isPrivateInternet: boolean;
  onSignInAccountPress: (formData: SignInAccountFormData) => void;
  onSignInPhoneNumberPress: (formData: SignInPhoneNumberFormData) => void;
  onForgotPasswordPress: () => void;
  onSwitchInternetPress: () => void;
  onSigInQRCodePress: () => void;
  onRecognizePress: () => void;
}

export type SignInProps = ThemedComponentProps & ComponentProps;

type IconProp = (style: StyleType) => React.ReactElement<ImageProps>;

interface State {
  selectedTabIndex: number;
  accountFormData: SignInAccountFormData;
  phoneNumberFormData: SignInPhoneNumberFormData;
}

const SignInComponent: React.FunctionComponent<SignInProps> = (props) => {
  const { themedStyle } = props;
  const [state, setState] = useState<State>({
    selectedTabIndex: SignInTabEnum.Account,
    accountFormData: undefined,
    phoneNumberFormData: undefined,
  });

  const onSignInButtonPress = () => {
    const { selectedTabIndex } = state;

    const formValue: SignInAccountFormData | SignInPhoneNumberFormData = getSelectedFormData();

    switch (selectedTabIndex) {
      case SignInTabEnum.Account: {
        const accountFormData = formValue as SignInAccountFormData;

        if (accountFormData) {
          if (accountFormData.password.length < 8) {
            toasts.error('Mật khẩu phải có ít nhất 8 ký tự!');
          } else {
            props.onSignInAccountPress(accountFormData);
          }
        } else {
          toasts.error('Thông tin không được trống!');
        }

        break;
      }
      case SignInTabEnum.PhoneNumber: {
        const phoneNumberFormData = formValue as SignInPhoneNumberFormData;

        if (phoneNumberFormData) {
          if (phoneNumberFormData.phoneNumber.length < 9 || phoneNumberFormData.phoneNumber.length > 11) {
            toasts.error('Số điện thoại không hợp lệ!');
            return;
          }

          if (phoneNumberFormData.enterCaptcha !== phoneNumberFormData.captcha) {
            toasts.error('Mã xác nhận không chính xác!');
            return;
          }

          props.onSignInPhoneNumberPress(phoneNumberFormData);
        } else {
          toasts.error('Thông tin không được trống!');
        }

        break;
      }
    }
  };

  const onRecognizeButtonPress = (): void => {
    props.onRecognizePress();
  };

  const isCheckTab = (tabIndex: number): boolean => {
    return state.selectedTabIndex === tabIndex;
  };

  const onForgotPasswordButtonPress = () => {
    props.onForgotPasswordPress();
  };

  const onSwitchInternetPress = () => {
    onTabSelect(!props.isPrivateInternet ? SignInTabEnum.Account : SignInTabEnum.PhoneNumber);
    return props.onSwitchInternetPress();
  };

  const onTabSelect = (selectedTabIndex: number) => {
    if (selectedTabIndex === SignInTabEnum.QRCode) {
      return props.onSigInQRCodePress();
    } else {
      setState({ ...state, selectedTabIndex });
    }
  };

  const onAccountFormDataChange = (accountFormData: SignInAccountFormData | undefined) => {
    setState({ ...state, accountFormData });
  };

  const onPhoneNumberFormDataChange = (phoneNumberFormData: SignInPhoneNumberFormData | undefined) => {
    setState({ ...state, phoneNumberFormData });
  };

  const getBtnStyle = (tabIndex: number): StyleProp<ViewStyle> => {
    const btnDateStyle = [themedStyle.btnTab];
    const { selectedTabIndex } = state;

    if (selectedTabIndex === tabIndex) {
      btnDateStyle.push(themedStyle.btnTabSelected);
    }

    if (selectedTabIndex === tabIndex + 1 || tabIndex === 2) {
      btnDateStyle.push(themedStyle.btnTabNoBorder);
    }

    return btnDateStyle;
  };


  const getSelectedFormData = (): SignInAccountFormData | SignInPhoneNumberFormData => {
    const { selectedTabIndex, accountFormData, phoneNumberFormData } = state;

    switch (selectedTabIndex) {
      case SignInTabEnum.Account:
        return accountFormData;
      case SignInTabEnum.PhoneNumber:
        return phoneNumberFormData;
    }
  };

  const renderRecognizeIcon = (): IconElement => {
    return true ? FingerprintIconOther(themedStyle.iconFingerprint) : FaceIDIconOther(themedStyle.iconFaceID);
  };

  const renderTabBtn = (selectedTabIndex: number, title: string, icon: IconProp): React.ReactElement => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        style={[
          getBtnStyle(selectedTabIndex),
          selectedTabIndex === SignInTabEnum.Account && themedStyle.btnAccount,
          selectedTabIndex === SignInTabEnum.PhoneNumber && themedStyle.btnPhoneTab,
          selectedTabIndex === SignInTabEnum.QRCode && themedStyle.btnQRcodeTab,
        ]}
        onPress={() => onTabSelect(selectedTabIndex)}>
        {icon([
          themedStyle.iconMenu,
          state.selectedTabIndex === selectedTabIndex && themedStyle.iconSelected,
        ])}
        <Text
          style={[
            themedStyle.txtBtnTab,
            state.selectedTabIndex === selectedTabIndex && themedStyle.txtBtnTabSelected,
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollableAvoidKeyboard
      keyboardShouldPersistTaps={'always'}
      style={themedStyle.scrollView}>
      <View style={themedStyle.viewStatusBar} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={imageBgPhone.imageSource}
          style={themedStyle.container}>
          <Image
            source={imageFlag.imageSource}
            style={themedStyle.imgFlag}
          />
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={themedStyle.sectionHeader}>
              <Text style={themedStyle.txtHeaderTitle}>
                {'ĐẠI HỘI XI'}
              </Text>
              <Text style={themedStyle.txtHeaderSubtitle}>
                {'ĐẢNG BỘ THÀNH PHỐ\n HỒ CHÍ MINH'}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          {props.isPrivateInternet &&
            <View style={themedStyle.viewTab}>
              {renderTabBtn(SignInTabEnum.Account, 'Tài khoản', PersonIcon2)}
              {renderTabBtn(SignInTabEnum.QRCode, 'Mã QR', QRCodeIconOther)}
            </View>}
          {isCheckTab(SignInTabEnum.Account) &&
            (<React.Fragment>
              <SignInAccountForm
                style={themedStyle.sectionForm}
                onDataChange={onAccountFormDataChange}
              />
              <Button
                title={'ĐĂNG NHẬP'}
                style={themedStyle.btnSignIn}
                onPress={onSignInButtonPress} />
              <TouchableOpacity
                activeOpacity={0.75}
                style={themedStyle.btnForgotPassword}
                onPress={onForgotPasswordButtonPress}>
                <Text style={themedStyle.txtBtnForgotPassword}>
                  {'Quên mật khẩu?'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.75}
                style={themedStyle.btnRecognize}
                onPress={onRecognizeButtonPress}>
                {renderRecognizeIcon()}
                <Text style={themedStyle.txtBtnRecognize}>
                  {'Đăng nhập bằng vân tay'}
                </Text>
              </TouchableOpacity>
            </React.Fragment>)}
          {isCheckTab(SignInTabEnum.PhoneNumber) &&
            (<React.Fragment>
              <SignInPhoneNumberForm
                style={themedStyle.sectionFormPhoneNumber}
                onDataChange={onPhoneNumberFormDataChange}
              />
              <Button
                title={'TIẾP THEO'}
                style={themedStyle.btnSignIn}
                onPress={onSignInButtonPress}
              />
              <Text style={themedStyle.txtOtpNote}>
                {'Chúng tôi sẽ gửi một SMS chứa mã OTP đến số điện thoại này'}
              </Text>
            </React.Fragment>)}
          <View style={themedStyle.viewFooter}>
            <SwitchSetting
              isPrivateIntenet={props.isPrivateInternet}
              onSwichInternetPress={onSwitchInternetPress}
            />
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </ScrollableAvoidKeyboard>
  );
};

export const SignIn = withStyles(SignInComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: pxToPercentage(16),
  },
  viewStatusBar: {
    height: getStatusBarHeight(false),
    backgroundColor: theme['color-primary-2'],
  },
  sectionHeader: {
    marginTop: pxToPercentage(65),
  },
  sectionForm: {
    marginTop: pxToPercentage(7.5),
  },
  sectionFormPhoneNumber: {
    marginTop: pxToPercentage(13),
  },
  imgFlag: {
    position: 'absolute',
    width: pxToPercentage(300),
    height: pxToPercentage(300) * (901 / 1854),
  },
  txtHeaderTitle: {
    fontSize: pxToPercentage(32),
    color: theme['color-primary-2'],
    ...textStyle.proDisplayBold,
    textAlign: 'right',
  },
  txtHeaderSubtitle: {
    fontSize: pxToPercentage(24),
    marginTop: pxToPercentage(7),
    color: theme['color-primary-2'],
    ...textStyle.proDisplayBold,
    textAlign: 'right',
  },
  viewTab: {
    marginTop: pxToPercentage(14),
    flexDirection: 'row',
    borderRadius: pxToPercentage(16),
    borderWidth: pxToPercentage(1),
    borderColor: theme['color-primary-2'],
  },
  btnSignIn: {
    marginTop: pxToPercentage(15),
  },
  btnForgotPassword: {
    alignSelf: 'center',
    marginVertical: pxToPercentage(12),
  },
  txtBtnForgotPassword: {
    fontSize: pxToPercentage(18),
    color: theme['color-primary-2'],
    ...textStyle.proDisplayBold,
  },
  btnRecognize: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: pxToPercentage(10),
  },
  txtBtnRecognize: {
    marginTop: pxToPercentage(10),
    fontSize: pxToPercentage(18),
    color: theme['color-primary-2'],
    ...textStyle.proDisplayBold,
  },
  txtOtpNote: {
    textAlign: 'center',
    marginTop: pxToPercentage(11),
    fontSize: pxToPercentage(18),
    ...textStyle.proDisplayRegular,
  },
  iconFingerprint: {
    height: pxToPercentage(40),
    width: pxToPercentage(40),
    tintColor: theme['color-primary-2'],
  },
  iconFaceID: {
    height: pxToPercentage(40),
    width: pxToPercentage(40),
    tintColor: theme['color-primary-2'],
  },
  iconMenu: {
    height: pxToPercentage(28),
    width: pxToPercentage(27),
    tintColor: theme['color-primary-2'],
  },
  txtBtnTab: {
    textAlign: 'center',
    fontSize: pxToPercentage(16),
    color: theme['color-primary-2'],
    marginLeft: pxToPercentage(5),
    ...textStyle.proDisplayBold,
  },
  txtBtnTabSelected: {
    textAlign: 'center',
    color: theme['color-custom-100'],
  },
  iconSelected: {
    tintColor: theme['color-custom-100'],
  },
  btnTab: {
    justifyContent: 'center',
    alignItems: 'center',
    height: pxToPercentage(46),
    borderRadius: pxToPercentage(15),
    borderColor: theme['color-primary-2'],
    borderRightWidth: pxToPercentage(1),
    flexDirection: 'row',
  },
  btnTabSelected: {
    backgroundColor: theme['color-primary-2'],
    borderRadius: pxToPercentage(15),
  },
  btnAccount: {
    flex: 1,
  },
  btnPhoneTab: {
    flex: 1,
  },
  btnQRcodeTab: {
    flex: 1,
  },
  btnTabNoBorder: {
    borderRightWidth: 0,
  },
  viewFooter: {
    flex: 1,
    minHeight: pxToPercentage(100),
    justifyContent: 'flex-end',
    paddingBottom: pxToPercentage(20),
  },
}));
