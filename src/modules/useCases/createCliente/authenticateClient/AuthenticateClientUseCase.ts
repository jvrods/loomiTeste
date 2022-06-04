import { ICliente } from '../../../../interfaces/ICreateUser';
import { prisma } from '../../../../database/prismaClient';
import { sign } from "jsonwebtoken"
import { compare } from "bcrypt";
import "dotenv/config"


export class AuthenticateClientUseCase {
    async execute({ email, senha }: ICliente) {

        const cliente = await prisma.cliente.findFirst({
            where: {
                email
            }
        })

        if (!cliente) {
            throw new Error("Email ou senha invalida!")
        }

        const senhaMatch = await compare(senha, cliente.senha);

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