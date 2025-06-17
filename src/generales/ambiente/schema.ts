import {
  IEstacionMeteorologica,
  IFreatimetro,
  IPluviometro,
  ISensorHumedadSuelo,
} from "../../aplicaciones";
import { IUbicacion } from "../../auxiliares";
import { ICliente } from "../cliente";
import { IEstablecimiento } from "../establecimiento";
import { ICultivo } from "../cultivo/schema";
import { ISuelo } from "../suelo";
import { IDepartamento } from "../departamento";

export interface IAmbiente {
  _id: string;
  nombre: string;
  ubicacion?: IUbicacion;
  idCliente: string;
  idEstablecimiento: string;
  fechaCreacion: string;
  configuraciones?: { colorLinea: string | null; colorRelleno: string | null };

  idSensorHumedadSuelos?: string[];
  idPluviometros?: string[];
  idFreatimetros?: string[];
  idEstacionMeteorologicas?: string[];
  cultivo?: ICultivo;
  suelos?: ISuelo[];
  capacidadRiego?: number;
  idDepartamento?: string;
  // integraciones
  idSiembraChaman?: string;

  // Virtuals
  establecimiento?: IEstablecimiento;
  cliente?: ICliente;
  sensorHumedadSuelos?: ISensorHumedadSuelo[];
  pluviometros?: IPluviometro[];
  freatimetros?: IFreatimetro[];
  estacionMeteorologicas?: IEstacionMeteorologica[];
  departamento?: IDepartamento;
}

type OmitirCreate =
  | "_id"
  | "fechaCreacion"
  | "establecimiento"
  | "cliente"
  | "sensorHumedadSuelos"
  | "pluviometros"
  | "freatimetros"
  | "estacionMeteorologicas"
  | "departamento";

export interface ICreateAmbiente
  extends Omit<Partial<IAmbiente>, OmitirCreate> {}

type OmitirUpdate =
  | "_id"
  | "fechaCreacion"
  | "establecimiento"
  | "cliente"
  | "sensorHumedadSuelos"
  | "pluviometros"
  | "freatimetros"
  | "estacionMeteorologicas"
  | "departamento";

export interface IUpdateAmbiente
  extends Omit<Partial<IAmbiente>, OmitirUpdate> {}
