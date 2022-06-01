import { Router } from "express";
import { CreateUsuarioController } from './modules/useCases/createUsuario/CreateUsuarioController';


const routes = Router();

const createUsuarioController = new CreateUsuarioController();

routes.post("/usuario/", createUsuarioController.handle);

export { routes };