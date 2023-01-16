import { Semaforo } from '../../../generales';

export interface IDispositivoSLA {
  asignado?: boolean;
  configuraciones?: {
    colorIcono: string | null;
    coloresNivel: Semaforo[] | null;
  };
}
