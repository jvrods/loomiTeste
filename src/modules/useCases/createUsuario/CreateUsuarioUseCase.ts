import { IUsuario } from './../../../interfaces/ICreateUser';
import { hashSenha } from './../../../utils/hash';
import { prisma } from "../../../database/prismaClient";



export class CreateUsuarioUseCase {

    async execute({ email, senha }: IUsuario) {

        const senhaCript = await hashSenha(senha)

        const usuarioExiste = await prisma.usuario.findFirst({
            where: {
                email: email
            }
        })

        if (usuarioExiste) {
            throw new Error("Usuário existe")
        }


        const usuario = await prisma.usuario.create({
            data: {
                email,
                senha: senhaCript,
            },
        });

        return {id:usuario.id,email:usuario.email};
    }
}