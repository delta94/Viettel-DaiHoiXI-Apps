import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ImageProps,
  ViewStyle,
  StyleProp,
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
import { imageBackgroundSignIn } from '@src/assets/images';
import {
  SignInAccountFormData,
  SignInPhoneNumberFormData,
} from '@src/core/models/auth/signIn/signIn.model';
import { SignInAccountFormTablet } from './signInAccountForm.component.tablet';
import { SignInPhoneNumberFormTablet } from './signInPhoneNumberForm.component.tablet';
import { pxToPercentage } from '@src/core/utils/utils';
import {
  FingerprintIconOther,
  FaceIDIconOther,
  QRCodeIconOther,
  PersonIcon2,
  PhoneIcon,
} from '@src/assets/icons';
import { IconElement } from '@src/assets/icons/icon.component';
import { SignInTabEnum } from '@src/core/utils/constants';
import { Button } from '@src/components/button/button.component';
import { SignInQRCodeFormTablet } from './signInQRCodeForm.component.tablet';
import { SwitchSetting } from '@src/components/switch/switchSetting.component';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { getStatusBarHeight } from 'react-native-status-bar-height';

interface ComponentProps {
  onSignInAccountPress: (formData: SignInAccountFormData) => void;
  onSignInPhoneNumberPress: (formData: SignInPhoneNumberFormData) => void;
  onForgotPasswordPress: () => void;
  onSwichInternetPress: () => void;
  isPrivateIntenet: boolean;
  onSigInQRCodePress: () => void;
}

export type SignInTabletProps = ThemedComponentProps & ComponentProps;

type IconProp = (style: StyleType) => React.ReactElement<ImageProps>;

interface State {
  selectedTabIndex: number;
  accountFormData: SignInAccountFormData;
  phoneNumberFormData: SignInPhoneNumberFormData;
}

