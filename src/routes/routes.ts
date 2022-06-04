import { AuthenticateUsuarioController } from '../modules/useCases/createUsuario/account/authenticateUsuario/AuthenticateUsuarioController';
import { Router } from "express";
import { CreateUsuarioController } from '../modules/useCases/createUsuario/CreateUsuarioController';
import { CreateClientController } from '../modules/useCases/createCliente/CreateClientController';

const routes = Router();

const createUsuarioController = new CreateUsuarioController();

const authenticateUsuarioController = new AuthenticateUsuarioController();

const createClientController = new CreateClientController();

routes.post("/client/",createClientController.handle);

routes.post("/authenticate", authenticateUsuarioController.handle);

routes.post("/usuario/", createUsuarioController.handle);

export { routes };