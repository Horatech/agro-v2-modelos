export interface IDispositivoTracker {
  encendida?: boolean;
  gps?: boolean;
  acelerometro?: boolean;
  adr?: boolean;
  mensajesConfirmados?: boolean;
  frecuenciaReporte?: number;
  dr?: number;
  duracionAcelerometro?: number;
  sensibilidadAceletrometro?: number;
  vMajor?: number;
  vMinor?: number;
  vPatch?: number;
}
