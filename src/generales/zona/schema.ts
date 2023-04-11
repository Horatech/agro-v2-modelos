import { IUbicacion } from '../../auxiliares';
import { ICliente } from '../cliente';
import { IEstablecimiento } from '../establecimiento';

export interface IZona {
  _id: string;
  nombre: string;
  ubicacion?: IUbicacion;
  idEstablecimiento: string;
  idCliente: string;
  configuraciones?: { colorLinea: string | null; colorRelleno: string | null };
  // Populate
  establecimiento?: IEstablecimiento;
  cliente?: ICliente;
}
