import { Semaforo } from '../../../generales';

export interface IDispositivoSensorRPM {
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
  pulsosPorRevolucion?: number;
  tiempoDeMuestreo?: number;
  vMajor?: number;
  vMinor?: number;
  vPatch?: number;
}
