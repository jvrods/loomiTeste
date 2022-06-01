import { prisma } from "../../../database/prismaClient";
import { hash } from "bcrypt"

interface ICreateUsuario {
    email: string;
    senha: string;
}

export class CreateUsuarioUseCase {

    async execute({ email, senha }: ICreateUsuario) {

        const userExist = await prisma.usuario.findFirst({
            where: {
                email: {
                    mode: "insensitive"
                }
            }
        })

        if (userExist) {
            throw new Error("Usuário existe")
        }

        const hashSenha = await hash(senha, 10);

        const usuario = await prisma.usuario.create({
            data: {
                email,
                senha: hashSenha,
            },
        });

        return usuario;
    }
}