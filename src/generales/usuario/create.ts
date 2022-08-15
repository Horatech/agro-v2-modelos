import { IPermiso } from "./permiso";
import { IDatosPersonales } from "./schema";

export interface ICreateUsuario {
  username: string;
  password: string;
  hash?: string;
  permisos: IPermiso[];
  datosPersonales?: IDatosPersonales;
}
