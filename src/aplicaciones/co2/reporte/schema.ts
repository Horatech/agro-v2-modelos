export interface IReporteCo2 {
  co2?: number;
  temperatura?: number;
  humedad?: number;
  bateria?: number;
  // Calculados
  bateriaPorc?: number;
  co2Porc?: number;
  humedadPorc?: number;
  temperaturaGrados?: number;
  humedadEquilibrio?: number;
  alertaBateria?: number;
  alertaCo2?: number;
  alertaHumedad?: number;
}
