import { ICliente } from './../../../interfaces/ICreateUser';
import { hashSenha } from './../../../utils/hash';
import { prisma } from "../../../database/prismaClient";


export class CreateClientUseCase {

    async execute({ email, senha, nome_cliente, telefone,endereco }: ICliente) {

        const senhaCript = await hashSenha(senha)

        const clienteExiste = await prisma.cliente.findFirst({
            where: {
                email: email
            }
        })

        if (clienteExiste) {
            throw new Error("Cliente já existe")
        }


        const cliente = await prisma.cliente.create({
            data: {
                email,
                senha: senhaCript,
                nome_cliente,
                telefone,
                endereco
            },
        });

        return {id:cliente.id, email:cliente.email, nome_cliente:cliente.nome_cliente, telefone:cliente.telefone, endereco:cliente.endereco};
    }
}