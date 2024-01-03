import { ICliente } from "../cliente";
import { IEstablecimiento } from "../establecimiento";
import { TipoDispositivo } from "../tipoDispositivo";
import { EstadoEvento, IEstadoEvento } from "./estado";

export interface IEvento {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  // Datos Autogenerados
  _id?: string;
  fecha?: string;
  activa: boolean;
  // Datos del dispositivo
  deviceName: string;
  deveui: string;
  tipoDispositivo: TipoDispositivo;
  // Entidad a la que está asignado el dispositivo
  idAsignado?: string;
  entidad?: string;
  tipoEntidad?: string;
  // Estados de la alerta
  estados: IEstadoEvento[];
  estadoActual: EstadoEvento;
  // Datos especificos de la alerta de acuerdo al tipo de dispositivo
  descripcion: string;
  reportes: Record<string, any>[];
  // Virtuals
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
}
