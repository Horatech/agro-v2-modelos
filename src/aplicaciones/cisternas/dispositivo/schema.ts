export interface IDispositivoNivelCisterna {
  // Config en la app
  asignado?: boolean;
  nivelDeInstalacion?: number;
  // Config del dispositivo
  intervaloDeLectura?: number;
  adr?: boolean;
  dr?: number;
  encendida?: boolean;
  intevaloDeLectura?: number;
  lecturasPorReporte?: number;
  promediarLecturas?: boolean;
  mensajesConfirmados?: boolean;
  vMajor?: number;
  vMinor?: number;
  vPatch?: number;
}

export interface IDispositivoBombaCisterna {
  asignado?: boolean;
  frecuenciaReporte?: number;
}
