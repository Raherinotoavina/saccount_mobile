import {z} from 'zod';

const loginValidation = z.object({
    email: z
        .string({message: 'Adresse email requise'})
        .email({message: 'Adresse email invalide'}),
    password: z
        .string({message: 'Le mot de passe est requis'})
        .min(8, {message: 'Le mot de passe doit être exactement 8 caractères'}),
});

export default loginValidation;
