import { Semaforo } from '../../../generales';

export interface IDispositivoSLA {
  asignado?: boolean;
  configuraciones?: { colorIcono: string; coloresNivel: Semaforo[] };
}
