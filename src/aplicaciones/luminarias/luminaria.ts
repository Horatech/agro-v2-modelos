import { ICliente, IDispositivo, IEstablecimiento } from "../../generales";

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
  // Consumos teoricos para comparar con lo reportado y generar alertas
  consumo20?: number;
  consumo40?: number;
  consumo60?: number;
  consumo80?: number;
  consumo100?: number;
  //
  horasVida?: number;
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
