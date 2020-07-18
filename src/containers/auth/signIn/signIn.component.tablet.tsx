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
import { viewStyle } from '@src/components/viewStyle';

interface ComponentProps {
  onSignInAccountPress: (formData: SignInAccountFormData) => void;
  onSignInPhoneNumberPress: (formData: SignInPhoneNumberFormData) => void;
  onForgotPasswordPress: () => void;
}

export type SignInTabletProps = ThemedComponentProps & ComponentProps;

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
        <View style={themedStyle.sectionBox}>
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
          <View style={themedStyle.sectionTab}>
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
                <SignInPhoneNumberForm
                  style={themedStyle.tabContentContainer}
                  onDataChange={onPhoneNumberFormDataChange}
                />
              </Tab>
            </TabView>
            <Button
              size={'large'}
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
        </View>
      </View>
    </ScrollableAvoidKeyboard>
  );
};

export const SignInTablet = withStyles(SignInTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme['color-primary-2'],
  },
  sectionBox: {
    width: pxToPercentage(900),
    height: pxToPercentage(1200),
    backgroundColor: theme['color-primary-0'],
    borderRadius: pxToPercentage(40),
    ...viewStyle.shadow1,
  },
  sectionHeader: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    minHeight: pxToPercentage(400),
    paddingHorizontal: pxToPercentage(16),
    borderTopLeftRadius: pxToPercentage(40),
    borderTopRightRadius: pxToPercentage(40),
    backgroundColor: theme['color-primary-0'],
  },
  sectionTab: {
    flex: 1,
    borderBottomLeftRadius: pxToPercentage(40),
    borderBottomRightRadius: pxToPercentage(40),
    backgroundColor: theme['color-custom-100'],
  },
  tabContentContainer: {
    marginVertical: pxToPercentage(32),
    paddingHorizontal: pxToPercentage(32),
  },
  tabView: {
  },
  tabBar: {
    height: pxToPercentage(100),
    backgroundColor: theme['color-primary-0'],
  },
  tabViewIndicator: {
    backgroundColor: theme['color-control-focus-border'],
  },
  tabTitle: {
    color: theme['color-primary-2'],
    ...textStyle.proTextBold,
  },
  imgNationalEmblem: {
    marginTop: pxToPercentage(20),
    height: pxToPercentage(225),
    width: pxToPercentage(225) * (153 / 103),
  },
  txtHeaderTitle: {
    fontSize: pxToPercentage(55),
    color: theme['color-primary-2'],
    ...textStyle.proTextRegular,
  },
  txtHeaderSubtitle: {
    fontSize: pxToPercentage(35),
    marginTop: pxToPercentage(7),
    color: theme['color-primary-2'],
    ...textStyle.proTextRegular,
  },
  btnSignIn: {
    marginHorizontal: pxToPercentage(32),
    backgroundColor: theme['color-primary-2'],
  },
  btnForgotPassword: {
    alignSelf: 'center',
    marginVertical: pxToPercentage(24),
  },
  txtBtnForgotPassword: {
    fontSize: pxToPercentage(28),
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
    fontSize: pxToPercentage(28),
    color: theme['color-primary-2'],
    ...textStyle.proTextRegular,
  },
  txtOtpNote: {
    textAlign: 'center',
    marginTop: pxToPercentage(20),
    marginHorizontal: pxToPercentage(64),
    fontSize: pxToPercentage(28),
    color: theme['text-hint-color'],
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
}));
