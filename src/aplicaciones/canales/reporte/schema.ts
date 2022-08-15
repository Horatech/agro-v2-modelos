export interface IReporte {
  _id?: string;
  deviceName: string;
  deveui: string;
  distancia: number;
  frecuenciaReporte: number;
  bateria: number;
  cargando: boolean;
  fecha?: string;
}
