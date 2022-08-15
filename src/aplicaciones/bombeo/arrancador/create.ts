import { IReporte } from "../../../generales";

export interface ICreateArrancador {
  deveuiCentral: string;
  numero: number;
  canalEntrada?: number;
  canalSalida?: number;
  estadoActual?: "Encendido" | "Apagado";
  fechaUltimaComunicacion?: string;
  ultimoReporte?: IReporte;
}
