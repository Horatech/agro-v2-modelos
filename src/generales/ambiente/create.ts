import { IUbicacion } from '../../auxiliares';
import { ISensorRef } from './sensorRef/schema';

export interface ICreateAmbiente {
  nombre: string;
  ubicacion?: IUbicacion[];
  idCliente?: string;
  configuraciones?: { colorLinea: string | null; colorRelleno: string | null };
  region?: string;
  tipoSuelo?: string;
  cultivo?: string;
  faseCultivo?: string;
  idEstablecimiento: string;
  sensores: ISensorRef[];
}
