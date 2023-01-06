export interface IReportePluviometro {
  valorAcumulado?: number;
  bateria?: number;
  cargando?: boolean;
  // Calculados
  valorInstantaneo?: number; // Diferencia con el reporte anterior
}
