import { TipoDispositivo } from "../tipoDispositivo";
import { EstadoAlerta, IEstadoAlerta } from "./estado";

export interface ICreateAlerta {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  // Datos del dispositivo
  deviceName: string;
  deveui: string;
  tipoDispositivo: TipoDispositivo;
  // Estados de la alerta
  estados: IEstadoAlerta[];
  estadoActual: EstadoAlerta;
  idAsignado?: string;
  // Datos especificos de la alerta de acuerdo al tipo de dispositivo
  descripcion: string;
  reportes: Record<string, any>[];
}
