import {Controller} from 'react-hook-form';
import {Pressable, Text, TextInput, View} from 'react-native';
import {IInputProps} from '@/components/ui/Input/type/input.type.ts';
import {getBorderRadius} from '@/components/ui/Input/utils/input.util.ts';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

function ControlledTextInput({
    control,
    placeholder,
    label,
    required,
    className,
    name,
    radius,
    ...props
}: IInputProps) {
    const radiusClass = getBorderRadius(radius || '');

    const isPassword = props.textContentType === 'password';
    const [isSecure, setIsSecure] = useState(() => isPassword);

    function handleShow() {
        setIsSecure(!isSecure);
    }

    return (
        <Controller
            name={name}
            control={control}
            render={({fieldState: {error}, field, ...fields}) => {
                return (
                    <View className="w-full">
                        {label && (
                            <Text className="mb-1">
                                {label}
                                {required && (
                                    <Text className="text-red-500"> *</Text>
                                )}
                            </Text>
                        )}
                        <View
                            className={`flex flex-row items-center justify-between w-full h-12 max-h-12 bg-gray-200 px-3 ${
                                error?.message
                                    ? 'border border-danger text-danger'
                                    : ''
                            } ${radiusClass} ${className}`}>
                            <TextInput
                                {...props}
                                {...fields}
                                onChangeText={e => {
                                    field.onChange(e);
                                }}
                                placeholder={placeholder}
                                className={`${radiusClass} ${
                                    isPassword
                                        ? 'max-w-[95%] w-[95%] overflow-hidden'
                                        : 'w-full'
                                }`}
                                secureTextEntry={isSecure}
                            />
                            {isPassword && (
                                <Pressable onPress={handleShow}>
                                    <Icon
                                        name={
                                            isSecure
                                                ? 'eye-outline'
                                                : 'eye-off-outline'
                                        }
                                        size={15}
                                    />
                                </Pressable>
                            )}
                        </View>
                        {error?.message ? (
                            <Text className="text-danger text-sm">
                                {error.message}
                            </Text>
                        ) : (
                            <></>
                        )}
                    </View>
                );
            }}
        />
    );
}

export default ControlledTextInput;
