import { TipoDispositivo } from "../tipoDispositivo";
import { IImagenesCliente } from "./imagenes";

export interface ICreateCliente {
  nombre: string;
  tiposDispositivo?: TipoDispositivo[];
  imagenes?: IImagenesCliente;
}
