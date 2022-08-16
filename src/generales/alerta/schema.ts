import { ICliente } from "../cliente";
import { IEstablecimiento } from "../establecimiento";
import { TipoDispositivo } from "../tipoDispositivo";
import { EstadoAlerta, IEstadoAlerta } from "./estado";

export interface IAlerta {
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
  idAsignado?: string;
  // Estados de la alerta
  estados: IEstadoAlerta[];
  estadoActual: EstadoAlerta;
  // Datos especificos de la alerta de acuerdo al tipo de dispositivo
  descripcion: string;
  reportes: Record<string, any>[];
  // Virtuals
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
}
