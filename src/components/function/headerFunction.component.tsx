import React from 'react';
import {
  View,
  ViewProps,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import {
  ExitIcon,
  EdituserIcon,
  QrIcon,
  ChatIcon,
} from '@src/assets/icons';
import { textStyle } from '../textStyle';

interface ComponentProps {
  onPressBackIcon: () => void;
}

export type HeaderFunctionProps = ThemedComponentProps & ViewProps & ComponentProps;

const FunctionComponent: React.FunctionComponent<HeaderFunctionProps> = (props) => {
  const { style, themedStyle, ...restProps } = props;

  return (
    <View
      style={[
        themedStyle.container,
        style,
      ]}
      {...restProps}>
      <TouchableOpacity style={[
        themedStyle.btn,
        themedStyle.btnExit,
      ]}
        activeOpacity={0.75}
        onPress={props.onPressBackIcon}>
        {ExitIcon(themedStyle.icon)}
        <Text style={themedStyle.txtButton}>
          {'Thoát'}
        </Text>
      </TouchableOpacity>
      <View style={themedStyle.viewSession}>
        <TouchableOpacity
          style={[
            themedStyle.btn,
            themedStyle.btnEditUser,
          ]}
          activeOpacity={0.75}>
          {EdituserIcon(themedStyle.icon)}
          <Text style={themedStyle.txtButton}>
            {'Chỉnh sửa \nthông tin cá nhân'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            themedStyle.btn,
            themedStyle.btnQr,
          ]}
          activeOpacity={0.75}>
          {QrIcon(themedStyle.icon)}
          <Text style={themedStyle.txtButton}>
            {'Quét mã'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            themedStyle.btn,
            themedStyle.btnchat,
          ]}
          activeOpacity={0.75}>
          {ChatIcon(themedStyle.icon)}
          <Text style={themedStyle.txtButton}>
            {'Trò chuyện'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const HeaderFunction = withStyles(FunctionComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    height: pxToPercentage(40), // h 54
    alignItems: 'center',
    marginTop: pxToPercentage(15),
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#B4211A',
    alignItems: 'center',
    marginHorizontal: pxToPercentage(12),
    borderRadius: pxToPercentage(30),
  },
  btnQr: {
    width: pxToPercentage(120), // w 150
    height: pxToPercentage(44), // h 54
  },
  btnExit: {
    width: pxToPercentage(100), // w 128
    height: pxToPercentage(44), // h 54
  },
  btnEditUser: {
    width: pxToPercentage(165), // w 226
    height: pxToPercentage(44), // h 54
  },
  btnchat: {
    width: pxToPercentage(125), // w 176
    height: pxToPercentage(44), // h 54
  },
  icon: {
    width: pxToPercentage(24), // w 27
    height: pxToPercentage(24), // w 27
    tintColor: theme['border-basic-color-4'],
    resizeMode: 'contain',
  },
  txtButton: {
    fontSize: pxToPercentage(13), // font size 20
    marginHorizontal: pxToPercentage(6),
    color: theme['border-basic-color-4'],
    ...textStyle.regular,
  },
  viewSession: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
  },
}));
