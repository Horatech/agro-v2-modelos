import { ICoordenadas } from "../../auxiliares";
import {
  ConfiguracionLanzaHumedad,
  IAlerta,
  ICliente,
  IDispositivo,
  IEstablecimiento,
  ILote,
  IReporte,
} from "../../generales";

export interface ILanzaHumendad {
  _id?: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
  //
  fechaCreacion?: string;
  //deveui de la Lanza de Humedad
  deveui?: string;
  nombre?: string;
  descripcion?: string;
  configuraciones?: ConfiguracionLanzaHumedad;
  // Polyline
  ubicacion?: ICoordenadas;
  //
  ultimaComunicacion?: string;
  ultimoEstado?: "Ok" | "Alerta";
  ultimaAlerta?: IAlerta;
  ultimoReporte?: IReporte;
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
export interface ICreateLanzaHumedad
  extends Omit<Partial<ILanzaHumendad>, OmitirCreate> {}

////// UPDATE
type OmitirUpdate =
  | "_id"
  | "cliente"
  | "establecimiento"
  | "lote"
  | "dispositivo";
export interface IUpdateLanzaHumedad
  extends Omit<Partial<ILanzaHumendad>, OmitirUpdate> {}
