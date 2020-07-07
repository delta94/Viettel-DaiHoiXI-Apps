import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import {
    ThemedComponentProps,
    ThemeType,
    withStyles,
} from '@kitten/theme';
import { textStyle } from '@src/components';
import {
    ArrowForwardIcon,
    ArrowIosBackFill,
} from '@src/assets/icons';
import { pxToPercentage } from '@src/core/utils/utils';
interface ComponentProps {
    meetingItemWeek: string;
    onPressNextWeek: () => void;
    onPressPrevWeek: () => void;
}

export type HomeMeetingWeekProps = ThemedComponentProps & ComponentProps;

const HomeMeetingWeekComponent: React.FunctionComponent<HomeMeetingWeekProps> = (props) => {
    const { themedStyle } = props;

    const onPressNextWeek = (): void => {
        props.onPressNextWeek();
    };

    const onPressPrevWeek = (): void => {
        props.onPressPrevWeek();
    };

    return (
        <View style={themedStyle.container}>
            <TouchableOpacity
                onPress={onPressPrevWeek}
                activeOpacity={0.75}
                style={themedStyle.buttonCicleView}>
                {ArrowIosBackFill(themedStyle.qrCodeicon)}
            </TouchableOpacity>
            <View style={themedStyle.centerView} >
                <View style={themedStyle.buttonWeek}>
                    <Text style={themedStyle.txtWeek}>
                        {'Tuần '}{props.meetingItemWeek}
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={onPressNextWeek}
                activeOpacity={0.75}
                style={themedStyle.buttonCicleView}>
                {ArrowForwardIcon(themedStyle.qrCodeicon)}
            </TouchableOpacity>
        </View>
    );
};

export const HomeMeetingWeek = withStyles(HomeMeetingWeekComponent, (theme: ThemeType) => ({
    container: {
        flexDirection: 'row',
        marginVertical: pxToPercentage(8),
        marginHorizontal: pxToPercentage(8),
        borderColor: theme['border-basic-color-4'],
        overflow: 'hidden',
        alignContent: 'space-between',
    },
    iconLogout: {
        width: pxToPercentage(20),
        height: pxToPercentage(20),
        tintColor: 'red',
    },
    buttonCicleView: {
        width: pxToPercentage(30),
        height: pxToPercentage(30),
        borderRadius: pxToPercentage(15),
        borderWidth: pxToPercentage(1),
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: theme['color-primary-default'],
    },
    qrCodeicon: {
        width: pxToPercentage(28),
        height: pxToPercentage(28),
        marginRight: pxToPercentage(6),
        marginLeft: pxToPercentage(6),
        tintColor: theme['color-primary-default'],
    },
    centerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: pxToPercentage(20),
    },
    buttonWeek: {
        width: pxToPercentage(120),
        height: pxToPercentage(28),
        borderRadius: pxToPercentage(14),
        borderWidth: pxToPercentage(1),
        justifyContent: 'center',
        borderColor: theme['color-primary-default'],
    },
    txtWeek: {
        fontsize: pxToPercentage(12),
        ...textStyle.semibold,
        textAlign: 'center',
        color: theme['color-primary-default'],
    },
}));
