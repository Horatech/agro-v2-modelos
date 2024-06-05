export interface IReporteBombeoVariadorV2 {
  // De reporte periodico
  dispositivo?: "Variador";
  numero?: number;
  estado?: "Encendido" | "Apagado" | "Encendido Manual";
  habilitado?: boolean;
  // De reporte especifico
  nroMsg?: number;
  on?: boolean;
  tipo?: "CFW11";
  velocidad?: number;
  corrienteMotor?: number;
  estadoSSW?: number;
  factorPortencia?: number;
  potenciaSalida?: number;
  errorActual?: number;
  alarmaActual?: number;
  versionFirmware?: number;
  contHorasEnergizado?: number;
  contHorasHabilitado?: number;
  contHorasKWH?: number;
}
