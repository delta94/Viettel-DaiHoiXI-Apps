import React, { useState } from 'react';
import {
  View,
  Text,
  ViewStyle,
  TouchableOpacity,
  ImageBackground,
  StyleProp,
  ImageProps,
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
import { imageBackGroundSignInPhone } from '@src/assets/images';
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
  PhoneIcon,
} from '@src/assets/icons';
import { IconElement } from '@src/assets/icons/icon.component';
import { SignInTabEnum } from '@src/core/utils/constants';
import { Button } from '@src/components/button/button.component';
import { SwitchSetting } from '@src/components/switch/switchSetting.component';
import { SignInQRCodeForm } from './sigInQRcodeForm.component';

interface ComponentProps {
  onSignInAccountPress: (formData: SignInAccountFormData) => void;
  onSignInPhoneNumberPress: (formData: SignInPhoneNumberFormData) => void;
  onForgotPasswordPress: () => void;
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
      case SignInTabEnum.Account:
        props.onSignInAccountPress(formValue as SignInAccountFormData);
        break;
      case SignInTabEnum.PhoneNumber:
        props.onSignInPhoneNumberPress(formValue as SignInPhoneNumberFormData);
        break;
    }
  };

  const isCheckTab = (tabIndex: number): boolean => {
    return state.selectedTabIndex === tabIndex;
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
        style={[getBtnStyle(selectedTabIndex),
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
    <ScrollableAvoidKeyboard>
      <ImageBackground
        resizeMode='stretch'
        source={imageBackGroundSignInPhone.imageSource}
        style={themedStyle.container}>
        <View style={themedStyle.sectionHeader}>
          <Text style={themedStyle.txtHeaderTitle}>
            {'ĐẠI HỘI XI'}
          </Text>
          <Text style={themedStyle.txtHeaderSubtitle}>
            {'ĐẢNG BỘ THÀNH PHỐ\n HỒ CHÍ MINH'}
          </Text>
        </View>
        <View style={themedStyle.viewTab}>
          {renderTabBtn(SignInTabEnum.Account, 'Tài khoản', PersonIcon2)}
          {renderTabBtn(SignInTabEnum.PhoneNumber, 'Số điện\nthoại', PhoneIcon)}
          {renderTabBtn(SignInTabEnum.QRCode, 'Mã\nQR', QRCodeIconOther)}
        </View>
        {isCheckTab(SignInTabEnum.Account) &&
          <View>
            <SignInAccountForm
              style={themedStyle.tabContentContainer}
              onDataChange={onAccountFormDataChange}
            />
            <Button
              title={'ĐĂNG NHẬP'}
              titleStyle={themedStyle.txtBtnSignIn}
              style={themedStyle.btnSignIn}
              onPress={onSignInButtonPress} />
            <React.Fragment>
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
            </React.Fragment>
          </View>
        }
        {isCheckTab(SignInTabEnum.PhoneNumber) &&
          <View>
            <SignInPhoneNumberForm
              style={themedStyle.tabContentContainer}
              onDataChange={onPhoneNumberFormDataChange}
            />
            <Button
              title={'TIẾP THEO'}
              titleStyle={themedStyle.txtBtnSignIn}
              style={themedStyle.btnSignIn}
              onPress={onSignInButtonPress} />
            <Text style={themedStyle.txtOtpNote}>
              {'Điền đoạn mã OTP đã được gửi đến\nsố +84 941219915\nThời gian hiệu lực 3:10'}
            </Text>
          </View>}
        {isCheckTab(SignInTabEnum.QRCode) &&
          <SignInQRCodeForm />}
        <View style={themedStyle.viewFotter}>
          <SwitchSetting />
        </View>
      </ImageBackground>
    </ScrollableAvoidKeyboard>
  );
};

export const SignIn = withStyles(SignInComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-custom-100'],
  },
  sectionHeader: {
    justifyContent: 'flex-end',
    marginTop: pxToPercentage(160),
    marginRight: pxToPercentage(13.5),
  },
  tabContentContainer: {
    marginVertical: pxToPercentage(16),
    paddingHorizontal: pxToPercentage(16),
  },
  txtHeaderTitle: {
    fontSize: pxToPercentage(27.5),
    color: theme['color-primary-2'],
    ...textStyle.proTextRegular,
    textAlign: 'right',
  },
  txtHeaderSubtitle: {
    fontSize: pxToPercentage(17.5),
    marginTop: pxToPercentage(7),
    color: theme['color-primary-2'],
    ...textStyle.proTextRegular,
    textAlign: 'right',
  },
  btnSignIn: {
    marginHorizontal: pxToPercentage(16),
    backgroundColor: theme['color-primary-0'],
    height: pxToPercentage(48),
    borderRadius: pxToPercentage(16),
  },
  btnForgotPassword: {
    alignSelf: 'center',
    marginVertical: pxToPercentage(12),
  },
  txtBtnSignIn: {
    fontSize: pxToPercentage(18),
    ...textStyle.proDisplayRegular,
  },
  txtBtnForgotPassword: {
    fontSize: pxToPercentage(18),
    color: theme['color-primary-2'],
    ...textStyle.proTextRegular,
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
    ...textStyle.proTextRegular,
  },
  txtOtpNote: {
    textAlign: 'center',
    marginTop: pxToPercentage(11),
    marginHorizontal: pxToPercentage(42),
    fontSize: pxToPercentage(16),
    ...textStyle.proTextRegular,
  },
  iconFingerprint: {
    height: pxToPercentage(47.91),
    width: pxToPercentage(47.92),
    tintColor: theme['color-primary-2'],
  },
  iconFaceID: {
    height: pxToPercentage(47.91),
    width: pxToPercentage(47.92),
    tintColor: theme['color-primary-2'],
  },
  viewTab: {
    height: pxToPercentage(48),
    marginHorizontal: pxToPercentage(12),
    marginVertical: pxToPercentage(14),
    flexDirection: 'row',
    borderRadius: pxToPercentage(16),
    borderWidth: pxToPercentage(1),
    borderColor: theme['color-primary-2'],
  },
  iconMenu: {
    height: pxToPercentage(28),
    width: pxToPercentage(27),
    tintColor: theme['color-primary-2'],
  },
  txtBtnTabSelected: {
    color: theme['color-custom-100'],
  },
  iconSelected: {
    tintColor: theme['color-custom-100'],
  },
  btnTabSelected: {
    backgroundColor: theme['color-primary-2'],
    borderRadius: pxToPercentage(16),
  },
  txtBtnTab: {
    fontSize: pxToPercentage(17),
    color: theme['color-primary-2'],
    marginLeft: pxToPercentage(8),
  },
  btnTab: {
    justifyContent: 'center',
    alignItems: 'center',
    height: pxToPercentage(48),
    borderTopRightRadius: pxToPercentage(16),
    borderBottomRightRadius: pxToPercentage(16),
    borderColor: theme['color-primary-2'],
    borderRightWidth: pxToPercentage(1),
    flexDirection: 'row',
  },
  btnAccount: {
    width: pxToPercentage(138),
  },
  btnPhoneTab: {
    width: pxToPercentage(114),
  },
  btnQRcodeTab: {
    flex: 1,
  },
  btnTabNoBorder: {
    borderRightWidth: 0,
  },
  viewFotter: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: pxToPercentage(20),
  },
}));
