import { Semaforo } from '../../../generales';

export interface IDispositivoSHS {
  asignado?: boolean;
  configuraciones?: {
    colorIcono: string | null;
    coloresNivel: Semaforo[] | null;
  };
}
