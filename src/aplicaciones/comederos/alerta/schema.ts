export interface IAlertaComedero {
  fecha: string;
  alerta?: "Error de lectura de sensor";
  frecuenciaReporte?: number;
  bateria?: number;
  cargando?: boolean;
}
