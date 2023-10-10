import { TipoDispositivo } from '../tipoDispositivo';
import { EstadoEvento, IEstadoEvento } from './estado';

export interface IUpdateEvento {
  activa?: boolean;
  // Datos del dispositivo
  deviceName?: string;
  deveui?: string;
  tipoDispositivo?: TipoDispositivo;
  idAsignado?: string;
  // Estados de la alerta
  estados?: IEstadoEvento[];
  estadoActual?: EstadoEvento;
  // Datos especificos de la alerta de acuerdo al tipo de dispositivo
  descripcion?: string;
  reportes?: Record<string, any>[];
}
