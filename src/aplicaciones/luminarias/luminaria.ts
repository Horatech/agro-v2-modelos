import { ICoordenadas } from "../../auxiliares";
import {
  ICliente,
  IDispositivo,
  IEstablecimiento,
  ILote,
  IReporte,
} from "../../generales";

export interface ILuminaria {
  _id?: string;
  idCliente?: string;
  idEstablecimiento?: string; // En este caso se usaria como agrupacion principal de luminarias
  idLote?: string; // En este caso se usarian como agrupacion secundaria de luminarias
  deveui?: string; // Identificador del nodo asignado
  // Info de identificacion
  identificacion?: string;
  marca?: string;
  modelo?: string;
  potencia?: number;
  horasVida?: number;
  ubicacion?: ICoordenadas;
  direccion?: string;
  fechaUltimaComunicacion?: string;
  // Estado
  horasUso?: number;
  ultimoReporte?: IReporte;
  ultimoReporteEnergia?: IReporte;
  // Virtuals
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
  lote?: ILote;
  dispositivo?: IDispositivo;
}

////// CREATE
type OmitirCreate =
  | "_id"
  | "cliente"
  | "establecimiento"
  | "lote"
  | "dispositivo";
export interface ICreateLuminaria
  extends Omit<Partial<ILuminaria>, OmitirCreate> {}

////// UPDATE
type OmitirUpdate =
  | "_id"
  | "cliente"
  | "establecimiento"
  | "lote"
  | "dispositivo";
export interface IUpdateLuminaria
  extends Omit<Partial<ILuminaria>, OmitirUpdate> {}
