import { IUbicacion } from '../../auxiliares';
import { ICliente } from '../cliente';
import { IEstablecimiento } from '../establecimiento';

export interface IAmbiente {
  _id: string;
  nombre: string;
  ubicacion?: IUbicacion[];
  idCliente: string;
  fechaCreacion: string;
  configuraciones?: { colorLinea: string | null; colorRelleno: string | null };
  region?: string;
  tipoSuelo?: string;
  cultivo?: string;
  faseCultivo?: string;

  //Populate
  establecimiento?: IEstablecimiento;
  cliente?: ICliente;
  sensores?: string[];
}
