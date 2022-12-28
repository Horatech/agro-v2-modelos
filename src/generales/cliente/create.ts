import { TipoDispositivo } from '../tipoDispositivo';
import { IImagenesCliente } from './imagenes';
import { Configuraciones } from './schema';

export interface ICreateCliente {
  nombre: string;
  tiposDispositivo?: TipoDispositivo[];
  imagenes?: IImagenesCliente;
  configuraciones?: Configuraciones;
}
