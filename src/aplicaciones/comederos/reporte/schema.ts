export interface IReporteComedero {
  distanciaLeida: number;
  porcentajeLeido: number;
  frecuenciaReporte: number;
  bateria: number;
  cargando: boolean;
  calidad: number;
  // Datos calculados
  distancia?: number;
  porcentaje?: number;
  tipo?: string;
}
