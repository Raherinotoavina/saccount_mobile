import {z} from 'zod';

const registerValidation = z.object({
    name: z
        .string({message: 'Votre nom est requis'})
        .min(1, {message: 'Votre nom est requis'}),
    email: z
        .string({message: 'Adresse email requise'})
        .email({message: 'Adresse email invalide'}),
    plainPassword: z.object({
        first: z
            .string({
                message: 'Le mot de passe est requis',
            })
            .min(8, {
                message: 'Le mot de passe doit être exactement 8 caractères',
            }),
    }),
});

export default registerValidation;
