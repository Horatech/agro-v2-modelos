import { ICoordenadas } from "../../../auxiliares";
import {
  ConfiguracionBombaSumergible,
  ICliente,
  IDispositivo,
  IEstablecimiento,
} from "../../../generales";

export type Controlador = "MP204" | "CU362";

export interface IBombaSumergible {
  _id?: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  configuraciones?: ConfiguracionBombaSumergible;
  //
  nombre?: string;
  idDispositivo?: string;
  controlador?: Controlador;
  ubicacion?: ICoordenadas;
  // Virtuals
  dispositivo?: IDispositivo;
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
}
