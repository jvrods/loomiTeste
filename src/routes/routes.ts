import { findAllUsuarioController } from './../modules/useCases/createUsuario/findMany/findManyUsuarioController';
import { AuthenticateUsuarioController } from '../modules/useCases/createUsuario/account/authenticateUsuario/AuthenticateUsuarioController';
import { Router } from "express";
import { CreateUsuarioController } from '../modules/useCases/createUsuario/CreateUsuarioController';
import { CreateClientController } from '../modules/useCases/createCliente/CreateClientController';
import { AuthenticateClientController } from '../modules/useCases/createCliente/authenticateClient/AuthenticateClientController';

const routes = Router();

const createUsuarioController = new CreateUsuarioController();

const authenticateUsuarioController = new AuthenticateUsuarioController();

const authenticateClientController = new AuthenticateClientController();

const createClientController = new CreateClientController();

const FindAllUsuarioController = new findAllUsuarioController();

routes.get ("/listAll", FindAllUsuarioController.handle);

routes.post("/client/",createClientController.handle);

routes.post("/authenticate/client", authenticateClientController.handle)

routes.post("/authenticate", authenticateUsuarioController.handle);

routes.post("/usuario/", createUsuarioController.handle);

export { routes };