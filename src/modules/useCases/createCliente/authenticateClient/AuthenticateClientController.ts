import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";



export class AuthenticateClientController {
    async handle(request: Request, response: Response) {
        const { email, senha, nome_cliente, telefone, endereco } = request.body;

        const authenticateClientUseCase = new AuthenticateClientUseCase();
        const result = await authenticateClientUseCase.execute({
            email,
            senha,
            nome_cliente,
            telefone,
            endereco
        });

        return response.status(200).send({ message: `usuário ${email} logado`, token: result })

    }
}