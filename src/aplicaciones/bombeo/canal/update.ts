import { IReporte } from "../../../generales";

export interface IUpdateBombeoCanal {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  //
  deveuiCentral?: string;
  numero?: number;
  tipo?: "Entrada" | "Salida";
  cota?: number;
  cotaMinMm?: number;
  cotaMaxMm?: number;
  frecReporte?: number;
  ultimoReporte?: IReporte;
}
