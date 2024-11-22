import { TipoDispositivo } from "../tipoDispositivo";

export interface ICreateReporte {
  fecha?: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  // Datos del dispositivo
  deviceName?: string;
  deveui?: string;
  tipoDispositivo?: TipoDispositivo;
  idAsignado?: string;
  // Datos especificos de la alerta de acuerdo al tipo de dispositivo
  reporte?: Record<string, any>;
}
