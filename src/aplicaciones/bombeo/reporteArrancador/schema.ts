export interface IReporteBombeoArrancador {
  // Campos Comunes
  numero: number;
  modelo?: string;
  tipo?: "Arrancador" | "Variador";
  estado: "Encendido" | "Apagado" | "Manual";
  corrienteMotor?: number;
  factorPotencia?: number;
  potenciaSalida?: number;
  errorActualSSW?: number;
  alarmaActualSSW?: number;
  versionFirmware?: number;
  horasEnergizado?: number;
  horasHabilitado?: number;
  horasKwh?: number;
  // Solo Arrancador
  corrienteAlimentacion?: number;
  tensionAlimentacion?: number;
  estadoSSW?: number;
  corrienteFaseR?: number;
  corrienteFaseS?: number;
  corrienteFaseT?: number;
  tensionFaseRS?: number;
  tensionFaseST?: number;
  tensionFaseTR?: number;
  horasMwh?: number;
  // Solo Variador
  velocidad?: number;
}
