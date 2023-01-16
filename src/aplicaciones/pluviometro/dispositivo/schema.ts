import { Semaforo } from '../../../generales';

export interface IDispositivoPluviometro {
  configuraciones?: {
    colorIcono: string | null;
    coloresNivel: Semaforo[] | null;
  };
  encendido?: boolean;
  adr?: boolean;
  promediarLecturas?: boolean;
  mensajesConfirmados?: boolean;
  frecuenciaReporte?: number;
  dataRate?: number;
  vMajor?: number;
  vMinor?: number;
  vPatch?: number;
}
