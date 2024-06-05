export interface IReporteBombeoArrancadorV2 {
  // De reporte periodico
  dispositivo?: "Arrancador";
  numero?: number;
  estado?: "Encendido" | "Apagado" | "Encendido Manual";
  habilitado?: boolean;
  estadoBoton?: "Manual" | "Remoto" | "Indefinido";
  // De reporte especifico
  nroMsg?: number;
  on?: boolean;
  tipo?: "SSW06" | "SSW07" | "SSW900";
  corrienteAlimentacion?: number;
  corrienteMotor?: number;
  tensionAlimentacion?: number;
  estadoSSW?: number;
  factorPotencia?: number;
  potenciaSalida?: number;
  errorActual?: number;
  alarmaActual?: number;
  versionFirmware?: number;
  corrienteFaseR?: number;
  corrienteFaseS?: number;
  corrienteFaseT?: number;
  tensionFaseRS?: number;
  tensionFaseST?: number;
  tensionFaseTR?: number;
  contHorasEnergizado?: number;
  contHorasHabilitado?: number;
  contHorasKWH?: number;
  contHorasMWH?: number;
}
