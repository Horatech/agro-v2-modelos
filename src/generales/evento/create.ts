import { TipoDispositivo } from '../tipoDispositivo';
import { EstadoEvento, IEstadoEvento } from './estado';

export interface ICreateEvento {
  fecha?: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  // Datos del dispositivo
  deviceName: string;
  deveui: string;
  tipoDispositivo: TipoDispositivo;
  // Estados de la alerta
  estados: IEstadoEvento[];
  estadoActual: EstadoEvento;
  idAsignado?: string;
  // Datos especificos de la alerta de acuerdo al tipo de dispositivo
  descripcion: string;
  reportes: Record<string, any>[];
}
