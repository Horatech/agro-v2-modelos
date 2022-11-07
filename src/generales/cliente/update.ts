import { TipoDispositivo } from "../tipoDispositivo";
import { IImagenesCliente } from "./imagenes";

export interface IUpdateCliente {
  activo?: boolean;
  nombre?: string;
  tiposDispositivo?: TipoDispositivo[];
  imagenes?: IImagenesCliente;
}
