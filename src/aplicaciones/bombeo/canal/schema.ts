import {
  Color,
  ICliente,
  IDispositivo,
  IEstablecimiento,
  IReporte,
} from '../../../generales';
import { IConfigCanal } from './config';

export interface IBombeoCanal {
  _id?: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  configuraciones?: { colorIcono: string; coloresNivel: Color[] };
  //
  deveuiCentral: string;
  numero: number;
  tipo?: 'Entrada' | 'Salida';
  cota?: number;
  cotaMinMm?: number;
  cotaMaxMm?: number;
  frecReporte?: number;
  configuracion?: IConfigCanal;
  ultimoReporte?: IReporte;
  // Virtual
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
  dispositivo?: IDispositivo;
}
