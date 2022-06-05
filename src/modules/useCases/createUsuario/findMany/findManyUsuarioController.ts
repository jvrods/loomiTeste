import { Request, Response } from 'express';
import { FindAllUsuarioUseCase } from './findManyUsuarioUseCase';

export class findAllUsuarioController{
    async handle(request: Request, response: Response) {
        const findAllUsuarioUseCasa = new FindAllUsuarioUseCase();

        const usuarios = await findAllUsuarioUseCasa.execute();

        response.json(usuarios)
        
    }
}