import React from 'react';
import { View } from 'react-native';
import {
    ThemedComponentProps,
    ThemeType,
    withStyles,
} from '@kitten/theme';
import {
    textStyle,
    ValidationInput,
} from '@src/components';
import { NameValidator } from '@src/core/validators';
import { pxToPercentage } from '@src/core/utils/utils';
import { SearchIconOutline } from '@src/assets/icons';

interface ComponentProps {
    onSearchTextChange: (type: number) => void;
}

export type DelegateGroupContentItemProps = ThemedComponentProps & ComponentProps;

const DelegateGroupContentItemComponent: React.FunctionComponent<DelegateGroupContentItemProps> = (props) => {
    const { themedStyle } = props;

    const onSearchTextChange = () => {
        props.onSearchTextChange;
    };

    return (
        <View
            style={[
                themedStyle.container,
            ]}>
            <ValidationInput
                style={themedStyle.inputSearch}
                textStyle={textStyle.regular}
                placeholder='Tìm kiếm'
                icon={SearchIconOutline}
                validator={NameValidator}
                onChangeText={onSearchTextChange}
            />
        </View>
    );
};

export const DelegateGroupSearchBar = withStyles(DelegateGroupContentItemComponent, (theme: ThemeType) => ({
    container: {
        marginHorizontal: pxToPercentage(8),
    },
    inputSearch: {
        borderRadius: pxToPercentage(16),
    },
}));
