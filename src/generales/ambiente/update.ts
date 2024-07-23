import { IUbicacion } from '../../auxiliares';
import { ISensorRef } from './sensorRef/schema';

export interface IUpdateAmbiente {
  nombre?: string;
  ubicacion?: IUbicacion[];
  configuraciones?: { colorLinea: string | null; colorRelleno: string | null };
  region?: string;
  tipoSuelo?: string;
  cultivo?: string;
  faseCultivo?: string;
  sensores: ISensorRef[];
}
