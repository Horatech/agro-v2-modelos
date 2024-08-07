import {
  IEstacionMeteorologica,
  IFreatimetro,
  IPluviometro,
  ISensorHumedadSuelo,
} from "../../aplicaciones";
import { IUbicacion } from "../../auxiliares";
import { ICliente } from "../cliente";
import { IEstablecimiento } from "../establecimiento";
import { ICultivo } from "./cultivo";
import { ITipoSuelo } from "./riego/tipoSuelo";
export interface IAmbiente {
  _id: string;
  nombre: string;
  ubicacion?: IUbicacion;
  idCliente: string;
  idEstablecimiento: string;
  fechaCreacion: string;
  configuraciones?: { colorLinea: string | null; colorRelleno: string | null };
  region?: string;
  cultivos?: ICultivo[];

  idSensorHumedadSuelos?: string[];
  idPluviometros?: string[];
  idFreatimetros?: string[];
  idEstacionMeteorologicas?: string[];
  idTipoSuelo?: string[];
  // Virtuals
  establecimiento?: IEstablecimiento;
  cliente?: ICliente;
  sensorHumedadSuelos?: ISensorHumedadSuelo[];
  pluviometros?: IPluviometro[];
  freatimetros?: IFreatimetro[];
  estacionMeteorologicas?: IEstacionMeteorologica[];
  tipoSuelos?: ITipoSuelo[];
}

type OmitirCreate =
  | "_id"
  | "fechaCreacion"
  | "establecimiento"
  | "cliente"
  | "sensorHumedadSuelos"
  | "pluviometros"
  | "freatimetros"
  | "estacionMeteorologicas";

export interface ICreateAmbiente
  extends Omit<Partial<IAmbiente>, OmitirCreate> { }

type OmitirUpdate =
  | "_id"
  | "fechaCreacion"
  | "establecimiento"
  | "cliente"
  | "sensorHumedadSuelos"
  | "pluviometros"
  | "freatimetros"
  | "estacionMeteorologicas";

export interface IUpdateAmbiente
  extends Omit<Partial<IAmbiente>, OmitirUpdate> { }
