import { Semaforo } from '../../../generales';

export interface IDispositivoSLA {
  asignado?: boolean;
  cota?: number;
  nombre?: string;
  configuraciones?: {
    colorIcono: string | null;
    coloresNivel: Semaforo[] | null;
  };
}
