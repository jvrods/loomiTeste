import { Request, Response } from "express";
import { CreateClientUseCase } from './CreateClientUseCase';



export class CreateClientController {
    async handle(request: Request, response: Response) {
        const { email, senha, nome_cliente, telefone, endereco } = request.body;
        const createClientUseCase = new CreateClientUseCase();
        const result = await createClientUseCase.execute({
            email,
            senha,
            nome_cliente,
            telefone,
            endereco
        });

        return response.status(201).send({client:result})
    }
}