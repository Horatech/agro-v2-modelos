import { TipoDispositivo } from "../tipoDispositivo";

export interface IReporte {
  // Datos Autogenerados
  _id?: string;
  fecha: string;
  // Datos del dispositivo
  deviceName: string;
  deveui: string;
  tipoDispositivo: TipoDispositivo;
  idAsignado?: string;
  // Datos especificos de la alerta de acuerdo al tipo de dispositivo
  reporte: Record<string, any>;
}
