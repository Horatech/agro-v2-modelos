import { ICliente, IDispositivo, IEstablecimiento } from "../../../generales";

export interface IComedero {
  _id?: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  //
  nombre: string;
  idDispositivos: string[];
  // Virtuals
  dispositivos?: IDispositivo[];
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
}
