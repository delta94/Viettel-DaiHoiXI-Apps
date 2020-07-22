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
    setState({ ...state, selectedTabIndex });
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
            <View style={themedStyle.viewTab}>
              {renderTabBtn(SignInTabEnum.Account, 'Tài khoản', PersonIcon2)}
              {renderTabBtn(SignInTabEnum.PhoneNumber, 'Số điện thoại', PhoneIcon)}
              {renderTabBtn(SignInTabEnum.QRCode, 'Mã QR', QRCodeIconOther)}
            </View>
            {isCheckTab(SignInTabEnum.Account) &&
              <SignInAccountFormTablet
                style={themedStyle.tabContentContainer}
                onDataChange={onAccountFormDataChange}
              />}
            {isCheckTab(SignInTabEnum.PhoneNumber) &&
              <SignInPhoneNumberFormTablet
                style={themedStyle.tabContentContainer}
                onDataChange={onPhoneNumberFormDataChange}
              />}
            {isCheckTab(SignInTabEnum.QRCode) && <SignInQRCodeFormTablet />}
            {isCheckTab(SignInTabEnum.Account) &&
              <Button
                title={'ĐĂNG NHẬP'}
                titleStyle={themedStyle.txtBtnSignIn}
                style={themedStyle.btnSignIn}
                onPress={onSignInButtonPress}
              />
            }
            {isCheckTab(SignInTabEnum.PhoneNumber) &&
              <Button
                title={'TIẾP THEO'}
                titleStyle={themedStyle.txtBtnSignIn}
                style={themedStyle.btnSignIn}
                onPress={onSignInButtonPress}
              />
            }
            {isCheckTab(SignInTabEnum.Account) &&
              (<React.Fragment>
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
              (<Text style={themedStyle.txtOtpNote}>
                {'Chúng tôi sẽ gửi một SMS chưa mã OTP\n đến số điện thoại này'}
              </Text>)}
            <View style={themedStyle.viewBottom}>
              <SwitchSetting />
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
  viewBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: pxToPercentage(20),
  },
  sectionBox: {
    height: '100%',
    width: pxToPercentage(860),
  },
  sectionHeader: {
    marginTop: pxToPercentage(120),
  },
  sectionTab: {
    flex: 1,
    borderBottomLeftRadius: pxToPercentage(40),
    borderBottomRightRadius: pxToPercentage(40),
  },
  tabContentContainer: {
    marginVertical: pxToPercentage(32),
    paddingHorizontal: pxToPercentage(32),
  },
  txtHeaderSubtitle: {
    fontSize: pxToPercentage(70),
    marginTop: pxToPercentage(7),
    color: theme['color-primary-2'],
    textAlign: 'center',
    ...textStyle.proTextRegular,
  },
  btnSignIn: {
    marginHorizontal: pxToPercentage(32),
    backgroundColor: theme['color-primary-0'],
    borderRadius: pxToPercentage(28),
    height: pxToPercentage(95),
  },
  txtBtnSignIn: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayBold,
    color: theme['color-primary-2'],
  },
  btnForgotPassword: {
    alignSelf: 'center',
    marginVertical: pxToPercentage(24),
  },
  txtBtnForgotPassword: {
    fontSize: pxToPercentage(34),
    color: theme['color-primary-2'],
    ...textStyle.proTextSemibold,
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
    ...textStyle.proTextSemibold,
  },
  txtOtpNote: {
    textAlign: 'center',
    marginTop: pxToPercentage(54),
    marginHorizontal: pxToPercentage(64),
    fontSize: pxToPercentage(28),
    ...textStyle.proTextRegular,
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
    justifyContent: 'center',
    alignItems: 'center',
    height: pxToPercentage(140),
    flex: 1,
    borderTopRightRadius: pxToPercentage(32),
    borderBottomRightRadius: pxToPercentage(32),
    borderColor: theme['color-primary-2'],
    borderRightWidth: pxToPercentage(2),
  },
  btnTabSelected: {
    backgroundColor: theme['color-primary-2'],
    borderRadius: pxToPercentage(32),
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
    height: pxToPercentage(140),
    marginVertical: pxToPercentage(48),
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: pxToPercentage(32),
    borderWidth: pxToPercentage(2),
    borderColor: theme['color-primary-2'],
  },
  iconMenu: {
    height: pxToPercentage(53.12),
    width: pxToPercentage(52),
    tintColor: theme['color-primary-2'],
  },
}));
