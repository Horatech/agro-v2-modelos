import {
  Color,
  ICliente,
  IDispositivo,
  IEstablecimiento,
} from '../../../generales';

export interface IComedero {
  _id?: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  configuraciones?: { colorIcono: string | null; coloresNivel: Color[] | null };
  //
  nombre: string;
  idDispositivos: string[];
  // Virtuals
  dispositivos?: IDispositivo[];
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
}
