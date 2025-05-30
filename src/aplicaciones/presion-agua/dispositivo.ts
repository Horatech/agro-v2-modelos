import { Semaforo } from "../../generales";

export interface IDispositivoPresionAgua {
  alertaMayorA?: number | null; // en kpa
  alertaMenorA?: number | null; // en kpa
  colores?: {
    default?: string | null;
    error?: string | null;
    nivel?: Semaforo[] | null;
  };
}
