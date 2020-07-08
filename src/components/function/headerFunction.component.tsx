import React from 'react';
import {
    View,
    ViewProps,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import {
    ThemedComponentProps,
    ThemeType,
    withStyles,
} from '@kitten/theme';
import { Avatar } from '@kitten/ui';
import { textStyle } from '@src/components';
import { User } from '@src/core/models/user/user.model';
import { RemoteImage } from '@src/assets/images';
import { pxToPercentage } from '@src/core/utils/utils';
import {
    PhoneIcon,
    PersonIconFill,
} from '@src/assets/icons';

// interface ComponentProps {
//     onPressGobackIcon: () => void;
//     onPressEditUserIcon: () => void;
//     onPressQRcodeIcon: () => void;
//     onPressChatIcon: () => void;
//   }

export type FunctionProps = ThemedComponentProps & ViewProps;

const FunctionComponent: React.FunctionComponent<FunctionProps> = (props) => {
    const { style, themedStyle, ...restProps } = props;
    return (
        <View
            style={[themedStyle.container, style]}
            {...restProps}>
                <TouchableOpacity
                >
                <View style={{backgroundColor: 'red', height: 100, width: 100}}>
                {PhoneIcon}
                </View>
                </TouchableOpacity>

        </View>
    );
};

export const FunctionHeader = withStyles(FunctionComponent, (theme: ThemeType) => ({
    container: {
        flexDirection: 'row',
        borderBottomWidth: pxToPercentage(1),
        borderBottomColor: theme['border-basic-color-4'],
        height: pxToPercentage(30),
    },
}));
