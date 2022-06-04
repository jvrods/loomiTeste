import { IUsuario } from './../../../../../interfaces/ICreateUser';
import { prisma } from "../../../../../database/prismaClient"
import { sign } from "jsonwebtoken"
import { compare } from "bcrypt";
import "dotenv/config"


export class AuthenticateUsuarioUseCase {
    async execute({ email, senha }: IUsuario) {

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

        const token = sign({ email }, `${process.env.SECRET_KEY}`, {
            subject: email,
            expiresIn: "1d",
        });

        return token

    }
}