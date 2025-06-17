import { TipoDispositivo } from "../tipoDispositivo";
import { Configuraciones } from "./config";
import { IImagenesCliente } from "./imagenes";
import { IIntegracion } from "./integraciones";

export interface ICliente {
  _id: string;
  activo: boolean;
  fechaCreacion: string;
  nombre: string;
  tiposDispositivo: TipoDispositivo[];
  imagenes?: IImagenesCliente;
  configuraciones?: Configuraciones;
  integraciones?: IIntegracion[];
  apikeyChaman?: string;
}
