import { UpdateUsuarioUseCase } from './UpdateUsuarioUseCase';
import { Request, Response } from "express";


export class UpdateUsuarioController{
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const updateUsuarioUsecase = new UpdateUsuarioUseCase();

        const usuario = await updateUsuarioUsecase.execute({
            id : 1,
            email : "novoEmail@email.com",
            senha : "123456"

        })

        return response.json(usuario)
    }
}