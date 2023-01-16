import { Semaforo } from '../../../generales';

export interface IDispositivoFreatimetro {
  configuraciones?: {
    colorIcono: string | null;
    coloresNivel: Semaforo[] | null;
  };
}
