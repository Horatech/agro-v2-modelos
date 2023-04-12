import { Semaforo } from "../../../generales";

export interface IDispositivoCo2 {
  configuraciones?: {
    colorIcono: string | null;
    coloresNivel: Semaforo[] | null;
  };
  asignado?: boolean;
}
