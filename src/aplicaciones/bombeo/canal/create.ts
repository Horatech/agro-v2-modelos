import { IReporteCanal } from "../reporteCanal";

export interface ICreateCanal {
  deveuiCentral: string;
  numero: number;
  tipo?: "Entrada" | "Salida";
  cota?: number;
  cotaMinMm?: number;
  cotaMaxMm?: number;
  frecReporte?: number;
  ultimoReporte?: IReporteCanal;
}
