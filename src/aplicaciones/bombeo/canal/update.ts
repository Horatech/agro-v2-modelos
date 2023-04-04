import { IReporte, Semaforo } from "../../../generales";
import { IConfigCanal } from "./config";

export interface IUpdateBombeoCanal {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  configuraciones?: {
    colorIcono?: string | null;
    colorError?: string | null;
    coloresNivel?: Semaforo[] | null;
  };
  asignado?: boolean;
  //
  deveuiCentral?: string;
  numero?: number;
  tipo?: "Entrada" | "Salida";
  cota?: number;
  cotaMinMm?: number;
  cotaMaxMm?: number;
  frecReporte?: number;
  configuracion?: IConfigCanal;
  ultimoReporte?: IReporte;
}
