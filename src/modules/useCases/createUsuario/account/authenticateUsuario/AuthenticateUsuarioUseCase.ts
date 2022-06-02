import { prisma } from "../../../../../database/prismaClient"
import { sign } from "jsonwebtoken"
import { compare } from "bcrypt";

interface IAutheticateUsuario {
    email: string;
    senha: string;
}

export class AuthenticateUsuarioUseCase {
    async execute({ email, senha }: IAutheticateUsuario) {

        const usuario = await prisma.usuario.findFirst({
            where: {
                email
            }
        })

        if (!usuario) {
            throw new Error("Email ou senha invalida!")
        }

        const senhaMatch = await compare(senha, usuario.senha);

        if (!senhaMatch) {
            throw new Error("Email ou senha invalida!")
        }

        const token = sign({ email }, "e8d95a51f3af4a3b134bf6bb680a213a", {
            subject: email,
            expiresIn: "1d",
        });

        return token


    }
}