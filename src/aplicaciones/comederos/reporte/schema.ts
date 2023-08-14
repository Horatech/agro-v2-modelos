export interface IReporteComedero {
  distanciaLeida: number;
  porcentajeLeido: number;
  frecuenciaReporte?: number;
  bateria: number;
  cargando: boolean;
  calidad?: number;
  // Datos calculados
  fechaFrecuencia?: string;
  fechaHora?: string;
  distancia?: number;
  porcentaje?: number;
  tipo?: string;
}
