import { IGeoJSONPoint } from "../../auxiliares";
import {
  ICliente,
  IDispositivo,
  IEstablecimiento,
  IReporte,
} from "../../generales";

export interface ICanieria {
  _id?: string;
  fechaCreacion?: String;
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
   * DevEUI del dispositivo asociado
   */
  deveui?: string;
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
  | "_id"
  | "fechaCreacion"
  | "dispositivo"
  | "cliente"
  | "establecimiento"
  | "dispositivo";
export interface ICreateCanieria
  extends Omit<Partial<ICanieria>, OmitirCreate> {}

////// UPDATE
type OmitirUpdate =
  | "_id"
  | "fechaCreacion"
  | "dispositivo"
  | "cliente"
  | "establecimiento"
  | "dispositivo";
export interface IUpdateCanieria
  extends Omit<Partial<ICanieria>, OmitirUpdate> {}
