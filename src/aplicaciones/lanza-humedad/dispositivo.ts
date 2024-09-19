import { Semaforo } from "../../generales";

export interface IDispositivoLanzaHumedad {
  configuraciones?: {
    colorIcono: string | null;
    coloresNivel: Semaforo[] | null;
  };
}
