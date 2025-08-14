import {z} from 'zod';

export const  usernameValidation=z.string()
.min(3, { message: 'Username must be at least 3 characters long' })
.max(100, { message: 'Username must be at most 100 characters long' })
.regex(/^[a-zA-Z0-9_]+$/, { message: 'Username must be alphanumeric and can include underscores' });

export const signUpValidation=z.object({
    username:usernameValidation,
    email:z.string().email({message:"invalid email"}),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' })
})