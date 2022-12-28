import { Semaforo } from '../../../generales';

export interface IDispositivoSLA {
  cota?: number;
  firmware?: number;
  ultimaComunicacion?: string;
  nivel?: number;
  configuraciones?: { colorIcono: string; coloresNivel: Semaforo[] };
}
