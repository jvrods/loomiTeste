import { Request, Response } from "express";
import { AuthenticateUsuarioUseCase } from "./AuthenticateUsuarioUseCase";



export class AuthenticateUsuarioController {
    async handle(request: Request, response: Response) {
        const { email, senha } = request.body;

        const authenticateUsuarioUseCase = new AuthenticateUsuarioUseCase();
        const result = await authenticateUsuarioUseCase.execute({
            email,
            senha,
        });

        return response.json(result);
    }
}