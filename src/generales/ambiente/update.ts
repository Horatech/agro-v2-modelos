import { IUbicacion } from '../../auxiliares';

export interface IUpdateAmbiente {
  nombre?: string;
  ubicacion?: IUbicacion[];
  configuraciones?: { colorLinea: string | null; colorRelleno: string | null };
  region?: string;
  tipoSuelo?: string;
  cultivo?: string;
  faseCultivo?: string;
  sensores?: string[];
}
