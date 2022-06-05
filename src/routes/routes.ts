import { DeleteUsuarioController } from './../modules/useCases/createUsuario/deleteUsuario/DeleteUsuarioController';
import { UpdateUsuarioController } from './../modules/useCases/createUsuario/updateUsuario/UpdateUsuarioController';
import { findAllUsuarioController } from './../modules/useCases/createUsuario/findMany/findManyUsuarioController';
import { AuthenticateUsuarioController } from '../modules/useCases/createUsuario/account/authenticateUsuario/AuthenticateUsuarioController';
import { Router } from "express";
import { CreateUsuarioController } from '../modules/useCases/createUsuario/CreateUsuarioController';
import { CreateClientController } from '../modules/useCases/createCliente/CreateClientController';
import { AuthenticateClientController } from '../modules/useCases/createCliente/authenticateClient/AuthenticateClientController';
import { fileURLToPath } from 'url';


const routes = Router();

const createUsuarioController = new CreateUsuarioController();
const authenticateUsuarioController = new AuthenticateUsuarioController();
const FindAllUsuarioController = new findAllUsuarioController();
const updateUsuarioController = new UpdateUsuarioController();
const deleteUsuarioController = new DeleteUsuarioController();

const authenticateClientController = new AuthenticateClientController();
const createClientController = new CreateClientController();






routes.put("/usuario/updateUsuario/:id", updateUsuarioController.handle);
routes.delete("/usuario/deleteUsuario/:id", deleteUsuarioController.handle)
routes.get ("/listAll", FindAllUsuarioController.handle);
routes.post("/authenticate", authenticateUsuarioController.handle);
routes.post("/usuario/", createUsuarioController.handle);


routes.post("/client/",createClientController.handle);
routes.post("/authenticate/client", authenticateClientController.handle)

export { routes };
