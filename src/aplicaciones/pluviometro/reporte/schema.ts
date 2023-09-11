export interface IReportePluviometro {
  pulsos?: number;
  sensibilidad?: number;
  valorAcumulado?: number;
  bateria?: number;
  cargando?: boolean;
  // Calculados
  fechaDesde?: string;
  tiempoInstantaneo?: number; // Diferencia con el reporte anterior
  valorInstantaneo?: number; // Diferencia con el reporte anterior
}
