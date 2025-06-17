import { TipoDispositivo } from "../tipoDispositivo";
import { Configuraciones } from "./config";
import { IImagenesCliente } from "./imagenes";
import { IIntegracion } from "./integraciones";

export interface IUpdateCliente {
  activo?: boolean;
  nombre?: string;
  tiposDispositivo?: TipoDispositivo[];
  imagenes?: IImagenesCliente;
  configuraciones?: Configuraciones;
  integraciones?: IIntegracion[];
  apikeyChaman?: string;
}