const SignInTabletComponent: React.FunctionComponent<SignInTabletProps> = (props) => {
  const [state, setState] = useState<State>({
    selectedTabIndex: SignInTabEnum.Account,
    accountFormData: undefined,
    phoneNumberFormData: undefined,
  });

  const onSignInButtonPress = () => {
    const { selectedTabIndex } = state;

    const formValue: SignInAccountFormData | SignInPhoneNumberFormData = getSelectedFormData();

    switch (selectedTabIndex) {
      case SignInTabEnum.Account:
        props.onSignInAccountPress(formValue as SignInAccountFormData);
        break;
      case SignInTabEnum.PhoneNumber:
        props.onSignInPhoneNumberPress(formValue as SignInPhoneNumberFormData);
        break;
    }
  };

  const onForgotPasswordButtonPress = () => {
    props.onForgotPasswordPress();
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

  const getSelectedFormData = (): SignInAccountFormData | SignInPhoneNumberFormData => {
    const { selectedTabIndex, accountFormData, phoneNumberFormData } = state;

    switch (selectedTabIndex) {
      case SignInTabEnum.Account:
        return accountFormData;
      case SignInTabEnum.PhoneNumber:
        return phoneNumberFormData;
    }
  };

  const isCheckTab = (tabIndex: number): boolean => {
    return state.selectedTabIndex === tabIndex;
  };

  const onSwichInternetPress = () => {
    onTabSelect(!props.isPrivateIntenet ? SignInTabEnum.Account : SignInTabEnum.PhoneNumber);
    return props.onSwichInternetPress();
  };

  const { themedStyle } = props;

  const renderRecognizeIcon = (): IconElement => {
    return true ? FingerprintIconOther(themedStyle.iconFingerprint) : FaceIDIconOther(themedStyle.iconFaceID);
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

  const renderTabBtn = (selectedTabIndex: number, title: string, icon: IconProp): React.ReactElement => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        style={getBtnStyle(selectedTabIndex)}
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
    <React.Fragment>
      <View style={themedStyle.viewStatusBar} />
      <ImageBackground
        source={imageBackgroundSignIn.imageSource}
        style={themedStyle.imgBg}>
        <ScrollableAvoidKeyboard
          style={themedStyle.container}
          contentContainerStyle={themedStyle.scrollViewContainer}>
          <View style={themedStyle.sectionBox}>
            <View style={themedStyle.sectionHeader}>
              <Text style={themedStyle.txtHeaderSubtitle}>
                {'ĐẢNG BỘ THÀNH PHỐ \nHỒ CHÍ MINH'}
              </Text>
            </View>
            {props.isPrivateIntenet &&
              <View style={themedStyle.viewTab}>
                {renderTabBtn(SignInTabEnum.Account, 'Tài khoản', PersonIcon2)}
                {renderTabBtn(SignInTabEnum.QRCode, 'Mã QR', QRCodeIconOther)}
              </View>}
            {isCheckTab(SignInTabEnum.Account) &&
              (<React.Fragment>
                <SignInAccountFormTablet
                  style={themedStyle.sectionForm}
                  onDataChange={onAccountFormDataChange}
                />
                <Button
                  title={'ĐĂNG NHẬP'}
                  style={themedStyle.btnSignIn}
                  onPress={onSignInButtonPress}
                />
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
                  style={themedStyle.btnRecognize}>
                  {renderRecognizeIcon()}
                  <Text style={themedStyle.txtBtnRecognize}>
                    {'Đăng nhập bằng vân tay'}
                  </Text>
                </TouchableOpacity>
              </React.Fragment>)}
            {isCheckTab(SignInTabEnum.PhoneNumber) &&
              (<React.Fragment>
                <View style={themedStyle.viewPhoneLogin}>
                  <View>
                  </View>
                </View>
                <SignInPhoneNumberFormTablet
                  style={themedStyle.sectionForm}
                  onDataChange={onPhoneNumberFormDataChange}
                />
                <Button
                  title={'TIẾP THEO'}
                  style={themedStyle.btnSignIn}
                  onPress={onSignInButtonPress}
                />
                <Text style={themedStyle.txtOtpNote}>
                  {'Chúng tôi sẽ gửi một SMS chưa mã OTP\n đến số điện thoại này'}
                </Text>
              </React.Fragment>)}
            {isCheckTab(SignInTabEnum.QRCode) && <SignInQRCodeFormTablet />}
            <View style={themedStyle.viewFooter}>
              <SwitchSetting
                isPrivateIntenet={props.isPrivateIntenet}
                onSwichInternetPress={onSwichInternetPress}
              />
            </View>
          </View>
        </ScrollableAvoidKeyboard>
      </ImageBackground>
    </React.Fragment>
  );
};

export const SignInTablet = withStyles(SignInTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
  imgBg: {
    flex: 1,
    alignItems: 'flex-end',
  },
  viewStatusBar: {
    height: getStatusBarHeight(false),
    backgroundColor: theme['color-primary-2'],
  },
  scrollViewContainer: {
    flex: 1,
    alignItems: 'flex-end',
    width: widthPercentageToDP(100),
    paddingRight: pxToPercentage(200),
  },
  viewFooter: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: pxToPercentage(20),
  },
  sectionBox: {
    height: '100%',
  },
  sectionHeader: {
    marginTop: pxToPercentage(120),
  },
  sectionForm: {
  },
  txtHeaderSubtitle: {
    textAlign: 'center',
    fontSize: pxToPercentage(70),
    marginTop: pxToPercentage(7),
    color: theme['color-primary-2'],
    ...textStyle.proDisplayBold,
  },
  btnSignIn: {
    marginTop: pxToPercentage(40),
  },
  btnForgotPassword: {
    alignSelf: 'center',
    marginBottom: pxToPercentage(24),
    marginTop: pxToPercentage(40),
  },
  txtBtnForgotPassword: {
    fontSize: pxToPercentage(34),
    color: theme['color-primary-2'],
    ...textStyle.proDisplayBold,
  },
  btnRecognize: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: pxToPercentage(20),
  },
  txtBtnRecognize: {
    marginTop: pxToPercentage(20),
    fontSize: pxToPercentage(34),
    color: theme['color-primary-2'],
    ...textStyle.proDisplayBold,
  },
  txtOtpNote: {
    textAlign: 'center',
    marginTop: pxToPercentage(40),
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
  iconFingerprint: {
    height: pxToPercentage(80),
    width: pxToPercentage(80) * (65 / 72),
    tintColor: theme['color-primary-2'],
  },
  iconFaceID: {
    height: pxToPercentage(80),
    width: pxToPercentage(80),
    tintColor: theme['color-primary-2'],
  },
  btnTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: pxToPercentage(140),
    borderRadius: pxToPercentage(30),
    borderColor: theme['color-primary-2'],
    borderRightWidth: pxToPercentage(2),
  },
  btnTabSelected: {
    backgroundColor: theme['color-primary-2'],
  },
  btnTabNoBorder: {
    borderRightWidth: 0,
  },
  txtBtnTab: {
    fontSize: pxToPercentage(34),
    marginTop: pxToPercentage(12),
    color: theme['color-primary-2'],
  },
  txtBtnTabSelected: {
    color: 'white',
  },
  iconSelected: {
    tintColor: 'white',
  },
  viewTab: {
    width: pxToPercentage(860),
    height: pxToPercentage(144),
    marginVertical: pxToPercentage(48),
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: pxToPercentage(32),
    borderWidth: pxToPercentage(2),
    borderColor: theme['color-primary-2'],
  },
  viewPhoneLogin: {
    width: pxToPercentage(860),
    height: pxToPercentage(144),
    marginVertical: pxToPercentage(48),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconMenu: {
    height: pxToPercentage(53.12),
    width: pxToPercentage(52),
    tintColor: theme['color-primary-2'],
  },
}));
