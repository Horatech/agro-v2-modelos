import { IUbicacionV2 } from '../../../auxiliares';
import {
  IAlerta,
  ICliente,
  IDispositivo,
  IEstablecimiento,
  ILote,
  IReporte,
} from '../../../generales';

export interface IEstacionMeteorologica {
  _id?: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
  //
  fechaCreacion?: string;
  deveui?: string;
  nombre?: string;
  descripcion?: string;
  modelo?: string;
  ubicacion?: IUbicacionV2;
  configuraciones?: {
    colorIcono: string | null;
    colorAlerta: string | null;
  };
  radioInfluencia?: number | null;

  //
  ultimaComunicacion?: string;
  ultimoEstado?: 'Ok' | 'Alerta';
  ultimaAlerta?: IAlerta;
  ultimoReporte?: IReporte;

  // Virtuals
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
  lote?: ILote;
  dispositivo?: IDispositivo;
}
