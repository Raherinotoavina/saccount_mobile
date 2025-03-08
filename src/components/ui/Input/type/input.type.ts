import {Control, FieldValue} from 'react-hook-form';
import {TextInputProps} from 'react-native';

export interface IInputProps extends TextInputProps {
    control: Control<FieldValue<any>, any>;
    placeholder?: string;
    label?: string;
    required?: boolean;
    className?: string;
    radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
    name: string;
}
