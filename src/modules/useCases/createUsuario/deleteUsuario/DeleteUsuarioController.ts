import { DeleteUsuarioUseCase } from './DeleteUsuarioUseCase';
import { Request, Response } from "express";


export class DeleteUsuarioController{
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const deleteUsuarioUsecase = new DeleteUsuarioUseCase();

        const usuario = await deleteUsuarioUsecase.execute({
            id: 1,
            email: "",
            senha: "",

        })

        return response.json(usuario)
    }
}