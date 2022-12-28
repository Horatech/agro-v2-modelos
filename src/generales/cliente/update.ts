import { TipoDispositivo } from '../tipoDispositivo';
import { IImagenesCliente } from './imagenes';
import { Configuraciones } from './schema';

export interface IUpdateCliente {
  activo?: boolean;
  nombre?: string;
  tiposDispositivo?: TipoDispositivo[];
  imagenes?: IImagenesCliente;
  configuraciones?: Configuraciones;
}
