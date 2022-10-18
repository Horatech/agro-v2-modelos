import { IReporte } from "../../../generales";

export interface ICreateBombeoArrancador {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  //
  deveuiCentral: string;
  numero: number;
  canalEntrada?: number;
  canalSalida?: number;
  estadoActual?: "Encendido" | "Apagado" | "Manual";
  fechaUltimaComunicacion?: string;
  ultimoReporte?: IReporte;
  tipo?: "Arrancador" | "Variador";
  modelo?: string;
  velocidad?: number;
}
