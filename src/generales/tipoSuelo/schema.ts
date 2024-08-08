import { ICliente } from "../cliente";
import { IEstablecimiento } from "../establecimiento";

export interface ITipoSuelo {
  _id?: string;
  fechaCreacion: string;
  nombre?: string;
  idCliente: string;
  idEstablecimiento: string;
  // retencion de agua cm por cada 30 cm de suelo
  retencionAgua?: { min?: number; max?: number };
  // virtual
  establecimiento?: IEstablecimiento;
  cliente?: ICliente;
}

type OmitirCreate =
  | "_id"
  | "fechaCreacion"
  | "establecimiento"
  | "cliente";

export interface ICreateTipoSuelo
  extends Omit<Partial<ITipoSuelo>, OmitirCreate> { }

type OmitirUpdate =
  | "_id"
  | "fechaCreacion"
  | "establecimiento"
  | "cliente";

export interface IUpdateTipoSuelo
  extends Omit<Partial<ITipoSuelo>, OmitirUpdate> { }