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
    LogoutIcon,
    UserIconOutline,
    QRCodeIconFill,
    EmailIconFill,
} from '@src/assets/icons';
import { textStyle } from '../textStyle';

interface ComponentProps {
    onPressBackIcon: () => void;
}

export type FunctionProps = ThemedComponentProps & ViewProps & ComponentProps;

const FunctionComponent: React.FunctionComponent<FunctionProps> = (props) => {

    const { style, themedStyle, ...restProps } = props;

    return (
        <View
            style={[themedStyle.container, style]}
            {...restProps}>
            <TouchableOpacity style={themedStyle.btn}
                activeOpacity={0.75}
                onPress={props.onPressBackIcon}
            >
                {LogoutIcon(themedStyle.icon)}
                <Text style={themedStyle.txtButton}>
                    {'Thoát'}
                </Text>
            </TouchableOpacity>
            <View style={themedStyle.viewSession}>
                <TouchableOpacity
                    style={themedStyle.btn}
                    activeOpacity={0.75}
                >
                    {UserIconOutline(themedStyle.icon)}
                    <Text style={themedStyle.txtButton}>
                        {'Chỉnh sửa \nthông tin cá nhân'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={themedStyle.btn}
                    activeOpacity={0.75}
                >
                    {QRCodeIconFill(themedStyle.icon)}
                    <Text style={themedStyle.txtButton}>
                        {'Quét mã'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={themedStyle.btn}
                    activeOpacity={0.75}
                >
                    {EmailIconFill(themedStyle.icon)}
                    <Text style={themedStyle.txtButton}>
                        {'Trò chuyện'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export const FunctionHeader = withStyles(FunctionComponent, (theme: ThemeType) => ({
    container: {
        flexDirection: 'row',
        height: pxToPercentage(40), // h 54
        alignItems: 'center',
        marginTop: pxToPercentage(10),
    },
    btn: {
        flexDirection: 'row',
        width: pxToPercentage(120), // w 128
        height: pxToPercentage(44), // h 50
        justifyContent: 'center',
        backgroundColor: '#B4211A',
        alignItems: 'center',
        marginHorizontal: pxToPercentage(12),
        borderRadius: pxToPercentage(30),

    },
    icon: {
        width: pxToPercentage(24), // w 27
        height: pxToPercentage(24), // w 27
        tintColor: theme['border-basic-color-4'],
    },
    txtButton: {
        fontSize: pxToPercentage(10), // font size 20
        marginHorizontal: pxToPercentage(6),
        color: theme['border-basic-color-4'],
        ...textStyle.regular,
    },
    viewSession: {
        marginLeft: pxToPercentage(100),
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: 1,
    },

}));
