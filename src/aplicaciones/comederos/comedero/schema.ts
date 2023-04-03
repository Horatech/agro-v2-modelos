import {
  Color,
  ICliente,
  IDispositivo,
  IEstablecimiento,
  Semaforo,
} from "../../../generales";

export interface IComedero {
  _id?: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  configuraciones?: {
    colorIcono?: string | null;
    colorError?: string | null;
    coloresNivel?: Semaforo[] | null;
  };
  //
  nombre: string;
  idDispositivos: string[];
  // Virtuals
  dispositivos?: IDispositivo[];
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
}
