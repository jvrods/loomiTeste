import { UpdateUsuarioController } from './../modules/useCases/createUsuario/updateUsuario/UpdateUsuarioController';
import { findAllUsuarioController } from './../modules/useCases/createUsuario/findMany/findManyUsuarioController';
import { AuthenticateUsuarioController } from '../modules/useCases/createUsuario/account/authenticateUsuario/AuthenticateUsuarioController';
import { Router } from "express";
import { CreateUsuarioController } from '../modules/useCases/createUsuario/CreateUsuarioController';
import { CreateClientController } from '../modules/useCases/createCliente/CreateClientController';
import { AuthenticateClientController } from '../modules/useCases/createCliente/authenticateClient/AuthenticateClientController';

const routes = Router();

const createUsuarioController = new CreateUsuarioController();
const authenticateUsuarioController = new AuthenticateUsuarioController();
const FindAllUsuarioController = new findAllUsuarioController();
const updateUsuarioController = new UpdateUsuarioController();

const authenticateClientController = new AuthenticateClientController();
const createClientController = new CreateClientController();






routes.put("/usuario/updateUsuario/:id", updateUsuarioController.handle);
routes.get ("/listAll", FindAllUsuarioController.handle);
routes.post("/authenticate", authenticateUsuarioController.handle);
routes.post("/usuario/", createUsuarioController.handle);


routes.post("/client/",createClientController.handle);
routes.post("/authenticate/client", authenticateClientController.handle)

export { routes };