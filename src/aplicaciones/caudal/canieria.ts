import { IGeoJSONPoint } from '../../auxiliares';
import {
  ICliente,
  IDispositivo,
  IEstablecimiento,
  IReporte,
} from '../../generales';

export interface ICanieria {
  _id?: string;
  fechaCreacion?: string;
  idCliente?: string;
  idEstablecimiento?: string;
  /**
   * Nombre Identificador de la cañeria
   */
  identificacion?: string;
  /**
   * Ubicacion de la cañeria
   */
  geojson?: IGeoJSONPoint;
  /**
   * Diametro de la cañeria en cm
   */
  diametro?: number;
  /**
   * Material de la cañeria
   */
  material?: string;
  /**
   * Espesor de la cañeria en mm
   */
  espesor?: number;
  /**
   * Tipo de liquido que transporta
   */
  tipoDeLiquido?: string;
  /**
   * DevEUI del dispositivo asociado
   */
  deveui?: string;
  /**
   * Si el dispositivo esta asignado a una bomba
   * @default false
   */
  asignado?: boolean;
  /**
   * ID del bombeo asociado
   */
  idBombeo?: string;
  /**
   * Ultimo reporte asociado a la cañeria
   */
  ultimoReporte?: IReporte;

  // Populate
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
  dispositivo?: IDispositivo;
}

////// CREATE
type OmitirCreate =
  | '_id'
  | 'fechaCreacion'
  | 'dispositivo'
  | 'cliente'
  | 'establecimiento'
  | 'dispositivo';
export interface ICreateCanieria
  extends Omit<Partial<ICanieria>, OmitirCreate> {}

////// UPDATE
type OmitirUpdate =
  | '_id'
  | 'fechaCreacion'
  | 'dispositivo'
  | 'cliente'
  | 'establecimiento'
  | 'dispositivo';
export interface IUpdateCanieria
  extends Omit<Partial<ICanieria>, OmitirUpdate> {}
