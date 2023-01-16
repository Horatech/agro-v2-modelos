import { IUbicacionV2 } from '../../../auxiliares';
import {
  IAlerta,
  ICliente,
  IDispositivo,
  IEstablecimiento,
  IReporte,
  Semaforo,
} from '../../../generales';

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
  configuraciones?: {
    colorIcono: string | null;
    coloresNivel: Semaforo[] | null;
  };
  radioInfluencia?: number;
  ubicacion?: IUbicacionV2;
  //
  ultimaComunicacion?: string;
  ultimoEstado?: 'Ok' | 'Alerta';
  ultimaAlerta?: IAlerta;
  ultimoReporte?: IReporte;
  // Virtuals
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
  dispositivo?: IDispositivo;
}
