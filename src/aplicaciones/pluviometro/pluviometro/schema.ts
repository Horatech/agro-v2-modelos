import { IUbicacionV2 } from "../../../auxiliares";
import {
  ConfiguracionPluviometro,
  IAlerta,
  ICliente,
  IDispositivo,
  IEstablecimiento,
  IReporte,
  Semaforo,
} from "../../../generales";

export interface IPluviometro {
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
  configuraciones?: ConfiguracionPluviometro;
  radioInfluencia?: number;
  sensibilidad?: number;
  ubicacion?: IUbicacionV2 | null;
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
