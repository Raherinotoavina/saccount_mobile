import {PressableProps} from 'react-native';
import {ReactNode} from 'react';

export enum EButtonType {
    PRIMARY,
    SECONDARY,
}

export interface TButtonProps extends PressableProps {
    label: string;
    leftSection?: ReactNode;
    rightSection?: ReactNode;
    type?: EButtonType;
}
