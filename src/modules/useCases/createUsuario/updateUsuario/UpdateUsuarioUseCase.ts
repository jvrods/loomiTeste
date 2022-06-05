import { prisma } from "../../../../database/prismaClient"


interface IUpdateUsuarioUseCase{
    id: number;
    email: string;
    senha: string
}

export class UpdateUsuarioUseCase {
    async execute({id,email}: IUpdateUsuarioUseCase) {
        const result = await prisma.usuario.update({
            where: {
                id: id,
            },
            data:{
                email,
            },
        });
        return result;
    }
}