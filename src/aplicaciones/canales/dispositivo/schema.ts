export interface IDispositivoCanal {
  igm?: number;
  ultimaComunicacion?: {
    fecha: string;
    bateria: number;
    cargando: boolean;
    frecuenciaReporte: number;
  };
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
}
