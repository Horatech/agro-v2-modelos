export interface IAlerta {
  _id?: string;
  deviceName: string;
  deveui: string;
  alerta?: string;
  frecuenciaReporte?: number;
  bateria?: number;
  cargando?: boolean;
  fecha?: string;
}
