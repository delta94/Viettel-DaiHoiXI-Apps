import React from 'react';
import {
    View,
    ViewProps,
    Text,
    Image,
} from 'react-native';
import {
    ThemedComponentProps,
    ThemeType,
    withStyles,
} from '@kitten/theme';
import { textStyle } from '@src/components';
import { User } from '@src/core/models/user/user.model';
import { RemoteImage } from '@src/assets/images';
import { pxToPercentage } from '@src/core/utils/utils';

interface ComponentProps {
    user: User;
}

export type ProfileInfoProps = ThemedComponentProps & ViewProps & ComponentProps;

const ProfileInfoV3Component: React.FunctionComponent<ProfileInfoProps> = (props) => {
    const { style, themedStyle, user, ...restProps } = props;

    return (
        <View
            style={themedStyle.container}
            {...restProps}>
            <View>
                <Image
                    style={themedStyle.avatar}
                    source={(new RemoteImage(user.avatar)).imageSource}
                />
                <Text style={themedStyle.txtDelegate}>
                    {'Đại biểu'}
                </Text>
            </View>
            <View style={themedStyle.sectionDetails}>
                <Text
                    numberOfLines={1}
                    style={themedStyle.txtName}>
                    {`Đồng chí ` + user.full_name}
                </Text>
                <Text
                    numberOfLines={2}
                    style={themedStyle.txtPosition}>
                    {user.position}
                </Text>
            </View>
        </View>
    );
};

export const ProfileInfoV3 = withStyles(ProfileInfoV3Component, (theme: ThemeType) => ({
    container: {
        flexDirection: 'row',
        backgroundColor: theme['color-primary-12'],
        borderTopLeftRadius: pxToPercentage(16),
        borderTopRightRadius: pxToPercentage(16),
        marginHorizontal: pxToPercentage(10),
        paddingVertical: pxToPercentage(10),
    },
    sectionDetails: {
        flex: 1,
        marginLeft: pxToPercentage(8),
    },
    txtName: {
        fontSize: pxToPercentage(18), // size 24
        ...textStyle.semibold,
        fontWeight: 'normal',
        color: theme['text-basic-color'],
    },
    txtPosition: {
        fontSize: pxToPercentage(14),
        ...textStyle.light,
        marginLeft: pxToPercentage(0),
        marginVertical: pxToPercentage(2),
        marginHorizontal: pxToPercentage(32),
    },
    avatar: {
        width: pxToPercentage(70), // width 96
        height: pxToPercentage(85), // height 128
        marginHorizontal: pxToPercentage(20),
        borderRadius: pxToPercentage(4),
    },
    txtDelegate: {
        paddingTop: pxToPercentage(4),
        textAlign: 'center',
        color: theme['color-primary-14'],
        fontSize: pxToPercentage(14),
    },
}));
