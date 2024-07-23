import {
  ConfiguracionSensorRPM,
  IAlerta,
  ICliente,
  IDispositivo,
  IEstablecimiento,
  IReporte,
} from '../../../generales';

export interface ISensorRPM {
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
  configuraciones?: ConfiguracionSensorRPM;
  idBomba?: string;
  idBombeo?: string;
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

type OmitirCreate =
  | '_id'
  | 'fechaCreacion'
  | 'cliente'
  | 'establecimiento'
  | 'dispositivo';

export interface ICreateSensorRPM
  extends Omit<Partial<ISensorRPM>, OmitirCreate> {}

type OmitirUpdate =
  | '_id'
  | 'fechaCreacion'
  | 'cliente'
  | 'establecimiento'
  | 'dispositivo';

export interface IUpdateSensorRPM
  extends Omit<Partial<ISensorRPM>, OmitirUpdate> {}
