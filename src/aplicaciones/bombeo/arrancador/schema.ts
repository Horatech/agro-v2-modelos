import { ICliente, IEstablecimiento, IReporte } from "../../../generales";

export interface IBombeoArrancador {
  _id?: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  //
  deveuiCentral: string;
  numero: number;
  canalEntrada?: number;
  canalSalida?: number;
  estadoActual?: "Encendido" | "Apagado";
  fechaUltimaComunicacion?: string;
  ultimoReporte?: IReporte;
  // Virtual
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
}
