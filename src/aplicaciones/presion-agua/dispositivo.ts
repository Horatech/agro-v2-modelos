import { Semaforo } from "../../generales";

export interface IDispositivoPresionAgua {
  alertaMayorA?: number | null;
  alertaMenorA?: number | null;
  colores?: {
    default?: string | null;
    error?: string | null;
    nivel?: Semaforo[] | null;
  };
}
