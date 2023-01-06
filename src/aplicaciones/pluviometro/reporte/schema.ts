export interface IReportePluviometro {
  valorAcumulado?: number;
  bateria?: number;
  cargando?: boolean;
  // Calculados
  fechaDesde?: string;
  tiempoInstantaneo?: number; // Diferencia con el reporte anterior
  valorInstantaneo?: number; // Diferencia con el reporte anterior
}
