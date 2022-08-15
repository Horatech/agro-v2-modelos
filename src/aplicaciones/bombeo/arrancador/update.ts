import { IReporte } from "../../../generales";

export interface IUpdateArrancador {
  deveuiCentral?: string;
  numero?: number;
  canalEntrada?: number;
  canalSalida?: number;
  estadoActual?: "Encendido" | "Apagado";
  fechaUltimaComunicacion?: string;
  ultimoReporte?: IReporte;
}
