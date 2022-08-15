import { IReporteArrancador } from "../reporteArrancador";

export interface IArrancador {
  deveuiCentral: string;
  numero: number;
  canalEntrada?: number;
  canalSalida?: number;
  estadoActual?: "Encendido" | "Apagado";
  fechaUltimaComunicacion?: string;
  ultimoReporte?: IReporteArrancador;
}
