import { PrismaClient } from "@prisma/client/edge";
import { UserCreateSchemaType } from "../../domain/type/user";

const prisma = new PrismaClient();

export const createUser = async (user: UserCreateSchemaType) => {
    const newUser = await prisma.user.create({
        data: user,
    });
    return newUser;
};
