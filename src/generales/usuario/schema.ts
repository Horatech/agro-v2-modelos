import { IPermiso } from "./permiso";

export interface IDatosPersonales {
  nombre?: string;
  email?: string;
  [key: string]: string | undefined;
}

export interface IUsuario {
  _id: string;
  activo: boolean;
  fechaCreacion: string;
  username: string;
  hash?: string;
  permisos: IPermiso[];
  datosPersonales?: IDatosPersonales;
}
