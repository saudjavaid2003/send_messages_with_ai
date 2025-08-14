import {z} from "zod";

export const messageSchema=z.object({
    content:z.string().min(10,{message:"message content must be at least 10 characters long"}).max(50,{message:"message content must be at most 50 characters long"}),
})