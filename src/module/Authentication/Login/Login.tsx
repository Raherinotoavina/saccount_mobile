import {Pressable, Text, View} from 'react-native';
import ControlledTextInput from '@/components/ui/Input/ControlledTextInput.tsx';
import {useForm} from 'react-hook-form';
import Button from '@/components/ui/Button/Button.tsx';
import Icon from 'react-native-vector-icons/Ionicons';
import {zodResolver} from '@hookform/resolvers/zod';
import loginValidation from '@/module/Authentication/Login/validation/login.zod.ts';

function Login() {
    const form = useForm({
        resolver: zodResolver(loginValidation),
        mode: 'onChange',
    });

    const {control, handleSubmit: onSubmit} = form;

    function handleSubmit() {
        onSubmit(
            value => {
                console.log(value);
            },
            e => {
                console.log(e);
            },
        )();
    }

    return (
        <View className="flex flex-1 mx-6 gap-4 items-center justify-center">
            <ControlledTextInput
                name="email"
                control={control}
                placeholder="Entrer votre adresse email"
                label="Adresse email"
                radius="lg"
                textContentType="emailAddress"
                required
            />
            <View className="w-full">
                <ControlledTextInput
                    name="password"
                    control={control}
                    placeholder="Entrer votre mot de passe"
                    label="Mot de passe"
                    radius="lg"
                    textContentType="password"
                    required
                />
                <Pressable className="self-end">
                    <Text className="text-primary font-medium">
                        Mot de passe oublier ?
                    </Text>
                </Pressable>
            </View>
            <Button
                label="se connecter"
                onPress={() => {
                    handleSubmit();
                }}
                leftSection={
                    <Icon name="exit-outline" color="white" size={20} />
                }
            />
        </View>
    );
}

export default Login;
