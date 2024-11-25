import { TipoDispositivo } from "../tipoDispositivo";

export interface IUpdateReporte {
  // Datos del dispositivo
  deviceName?: string;
  deveui?: string;
  tipoDispositivo?: TipoDispositivo;
  idAsignado?: string;
  // Datos especificos de la alerta de acuerdo al tipo de dispositivo
  reporte?: Record<string, any>;
}
