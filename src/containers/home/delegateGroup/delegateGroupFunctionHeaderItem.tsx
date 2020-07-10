import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import {
    ThemedComponentProps,
    ThemeType,
    withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';

interface ComponentProps {
    delegateGroups: number;
}

export type DelegateGroupFunctionHeaderItemProps = ThemedComponentProps & ComponentProps;

const DelegateGroupFunctionHeaderItemComponent: React.FunctionComponent<DelegateGroupFunctionHeaderItemProps> = (props) => {
    const { themedStyle, delegateGroups } = props;

    return (
        <View
            style={themedStyle.container}>
            <Text style={themedStyle.txtDelegateGroup}>{`Tổ ${delegateGroups}`}</Text>
        </View>
    );
};

export const DelegateGroupFunctionHeaderItem = withStyles(DelegateGroupFunctionHeaderItemComponent, (theme: ThemeType) => ({
    container: {
        borderWidth: pxToPercentage(1),
        borderColor: theme['border-basic-color-4'],
        width: pxToPercentage(30),
        justifyContent: 'center',
        height: pxToPercentage(45),
        marginVertical: pxToPercentage(8),
        flex: 1,
    },
    txtDelegateGroup: {
        fontSize: pxToPercentage(16),
        textAlign: 'center',
    },
}));
