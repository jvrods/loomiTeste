import { prisma } from "../../../database/prismaClient";
import { hash } from "bcrypt"

interface ICreateUsuario {
    email: string;
    senha: string;
}

export class CreateUsuarioUseCase {

    async execute({ email, senha }: ICreateUsuario) {

        const usuarioExiste = await prisma.usuario.findFirst({
            where: {
                email: email
            }
        })
        

        if (usuarioExiste) {
            throw new Error("Usuário existe")
        }


        const hashSenha = await hash(senha, 10);

        const usuario = await prisma.usuario.create({
            data: {
                email,
                senha: hashSenha,
            },
        });

        const novoUsuario = await prisma.usuario.findFirst({
            where: {
                email:email
            },
            select : {
                id : true,
                email: true,
                senha : false
            }
        })

        return novoUsuario;
    }
}