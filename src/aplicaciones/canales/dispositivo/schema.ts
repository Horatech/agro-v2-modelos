export interface IDispositivoCanal {
  // carga de usuario
  igm?: number;
  // Config reportada
  encendida?: boolean;
  intervaloDeLectura?: number;
  adr?: boolean;
  dr?: number;
  muestrasPorLectura?: number;
  lecturasPorReporte?: number;
  promediarLecturas?: boolean;
  vMajor?: number;
  vMinor?: number;
  vPatch?: number;
  // Ultima comunicación
  ultimaComunicacion?: string;
  bateria?: number;
  cargando?: boolean;
  frecuenciaReporte?: number;
}
