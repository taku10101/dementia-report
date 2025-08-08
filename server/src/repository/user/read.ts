import { PrismaClient } from "@prisma/client/edge";

const prisma = new PrismaClient();

export const getUserById = async (id: number) => {
    const user = await prisma.user.findUnique({
        where: { id },
    });
    return user;
};


export const getUserByEmail = async (email: string) => {
    const user = await prisma.user.findFirst({
        where: { email },
    });
    return user;
};

