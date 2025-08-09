import { z } from "zod";
export const UserSchema = z.object({
    id: z.number(),
    email: z.string(),
    name: z.string(),
});

const UserCreateSchema = UserSchema.omit({ id: true });

export type UserSchemaType = z.infer<typeof UserSchema>;
export type UserCreateSchemaType = z.infer<typeof UserCreateSchema>;
