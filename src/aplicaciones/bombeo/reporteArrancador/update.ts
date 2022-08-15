export interface IUpdateReporteArrancador {
  deveuiCentral?: string;
  numero?: number;
  fecha?: string;
  estado?: "Encendido" | "Apagado";
  corrienteAlimentacion?: number;
  corrienteMotor?: number;
  tensionAlimentacion?: number;
  estadoSSW?: number;
  factorPotencia?: number;
  potenciaSalida?: number;
  estadoEntradasDigitales?: number;
  estadoSalidasReles?: number;
  errorActualSSW?: number;
  alarmaActualSSW?: number;
  versionFirmware?: number;
  corrienteFaseR?: number;
  corrienteFaseS?: number;
  corrienteFaseT?: number;
  tensionFaseRS?: number;
  tensionFaseST?: number;
  tensionFaseTR?: number;
  horasEnergizado?: number;
  horasHabilitado?: number;
  horasKwh?: number;
  horasMwh?: number;
}
