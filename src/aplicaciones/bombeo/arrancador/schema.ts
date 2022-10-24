import {
  ICliente,
  IDispositivo,
  IEstablecimiento,
  IReporte,
} from '../../../generales';

export interface IBombeoArrancador {
  _id?: string;
  nombre?: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  //
  deveuiCentral: string;
  numero: number;
  canalEntrada?: number;
  canalSalida?: number;
  estadoActual?: 'Encendido' | 'Apagado' | 'Manual';
  fechaUltimaComunicacion?: string;
  ultimoReporte?: IReporte;
  tipo?: 'Arrancador' | 'Variador';
  modelo?: string;
  velocidad?: number;
  // Virtual
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
  dispositivo?: IDispositivo;
}
