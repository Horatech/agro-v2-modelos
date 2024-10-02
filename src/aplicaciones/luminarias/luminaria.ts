import { ICliente, IDispositivo, IEstablecimiento } from "../../generales";

export interface ILuminaria {
  _id?: string;
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
  identificacion?: string;
  marca?: string;
  modelo?: string;
  consumo20?: number;
  consumo40?: number;
  consumo60?: number;
  consumo80?: number;
  consumo100?: number;
  horasVida?: number;
  deveui?: string;
  // Virtuals
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
  lote?: string;
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
