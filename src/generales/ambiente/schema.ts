import { IUbicacion } from '../../auxiliares';
import { ICliente } from '../cliente';

export interface IAmbiente {
  _id: string;
  nombre: string;
  ubicacion?: IUbicacion[];
  idCliente: string;
  fechaCreacion: string;
  configuraciones?: { colorLinea: string | null; colorRelleno: string | null };
  cliente?: ICliente;
}
