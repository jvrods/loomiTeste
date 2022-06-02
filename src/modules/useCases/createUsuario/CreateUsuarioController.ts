import { Request, Response } from "express";
import { CreateUsuarioUseCase } from './CreateUsuarioUseCase';



export class CreateUsuarioController {
    async handle(request: Request, response: Response) {
        const { email, senha } = request.body;

        const createUsuarioUseCase = new CreateUsuarioUseCase();
        const result = await createUsuarioUseCase.execute({
            email,
            senha
        });

        //return response.json(result);
        return response.status(201).send({usuario:result})
    }
}