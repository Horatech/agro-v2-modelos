import { ICoordenadas } from "../../auxiliares";
import {
  ConfiguracionCisterna,
  ICliente,
  IDispositivo,
  IEstablecimiento,
  ILote,
  Semaforo,
} from "../../generales";

export interface ICisterna {
  // Pozo
  // Cisterna sin nivel y una bomba
  _id?: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
  configuraciones?: ConfiguracionCisterna;
  // Info
  tipo?: "Cisterna" | "Pozo";
  nombre?: string;
  direccion?: string;
  localidad?: string;
  idsBomba?: string[];
  idsNivel?: string[];
  deveuisBomba?: string[];
  deveuisNivel?: string[];
  alturaMm?: number;
  volumenM3?: number;
  ubicacion?: ICoordenadas | null;
  // Estado
  estado?: "Encendida" | "Apagada" | "Sin Información";
  condicion?: "Con Fallos" | "Sin Alertas" | "Sin Información";
  condicionNivel?: "Alerta" | "Sin Alertas" | "Sin Información";
  // Virtuals
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
  lote?: ILote;
  bombas?: IDispositivo[];
  niveles?: IDispositivo[];
}

////// CREATE
type OmitirCreate =
  | "_id"
  | "cliente"
  | "establecimiento"
  | "lote"
  | "bombas"
  | "niveles";
export interface ICreateCisterna
  extends Omit<Partial<ICisterna>, OmitirCreate> {}

////// UPDATE
type OmitirUpdate =
  | "_id"
  | "cliente"
  | "establecimiento"
  | "lote"
  | "bombas"
  | "niveles";
export interface IUpdateCisterna
  extends Omit<Partial<ICisterna>, OmitirUpdate> {}
