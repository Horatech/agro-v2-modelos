import { IReporte } from "../../../generales";

export interface IUpdateBombeoArrancador {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  //
  deveuiCentral?: string;
  numero?: number;
  canalEntrada?: number;
  canalSalida?: number;
  estadoActual?: "Encendido" | "Apagado";
  fechaUltimaComunicacion?: string;
  ultimoReporte?: IReporte;
}
