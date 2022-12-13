import { TipoDispositivo } from "../tipoDispositivo";
import { IImagenesCliente } from "./imagenes";

export interface ICliente {
  _id: string;
  activo: boolean;
  fechaCreacion: string;
  nombre: string;
  tiposDispositivo: TipoDispositivo[];
  imagenes?: IImagenesCliente;
}
