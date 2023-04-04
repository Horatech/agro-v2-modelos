import {
  ConfiguracionTracker,
  IAlerta,
  ICliente,
  IDispositivo,
  IEstablecimiento,
  IReporte,
} from "../../../generales";

export interface ITracker {
  _id?: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  //
  fechaCreacion?: string;
  deveui?: string;
  nombre?: string;
  modelo?: string;
  configuraciones?: ConfiguracionTracker;
  //
  ultimaComunicacion?: string;
  ultimoEstado?: "Ok" | "Alerta";
  ultimaAlerta?: IAlerta;
  ultimoReporte?: IReporte;
  // Virtuals
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
  dispositivo?: IDispositivo;
}
