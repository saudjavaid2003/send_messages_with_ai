import {z} from "zod";

export const verifySchema=z.string().length(6,{message:"verification code must be of size 6 digits you rascal"})