import { IReporte } from "../../../generales";

export interface IUpdateCanal {
  deveuiCentral?: string;
  numero?: number;
  tipo?: "Entrada" | "Salida";
  cota?: number;
  cotaMinMm?: number;
  cotaMaxMm?: number;
  frecReporte?: number;
  ultimoReporte?: IReporte;
}
