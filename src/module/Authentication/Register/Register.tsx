import {View} from 'react-native';
import ControlledTextInput from '@/components/ui/Input/ControlledTextInput.tsx';
import Button from '@/components/ui/Button/Button.tsx';
import Icon from 'react-native-vector-icons/Ionicons';
import {useForm} from 'react-hook-form';
import {TUser} from '@/types/user/user.type.ts';
import {zodResolver} from '@hookform/resolvers/zod';
import registerValidation from '@/module/Authentication/Register/validation/register.zod.ts';

function Register() {
    const form = useForm<TUser>({
        resolver: zodResolver(registerValidation),
        mode: 'onChange',
    });

    const {control, handleSubmit: onSubmit} = form;

    function handleSubmit() {
        onSubmit(
            value => {
                console.log(value);
            },
            err => {
                console.log(err);
            },
        )();
    }

    return (
        <View className="flex flex-1 mx-6 gap-4 items-center justify-center">
            <ControlledTextInput
                name="name"
                control={control}
                placeholder="Entrer votre nom"
                label="Nom"
                radius="lg"
                textContentType="familyName"
                required
            />
            <ControlledTextInput
                name="firstName"
                control={control}
                placeholder="Entrer votre prénom(s)"
                label="Prénom(s)"
                radius="lg"
                textContentType="username"
            />
            <ControlledTextInput
                name="email"
                control={control}
                placeholder="Entrer votre adresse email"
                label="Adresse email"
                radius="lg"
                textContentType="emailAddress"
                required
            />
            <ControlledTextInput
                name="plainPassword.first"
                control={control}
                placeholder="Entrer votre mot de passe"
                label="Mot de passe"
                radius="lg"
                textContentType="password"
                required
            />
            <ControlledTextInput
                name="plainPassword.second"
                control={control}
                placeholder="Confirmer votre mot de passe"
                label="Mot de passe"
                radius="lg"
                textContentType="password"
                required
            />
            <Button
                label="se connecter"
                onPress={handleSubmit}
                leftSection={
                    <Icon name="exit-outline" color="white" size={20} />
                }
            />
        </View>
    );
}

export default Register;
