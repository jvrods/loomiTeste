import { prisma } from "../../../../database/prismaClient"


interface IDeleteUsuarioUseCase{
    id: number;
    email: string;
    senha: string
}

export class DeleteUsuarioUseCase {
    async execute({id}: IDeleteUsuarioUseCase) {
        const result = await prisma.usuario.delete({
            where: {
                id: id,
            },
            select:{
                email:true,
                senha:true
            },
        });
        return result;
    }
}