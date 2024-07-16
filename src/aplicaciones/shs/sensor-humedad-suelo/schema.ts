import { IUbicacionV2 } from "../../../auxiliares";
import {
  ConfiguracionHumedadSuelo,
  IAlerta,
  ICliente,
  IDispositivo,
  IEstablecimiento,
  IReporte,
  Semaforo,
} from "../../../generales";

export interface ISensorHumedadSuelo {
  _id?: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  //
  fechaCreacion?: string;
  deveui?: string;
  nombre?: string;
  modelo?: string;
  descripcion?: string;
  configuraciones?: ConfiguracionHumedadSuelo;
  ubicacion?: IUbicacionV2 | null;
  // profundidad en CM.
  profundidad?: number;
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
