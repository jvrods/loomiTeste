import { AuthenticateUsuarioController } from './modules/useCases/createUsuario/account/authenticateUsuario/AuthenticateUsuarioController';
import { Router } from "express";
import { CreateUsuarioController } from './modules/useCases/createUsuario/CreateUsuarioController';


const routes = Router();

const createUsuarioController = new CreateUsuarioController();

const authenticateUsuarioController = new AuthenticateUsuarioController();

routes.post("/authenticate", authenticateUsuarioController.handle);

routes.post("/usuario/", createUsuarioController.handle);

export { routes };