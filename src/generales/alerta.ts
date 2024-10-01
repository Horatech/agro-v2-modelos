import { ICliente } from "./cliente";
import { IEstablecimiento } from "./establecimiento";
import { TipoDispositivo } from "./tipoDispositivo";
import { IUsuario } from "./usuario";

export type EstadoAlerta = "Nueva" | "Finalizada";
export const ESTADOS_ALERTA = ["Nueva", "Finalizada"];

export interface IEstadoAlerta {
  fecha?: string;
  idUsuario?: string;
  estado?: EstadoAlerta;
  comentario?: string;
  // Virtual
  usuario?: IUsuario;
}

export interface IAlerta {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  // Datos Autogenerados
  _id?: string;
  fecha?: string;
  activa: boolean;
  // Datos del dispositivo
  deviceName: string;
  deveui: string;
  tipoDispositivo: TipoDispositivo;
  idAsignado?: string;
  // Estados de la alerta
  estados: IEstadoAlerta[];
  estadoActual: EstadoAlerta;
  // Datos especificos de la alerta de acuerdo al tipo de dispositivo
  descripcion: string;
  reportes: Record<string, any>[];
  // Virtuals
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
}

////// CREATE
type OmitirCreate = "_id" | "cliente" | "establecimiento";
export interface ICreateAlerta extends Omit<Partial<IAlerta>, OmitirCreate> {}

////// UPDATE
type OmitirUpdate = "_id" | "cliente" | "establecimiento";
export interface IUpdateAlerta extends Omit<Partial<IAlerta>, OmitirUpdate> {}
