import { ICoordenadas, IUbicacion } from "../../auxiliares";
import { IEstablecimiento } from "../../generales/establecimiento";
import { ConfiguracionPivot, ICliente } from "../../generales/cliente";

export interface IGPSPivot {
  lat: number;
  lng: number;
  fecha: string;
}

export interface IAlertaPivot {
  tipo: string;
  mensaje: string;
  fecha: string;
}

export interface IPivot {
  _id: string;
  nombre?: string;
  idEstablecimiento?: string;
  idCliente?: string;
  fechaCreacion?: string;

  ubicacion?: ICoordenadas;
  ultimoEstado?: "activo" | "inactivo" | "mantenimiento";
  longitud?: number; // metros
  radioRiego?: number; // metros
  tipoFuenteAgua?: string; // Ej: "pozo", "canal", "represa"
  presionTrabajo?: number; // bar o psi
  caudal?: number; // m3/h

  idGps?: string;

  ultimaAlerta?: IAlertaPivot;
  ultimaOperacion?: { tipo: string; fecha: string };

  configuraciones?: ConfiguracionPivot;

  // Virtuals
  dispositivoGps?: IGPSPivot[];
  establecimiento?: IEstablecimiento;
  cliente?: ICliente;
}

export type OmitirCreatePivot =
  | "_id"
  | "dispositivoGps"
  | "establecimiento"
  | "cliente"
  | "fechaCreacion";

export interface ICreatePivot
  extends Omit<Partial<IPivot>, OmitirCreatePivot> {}

export type OmitirUpdatePivot =
  | "_id"
  | "dispositivoGps"
  | "establecimiento"
  | "cliente"
  | "fechaCreacion";

export interface IUpdatePivot
  extends Omit<Partial<IPivot>, OmitirUpdatePivot> {}
