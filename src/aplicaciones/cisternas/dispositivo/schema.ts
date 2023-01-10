export interface IDispositivoNivelCisterna {
  // Config en la app
  asignado?: boolean;
  nivelDeInstalacion?: number;
  unidadParaMostrar?: 'mm' | 'cm' | 'm';
  // Config del dispositivo
  adr?: boolean;
  dr?: number;
  encendida?: boolean;
  intervaloDeLectura?: number;
  mensajesConfirmados?: boolean;
  muestrasPorLectura?: number;
  lecturasPorReporte?: number;
  promediarLecturas?: boolean;
  vMajor?: number;
  vMinor?: number;
  vPatch?: number;
}

export interface IDispositivoBombaCisterna {
  asignado?: boolean;
  frecuenciaReporte?: number;
}
