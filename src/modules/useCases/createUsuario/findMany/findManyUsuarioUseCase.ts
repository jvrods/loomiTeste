import { prisma } from "../../../../database/prismaClient"


export class FindAllUsuarioUseCase{
    async execute() {
        const usuarios = await prisma.usuario.findMany ({})
    return usuarios
    }
}