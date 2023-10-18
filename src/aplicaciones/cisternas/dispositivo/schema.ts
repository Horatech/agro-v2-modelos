import { Semaforo } from '../../../generales';

export interface IDispositivoNivelCisterna {
  // Config en la app
  asignado?: boolean;
  nivelDeInstalacion?: number;
  unidadParaMostrar?: 'mm' | 'cm' | 'm';
  // Config del dispositivo
  configuraciones?: {
    colorIcono: string | null;
    coloresNivel: Semaforo[] | null;
  };
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
  localidad?: string;
  direccion?: string;
  factorConversion?: number;
}
