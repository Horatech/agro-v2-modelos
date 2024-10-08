import {
  ConfiguracionComederos,
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
  configuraciones?: ConfiguracionComederos;
  cicloAlimentacion?: {
    comienzo: string;
    final: string;
  };
  //
  nombre: string;
  idDispositivos: string[];
  // Virtuals
  dispositivos?: IDispositivo[];
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
}
