export interface IReporteLanzaHumedad {
  temperatura?: {
    [nroSensor: number]: number;
  };
  humedad?: {
    [nroSensor: number]: number;
  };
}
