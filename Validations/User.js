import {z} from 'zod';

const UserSchema = z.object({
    clerkUserId: z.String().none
})