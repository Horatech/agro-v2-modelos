import { ICliente, IEstablecimiento, IReporte } from "../../../generales";

export interface IBombeoCanal {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  //
  deveuiCentral: string;
  numero: number;
  tipo?: "Entrada" | "Salida";
  cota?: number;
  cotaMinMm?: number;
  cotaMaxMm?: number;
  frecReporte?: number;
  ultimoReporte?: IReporte;
  // Virtual
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
}
