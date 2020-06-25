import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  Tab,
  TabView,
} from '@kitten/ui';
import {
  ScrollableAvoidKeyboard,
  textStyle,
} from '@src/components';
import { imageNationalEmblem } from '@src/assets/images';
import {
  SignInAccountFormData,
  SignInPhoneNumberFormData,
} from '@src/core/models/auth/signIn/signIn.model';
import { SignInAccountForm } from './signInAccountForm.component';
import { SignInPhoneNumberForm } from './signInPhoneNumberForm.component';
import { pxToPercentage } from '@src/core/utils/utils';
import {
  FingerprintIcon,
  FaceIDIcon,
} from '@src/assets/icons';
import { IconElement } from '@src/assets/icons/icon.component';
import { SignInTabEnum } from '@src/core/utils/constants';
import { isTablet } from 'react-native-device-info';

interface ComponentProps {
  onSignInAccountPress: (formData: SignInAccountFormData) => void;
  onSignInPhoneNumberPress: (formData: SignInPhoneNumberFormData) => void;
  onForgotPasswordPress: () => void;
}

export type SignInProps = ThemedComponentProps & ComponentProps;

interface State {
  selectedTabIndex: number;
  accountFormData: SignInAccountFormData;
  phoneNumberFormData: SignInPhoneNumberFormData;
}

const SignInComponent: React.FunctionComponent<SignInProps> = (props) => {
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

  const isAccountTab = (): boolean => {
    return state.selectedTabIndex === SignInTabEnum.Account;
  };

  const { themedStyle } = props;

  const renderRecognizeIcon = (): IconElement => {
    return true ? FingerprintIcon(themedStyle.iconFingerprint) : FaceIDIcon(themedStyle.iconFaceID);
  };

  return (
    <ScrollableAvoidKeyboard>
      <View style={themedStyle.container}>
        <View style={themedStyle.sectionHeader}>
          <Text style={themedStyle.txtHeaderTitle}>
            {'ĐẠI HỘI XI'}
          </Text>
          <Text style={themedStyle.txtHeaderSubtitle}>
            {'ĐẢNG BỘ TP HỒ CHÍ MINH'}
          </Text>
          <Image
            source={imageNationalEmblem.imageSource}
            style={themedStyle.imgNationalEmblem}
          />
        </View>
        <TabView
          style={themedStyle.tabView}
          tabBarStyle={themedStyle.tabBar}
          indicatorStyle={themedStyle.tabViewIndicator}
          selectedIndex={state.selectedTabIndex}
          onSelect={onTabSelect}>
          <Tab
            title='Tài khoản'
            titleStyle={themedStyle.tabTitle}>
            <SignInAccountForm
              style={themedStyle.tabContentContainer}
              onDataChange={onAccountFormDataChange}
            />
          </Tab>
          <Tab
            title='Số điện thoại'
            titleStyle={themedStyle.tabTitle}>
            <View>
              <SignInPhoneNumberForm
                style={themedStyle.tabContentContainer}
                onDataChange={onPhoneNumberFormDataChange}
              />
            </View>
          </Tab>
        </TabView>
        <Button
          size={isTablet() ? 'giant' : 'large'}
          style={themedStyle.btnSignIn}
          onPress={onSignInButtonPress}>
          {isAccountTab() ? 'Đăng nhập' : 'Tiếp theo'}
        </Button>
        {isAccountTab() &&
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
        {!isAccountTab() &&
          (<Text style={themedStyle.txtOtpNote}>
            {'Chúng tôi sẽ gửi một SMS chưa mã OTP đến số điện thoại này'}
          </Text>)}
      </View>
    </ScrollableAvoidKeyboard>
  );
};

export const SignIn = withStyles(SignInComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-custom-100'],
  },
  sectionHeader: {
    minHeight: isTablet() ? pxToPercentage(160) : pxToPercentage(255),
    paddingHorizontal: pxToPercentage(16),
    paddingBottom: isTablet() ? pxToPercentage(10) : pxToPercentage(15),
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: theme['color-primary-default'],
  },
  tabContentContainer: {
    marginVertical: pxToPercentage(16),
    paddingHorizontal: pxToPercentage(16),
  },
  tabView: {
  },
  tabBar: {
    backgroundColor: theme['color-primary-default'],
  },
  tabViewIndicator: {
    backgroundColor: theme['color-control-focus-border'],
  },
  tabTitle: {
    color: 'white',
    ...textStyle.bold,
  },
  imgNationalEmblem: {
    marginTop: pxToPercentage(8.5),
    height: pxToPercentage(isTablet() ? 65 : 107.5),
    width: pxToPercentage(isTablet() ? 65 : 107.5) * (512 / 384),
  },
  txtHeaderTitle: {
    fontSize: isTablet() ? pxToPercentage(18) : pxToPercentage(27.5),
    fontFamily: 'opensans-bold',
    color: theme['color-primary-default-2'],
  },
  txtHeaderSubtitle: {
    fontSize: isTablet() ? pxToPercentage(11) : pxToPercentage(17.5),
    marginTop: isTablet() ? pxToPercentage(4) : pxToPercentage(7),
    color: theme['color-primary-default-2'],
  },
  btnSignIn: {
    marginHorizontal: pxToPercentage(16),
  },
  btnForgotPassword: {
    alignSelf: 'center',
    marginVertical: pxToPercentage(12),
  },
  txtBtnForgotPassword: {
    fontSize: isTablet() ? pxToPercentage(9) : pxToPercentage(14),
    color: theme['color-primary-default'],
    ...textStyle.semibold,
  },
  btnRecognize: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: pxToPercentage(10),
  },
  txtBtnRecognize: {
    marginTop: pxToPercentage(10),
    fontSize: isTablet() ? pxToPercentage(9) : pxToPercentage(14),
    color: theme['color-primary-default'],
    ...textStyle.semibold,
  },
  txtOtpNote: {
    textAlign: 'center',
    marginTop: pxToPercentage(10),
    marginHorizontal: pxToPercentage(32),
    fontSize: isTablet() ? pxToPercentage(9) : pxToPercentage(14),
    color: theme['text-hint-color'],
    ...textStyle.regular,
  },
  iconFingerprint: {
    height: pxToPercentage(isTablet() ? 27.5 : 40),
    width: pxToPercentage(isTablet() ? 27.5 : 40) * (65 / 72),
    tintColor: theme['color-primary-default'],
  },
  iconFaceID: {
    height: pxToPercentage(isTablet() ? 27.5 : 40),
    width: pxToPercentage(isTablet() ? 27.5 : 40),
    tintColor: theme['color-primary-default'],
  },
}));
