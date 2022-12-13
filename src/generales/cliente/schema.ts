import { TipoDispositivo } from "../tipoDispositivo";
import { IImagenesCliente } from "./imagenes";
import { IAPIkey } from "../apiKey/schema";

export interface ICliente {
  _id: string;
  activo: boolean;
  fechaCreacion: string;
  nombre: string;
  tiposDispositivo: TipoDispositivo[];
  imagenes?: IImagenesCliente;
  key: IAPIkey[];
}
