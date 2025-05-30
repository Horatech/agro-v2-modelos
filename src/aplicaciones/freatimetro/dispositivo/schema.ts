import { Semaforo } from "../../../generales";

export interface IDispositivoFreatimetro {
  configuraciones?: {
    colorIcono?: string | null;
    colorError?: string | null;
    coloresNivel?: Semaforo[] | null;
  };
}
