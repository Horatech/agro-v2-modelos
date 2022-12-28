import { IUbicacion } from '../../auxiliares';
import { ICliente } from '../cliente';
import { IEstablecimiento } from '../establecimiento';

export interface ILote {
  _id: string;
  nombre: string;
  ubicacion?: IUbicacion;
  idEstablecimiento: string;
  idCliente: string;
  configuraciones?: { colorLinea: string; colorRelleno: string };
  // Populate
  establecimiento?: IEstablecimiento;
  cliente?: ICliente;
}
