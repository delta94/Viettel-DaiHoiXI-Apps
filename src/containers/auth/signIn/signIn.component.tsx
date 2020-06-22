import React, { useState } from 'react';
import {
  View,
  ViewProps,
  TouchableOpacity,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Button } from '@kitten/ui';
import { SignInForm } from './signInForm.component';
import {
  textStyle,
  ScrollableAvoidKeyboard,
} from '@src/components';
import { SignInFormData } from '@src/core/models/auth/signIn/signIn.model';
import {
  imageBackground1,
} from '@src/assets/images';
import { pxToPercentage } from '@src/core/utils/utils';
import { averageHW } from '@src/core/utils/utils';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import I18n from '@src/assets/i18n';

interface ComponentProps {
  onSignInPress: (formData: SignInFormData) => void;
  onForgotPasswordPress: () => void;
}

export type SignInProps = ThemedComponentProps & ComponentProps & ViewProps;

const SignInComponent: React.FunctionComponent<SignInProps> = (props) => {
  const [formData, setFormData] = useState<SignInFormData | undefined>(undefined);

  const onSignInButtonPress = () => {
    props.onSignInPress(formData);
  };

  const onForgotPasswordButtonPress = () => {
    props.onForgotPasswordPress();
  };

  const onFormDataChange = (formDataParam: SignInFormData) => {
    setFormData(formDataParam);
  };

  const { themedStyle } = props;

  return (
    <ImageBackground
      source={imageBackground1.imageSource}
      style={themedStyle.container}>
      <StatusBar backgroundColor='transparent' />
      <ScrollableAvoidKeyboard
        showsVerticalScrollIndicator={false}>
        <View style={themedStyle.sectionLogo}>
          {/* <Image
            source={imageLogo.imageSource}
            style={themedStyle.imgLogo} /> */}
        </View>
        <SignInForm
          style={themedStyle.sectionForm}
          onForgotPasswordPress={onForgotPasswordButtonPress}
          onDataChange={onFormDataChange}
        />
        <Button
          size='large'
          style={themedStyle.btnSignIn}
          textStyle={themedStyle.txtBtnSignIn}
          disabled={!formData}
          onPress={onSignInButtonPress}>
          {I18n.t('signIn.signInBtn')}
        </Button>
        <TouchableOpacity
          activeOpacity={0.75}
          style={themedStyle.btnForgotPassword}
          onPress={onForgotPasswordButtonPress}>
          <Text style={themedStyle.txtBtnForgotPassword}>
            {I18n.t('signIn.forgotYourPassword')}
          </Text>
        </TouchableOpacity>
      </ScrollableAvoidKeyboard>
    </ImageBackground>
  );
};

export const SignIn = withStyles(SignInComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-1'],
    paddingHorizontal: pxToPercentage(10),
    paddingBottom: heightPercentageToDP(12.5),
  },
  sectionLogo: {
    flex: 1,
    minHeight: heightPercentageToDP(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionForm: {
  },
  imgLogo: {
    width: averageHW(25),
    height: averageHW(25),
  },
  btnSignIn: {
    marginTop: pxToPercentage(15),
  },
  txtBtnSignIn: {
    fontSize: pxToPercentage(13),
    ...textStyle.proTextRegular,
  },
  btnForgotPassword: {
    marginTop: pxToPercentage(17.5),
  },
  txtBtnForgotPassword: {
    alignSelf: 'center',
    fontSize: pxToPercentage(15),
    color: theme['text-primary-color'],
    ...textStyle.proTextSemibold,
  },
}));
