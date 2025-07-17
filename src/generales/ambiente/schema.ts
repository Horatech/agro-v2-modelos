import {
  IEstacionMeteorologica,
  IFreatimetro,
  ILanzaHumedad,
  IPluviometro,
  ISensorHumedadSuelo,
} from "../../aplicaciones";
import { IUbicacion } from "../../auxiliares";
import { ICliente } from "../cliente";
import { IEstablecimiento } from "../establecimiento";
import { ISuelo } from "../suelo";
import { IDepartamento } from "../departamento";
import { IPrediccionEnfermedades, IPrediccionRiego } from "../prediccion";
import { ISiembra } from "../siembra";

export interface IAmbiente {
  _id: string;
  nombre: string;
  ubicacion?: IUbicacion;
  idCliente?: string;
  idEstablecimiento: string;
  fechaCreacion: string;
  configuraciones?: { colorLinea: string | null; colorRelleno: string | null };

  idLanzaHumedad?: string[];
  idSensorHumedadSuelos?: string[];
  idPluviometros?: string[];
  idFreatimetros?: string[];
  idEstacionMeteorologicas?: string[];
  idSiembra?: string;

  suelos?: ISuelo[];
  capacidadRiego?: number;
  idDepartamento?: string;
  ultimaPrediccionRiego?: IPrediccionRiego;
  ultimaPrediccionEnfermedades?: IPrediccionEnfermedades;
  // integraciones
  idSiembraChaman?: string;

  // Virtuals
  establecimiento?: IEstablecimiento;
  cliente?: ICliente;
  lanzaHumedad?: ILanzaHumedad[];
  sensorHumedadSuelos?: ISensorHumedadSuelo[];
  pluviometros?: IPluviometro[];
  freatimetros?: IFreatimetro[];
  estacionMeteorologicas?: IEstacionMeteorologica[];
  departamento?: IDepartamento;
  siembra?: ISiembra;
}

type OmitirCreate =
  | "_id"
  | "fechaCreacion"
  | "establecimiento"
  | "cliente"
  | "lanzaHumedad"
  | "sensorHumedadSuelos"
  | "pluviometros"
  | "freatimetros"
  | "estacionMeteorologicas"
  | "departamento"
  | "siembra";

export interface ICreateAmbiente
  extends Omit<Partial<IAmbiente>, OmitirCreate> {}

type OmitirUpdate =
  | "_id"
  | "fechaCreacion"
  | "establecimiento"
  | "cliente"
  | "lanzaHumedad"
  | "sensorHumedadSuelos"
  | "pluviometros"
  | "freatimetros"
  | "estacionMeteorologicas"
  | "departamento"
  | "siembra";

export interface IUpdateAmbiente
  extends Omit<Partial<IAmbiente>, OmitirUpdate> {}
