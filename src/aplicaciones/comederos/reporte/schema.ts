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
  altura?: number;
  alturaLeida?: number;
  tipo?: string;
}
